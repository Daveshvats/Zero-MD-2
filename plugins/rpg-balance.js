let handler = async (m, {usedPrefix}) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let name = conn.getName(who)
    m.reply(`
    ┌---⊷ BALANCE ⊶
    ▢ *Name:* ${name}
    ▢ *Diamonds:* ${global.db.data.users[who].limit}💎
    └--------------
    *NOTE:*
    *You can buy diamonds 💎 using the commands*
    ❏ *${usedPrefix}buy <amount>*
    ❏ *${usedPrefix}buyall*`)
    }
    handler.help = ['bal']
    handler.tags = ['xp']
    handler.command = ['bal', 'diamonds', 'diamond', 'balance']
    export default handler