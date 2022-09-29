let handler = async (m, { command, usedPrefix, text }) => {
    let M = m.constructor
    let which = command.replace(/add/i, '')
    if (!m.quoted) throw '*[!INFO!] REPLY TO A TEXT, MESSAGE, PICTURE, ETC. AND ADD A TEXT AS A KEYWORD*'
    if (!text) throw `*[!INFO!] USE *${usedPrefix}list${which}* TO SEE LIST OF MESSAGES`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `*[!INFO!] '${text}' HAS BEEN REGISTERED IN THE MESSAGE LIST`
    msgs[text] = M.toObject(await m.getQuotedObj())
    m.reply(`*[!INFO!] MESSAGE SUCCESSFULLY ADDED TO MESSAGE LIST AS '${text}'*\n*ACCESS WITH ${usedPrefix}ver${which} ${text}*`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <text>')
handler.tags = ['database']
handler.command = /^add(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
export default handler