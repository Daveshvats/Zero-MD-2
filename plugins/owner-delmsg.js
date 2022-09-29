let handler = async (m, { command, usedPrefix, text }) => {
    let which = command.replace(/remove/i, '')
    if (!text) throw `*[!INFO!] USE ${usedPrefix}list${which} TO SEE LIST*`
    let msgs = global.db.data.msgs
    if (!text in msgs) throw `*[!INFO!] '${text}' NOT REGISTERED IN MESSAGE LIST*`
    delete msgs[text]
    m.reply(`*[!INFO!] SUCCESSFULLY DELETE THE MESSAGE WITH THE NAME FROM THE MESSAGE LIST'${text}'*` )
    }
    handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'del' + v + ' <text>')
    handler.tags = ['database']
    handler.command = /^remove(vn|msg|video|audio|img|sticker)$/
    handler.rowner = true
    export default handler