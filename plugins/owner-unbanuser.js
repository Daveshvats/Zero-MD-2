let handler = async (m, { conn, text}) => {
    if (!text) throw '*[!INFO!] ENTER THE @tag OF SOME USER*'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '*[!INFO!] ENTER THE @tag OF SOME USER*'
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, `*[!INFO!] USER SUCCESSFULLY UNBAN*\n*-◉ USER CAN NOW USE BOT*`, m)
    }
    handler.help = ['unbanuser']
    handler.tags = ['owner']
    handler.command = /^unbanuser$/i
    handler.rowner = true
    export default handler