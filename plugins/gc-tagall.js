let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
    if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn)
    throw false
    }
    let weigh = args.join` `
    let oi = `*MESSAGE:* ${weigh}`
    let teks = `*⺀INVOKE - G R U P O⺀*\n\n❏ ${oi}\n\n❏ *LABELS:*\n`
    for (let mem of participants) {
    teks += `┣➥ @${mem.id.split('@')[0]}\n`}
    teks += `*└* By Zero\n\n*▌│█║▌║▌║║▌║▌║▌║█*`
    conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
    }
    handler.help = ['tagall <message>','invoke <message>']
    handler.tags = ['group']
    handler.command = /^(tagall|invoke|call|all|call)$/i
    handler.admin = true
    handler.group = true
    export default handler