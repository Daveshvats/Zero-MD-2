import fs from 'fs'
let handler = async (m, { conn, text } ) => {
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat. metadata?.announce).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of groups) {
conn.sendButton(id, `*╔══< RELEASE >══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚════════ ══════╝*`, 'THIS IS AN OFFICIAL RELEASE\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🤖 OWNER 🤖', '.owner'] ,['💎 DONATE 💎', '.donasi']], false, {
contextInfo: { externalAdReply: {
title: 'OFFICIAL COMMUNICATION TO GROUPS',
body: 'zero',
sourceUrl: `https://github.com/Daveshvats/Zero-Bot`,
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*[!INFO!] MESSAGE SENT TO ${groups.length} GROUP/S*\n\n*NOTE: THIS COMMAND MAY HAVE BUGS AND MAY NOT BE SENT TO ALL CHATS, SORRY FOR THE MOMENT*`)
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.rowner = true
export default handler