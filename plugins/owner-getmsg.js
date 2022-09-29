let handler = async (m, { conn, command, usedPrefix, text }) => {
    let which = command.replace(/ver/i, '')
    if (!text) throw `*[!INFO!] USE *${usedPrefix}list${which}* TO SEE LIST*`
    let msgs = global.db.data.msgs
    if (!text in msgs) throw `*[!INFO!] '${text}' NOT REGISTERED IN MESSAGE LIST*`
    let _m = await conn.serializeM(msgs[text])
    await _m.copyNForward(m.chat, true)
    }
    handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'get' + v + ' <text>')
    handler.tags = ['database']
    handler.command = /^view(vn|msg|video|audio|img|sticker)$/
    handler.rowner = true
    export default handler