const items = [
    'limit', 'exp',
]
let confirmation = {}
async function handler(m, { conn, args, usedPrefix, command }) {
    if (confirmation[m.sender]) return m.reply('you are making a transfer')
    let user = global.db.data.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')
    let lol = `✳️ Using the command
*${usedPrefix + command}* [type] [amount] [@user]
📌 Example : ${usedPrefix + command} exp 65 @59172945992


📍 Transferable items
┌--------------
▢ *limit* = diamond
▢ *exp* = experience
└--------------
`.trim()
    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return m.reply(lol)
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!who) return m.reply('✳️ Tag the user')
    if (!(who in global.db.data.users)) return m.reply(`✳️ User ${who} is not in the database`)
    if (user[type] * 1 < count) return m.reply(`✳️ *${type}* not enough to transfer`)
    let confirm = `
Are you sure you want to transfer *${count}* ${type} to *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}* ?

You have *60*s
`.trim()
    let c = 'FG - dylux-bot'
    conn.sendButton(m.chat, confirm, c, null, [['yes'], ['no']], m, { mentions: [who] })
    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        type,
        counting,
        timeout: setTimeout(() => (m.reply('Time`s up'), delete confirmation[m.sender]), 60 * 1000)
    }
}

handler.before = async m => {
    if (m.isBaileys) return
    if (!(m.sender in confirmation)) return
    if (!m.text) return
    let { timeout, sender, message, to, type, count } = confirmation[m.sender]
    if (m.id === message.id) return
    let user = global.db.data.users[sender]
    let _user = global.db.data.users[to]
    if (/no?/g.test(m.text.toLowerCase())) {
        clearTimeout(timeout)
        delete confirmation [sender]
        return m.reply('Cancelled')
    }
    if (/if?/g.test(m.text.toLowerCase())) {
        let previous = user[type] * 1
        let _previous = _user[type] * 1
        user[type] -= count * 1
        _user[type] += count * 1
        if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`✅ successful transfer of \n\n*${count}* *${type}* to @${( to || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [to] })
        else {
            user[type] = previous
            _user[type] = _previous
            m.reply(`Error transferring *${count}* ${type} to *@${(to || '').replace(/@s\.whatsapp\.net/g, '')}* `, null, { mentions: [to] })
        }
        clearTimeout(timeout)
        delete confirmation [sender]
    }
}

handler.help = ['transfer'].map(v => v + ' [type] [amount] [@tag]')
handler.tags = ['xp']
handler.command = ['payxp', 'transfer', 'darxp']

handler.disabled = false

export default handler

function special(type) {
    let b = type.toLowerCase()
    let special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? 'Crate' : '')
    return special
}

function isNumber(x) {
    return !isNaN(x)
}