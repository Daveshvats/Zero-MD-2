let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*[!INFO!] ENTER A REPORT*\n\n*EXAMPLE:*\n*${usedPrefix + command} the ${usedPrefix}play command doesn't send anything*`
    if (text.length < 10) throw `*[!INFO!] THE REPORT MUST BE AT LEAST 10 CHARACTERS!*`
    if (text.length > 1000) throw `*[!INFO!] THE REPORT MUST BE MAXIMUM 1000 CHARACTERS!*`
    let teks = `*❒═════[REPORT]═════❒*\n*┬*\n*├❧ NUMBER:* wa.me/${m.sender.split`@`[0 ]}\n*┴*\n*┬*\n*├❧ MESSAGE:* ${text}\n*┴*`
    conn.reply('5219996125657@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
    contextInfo: {
    mentionedJid: [m.sender]
    }})
    m.reply(`*[ ✔️ ] REPORT SUCCESSFULLY SENT TO THE CREATOR OF THE BOT, YOUR REPORT WILL BE ATTENDED AS SOON AS POSSIBLE, IF IT IS FALSE OR JOKE IT WILL ONLY BE IGNORED*`)
    }
    handler.help = ['report', 'request'].map(v => v + ' <teks>')
    handler.tags = ['info']
    handler.command = /^(report|request|report|bugs|bug|report-owner|reports)$/i
    export default handler