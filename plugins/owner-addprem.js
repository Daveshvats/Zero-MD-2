let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `*[!INFO!] ENTER THE @tag OF THE PERSON YOU WANT TO ADD TO THE PREMIUM USERS*`
    if (global.prems.includes(who.split`@`[0])) throw '*[!INFO!] THE ENTERED USER IS ALREADY A PREMIUM USER*'
    global.prems.push(`${who.split`@`[0]}`)
    let textprem = `*[!INFO!] @${who.split`@`[0]} YOU ARE NOW A PREMIUM USER, YOU WILL HAVE NO LIMITS USING THE BOT*`
    m.reply(textprem, null, { mentions: conn.parseMention(textprem) })
    }
    handler.help = ['add prem <@user>']
    handler.tags = ['owner']
    handler.command = /^(add|\+)prem$/i
    handler.group = true
    handler.rowner = true
    export default handler