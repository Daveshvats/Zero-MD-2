let handler = async (m, { conn, participants, usedPrefix, command }) => {
    let BANtext = `[!] TAG A PERSON OR REPLY TO A MESSAGE SENT BY THE USER THAT YOU WANT TO BAN\n\n*-◉ EXAMPLE:*\n*${usedPrefix + command} @${global.suittag}* `
    if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, { mentions: conn.parseMention(BANtext)})
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.chat
    let users = global.db.data.users
    users[who].banned = true
    m.reply('*[!INFO!] THE USER WAS SUCCESSFULLY BANNED*\n*-◉ THE USER WILL NOT BE ABLE TO USE THE BOT UNTIL THEY ARE UNBANNED*') }
    handler.command = /^banuser$/i
    handler.rowner = true
    export default handler