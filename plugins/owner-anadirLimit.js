import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[!INFO!] TAG A USER WITH @tag*'
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw '*[!INFO!] ENTER THE AMOUNT OF DIAMONDS YOU WANT TO ADD*'
if (isNaN(txt)) throw '*[!INFO!] NOT SUPPORTED SYMBOL, ONLY NUMBERS!*'
let dmt = parseInt(txt)
let limit = dmt
let pjk = Math.ceil(dmt * pajak)
limit += pjk
if (limit < 1) throw '*[!INFO!] THE MINIMUM NUMBER OF DIAMONDS TO ADD IS 1*'
let users = global.db.data.users
users[who].limit += dmt
m.reply(`≡ *💎 ADDED*
┌--------------
▢ *Total:* ${dmt}
└--------------`)
}
handler.command = ['adddiamonds','addd','dard','darddiamonds']
handler.rowner = true
export default handler