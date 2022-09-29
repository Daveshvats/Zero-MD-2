let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*HELLO USER 👋🏻, I INVITE YOU TO JOIN THE OFFICIAL GROUPS OF THE SHADOW BROKERS - TEAM TO LIVE WITH THE COMMUNITY :D*

*➤ Official Bot Groups:*
*1.-* https://chat.whatsapp.com/Lh2TwKUPVJJEwTibGArGqb


`.trim(), wm, median, [['💟 MAIN MENU 💟', '#menu']], m)
handler.command = /^linkgc|groups$/i
export default handler