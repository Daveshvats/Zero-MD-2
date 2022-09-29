import fs from 'fs'
let handler = async (m, { conn, text } ) => {
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of chatsall) {
conn.sendButton(id, `*╔══< RELEASE >══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚════════ ══════╝*`, 'THIS IS AN OFFICIAL RELEASE\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🤖 OWNER 🤖', '.owner'] ,['💎 DONATE 💎', '.donasi']], false, {
contextInfo: { externalAdReply: {
title: 'OFFICIAL NOTICE TO ALL CHATS',
body: 'zero',
sourceUrl: `https://github.com/Daveshvats/Zero-Bot`,
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*[!INFO!] MESSAGE SENT TO ALL CHATS*\n\n*NOTE: THIS COMMAND MAY HAVE BUGS AND WILL NOT BE SENT TO ALL CHATS, SORRY FOR THE MOMENT*`)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.rowner = true
export default handler