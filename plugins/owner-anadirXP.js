import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[!INFO!] TAG A USER WITH @tag*'
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw '*[!INFO!] ENTER THE AMOUNT OF EXPERIENCE (XP) YOU WANT TO ADD*'
if (isNaN(txt)) throw '*[!INFO!] NOT SUPPORTED SYMBOL, ONLY NUMBERS!*'
let xp = parseInt(txt)
let exp = xp
let pjk = Math.ceil(xp * pajak)
exp += pjk
if (exp < 1) throw '*[!INFO!] THE MINIMUM NUMBER OF EXPERIENCE (XP) TO ADD IS 1*'
let users = global.db.data.users
users[who].exp += xp
   m.reply(`≡ *ADDED XP*
┌--------------
▢ *Total:* ${xp}
└--------------`)
}
handler.command = ['addexp','addexp']
handler.rowner = true
export default handler