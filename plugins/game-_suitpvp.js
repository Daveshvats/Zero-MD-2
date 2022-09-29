let handler = m => m
handler.before = async function (m) {
this.suit = this.suit ? this.suit : {}
if (db.data.users[m.sender].suit < 0) db.data.users[m.sender].suit = 0
let room = Object.values(this.suit).find(room => room.id && room.status && [room.p, room.p2].includes(m.sender))
if (room) {
let win = ''
let tie = false
if (m.sender == room.p2 && /^(acc(ept)?|terima|accept|gas|acceptare?|nao|gamau|reject|ga(k.)?bisa)/i.test(m. text) && m.isGroup && room.status == 'wait') {
if (/^(tolak|gamau|reject|ga(k.)?bisa)/i.test(m.text)) {
let textno = `*[!] @${room.p2.split`@`[0]} I REJECT THE PVP, THE GAME IS CANCELED*`
m.reply(textno, null, {mentions: this.parseMention(textno)})
delete this.suit[room.id]
return !0 }
room.status = 'play'
room.asal = m.chat
clearTimeout(room.waktu)
let textplay = `🎮 GAMES - PVP - GAMES 🎮\n\n-◉ GAME STARTS, OPTIONS HAVE BEEN SENT TO @${room.p.split`@`[0]} AND @${ PRIVATECHATSroom.p2.split`@`[0]}\n\n◉ SELECT AN OPTION IN YOUR PRIVATE CHATS, RESPECTIVELY\n*◉ CHOOSE AN OPTION IN wa.me/${conn.user.jid.split`@`[ 0]}*`
m.reply(textplay, m.chat, {mentions: this.parseMention(textplay)})
let imgplay = `https://www.merca2.es/wp-content/uploads/2020/05/Piedra-papel-o-tijera-0003318_1584-825x259.jpeg`
if (!room.pilih) this.sendHydrated(room.p, 'PLEASE SELECT ONE OF THE FOLLOWING', `WINNER +${room.poin}XP\nLOSER ${room.poin_lose}XP`, imgplay, null , null, null, null, [['STONE 🗿', 'Stone'], ['PAPER 📄', 'Paper'], ['SCISSORS ✂️', 'Scissors']], m)
if (!room.pilih2) this.sendHydrated(room.p2, 'PLEASE SELECT ONE OF THE FOLLOWING', `WINNER +${room.poin}XP\nLOSER ${room.poin_lose}XP`, imgplay, null , null, null, null, [['STONE 🗿', 'Stone'], ['PAPER 📄', 'Paper'], ['SCISSORS ✂️', 'Scissors']], m)
room.waktu_milih = setTimeout(() => {
if (!room.pilih && !room.pilih2) this.sendButton(m.chat, `[!] NO PLAYER TOOK THE INITIATIVE TO START THE GAME, THE PVP HAS BEEN CANCELLED`, wm, null, [['MAIN MENU ', '#menu']], m)
else if (!room.pilih || !room.pilih2) {
win = !room.pilih ? room.p2 : room.p
let textnull = `*[!] @${(room.pilih ? room.p2 : room.p).split`@`[0]} YOU DID NOT CHOOSE ANY OPTIONS, END OF PVP*`
this.sendButton(m.chat, textnull, wm, null, [['MAIN MENU', '#menu']], m, { mentions: this.parseMention(textnull)})
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot
db.data.users[win == room.p ? room.p2 : room.p].exp -= room.poin_lose
}
delete this.suit[room.id]
return !0
}, room.timeout)}
let jwb = m.sender == room.p
let jwb2 = m.sender == room.p2
let g = /scissors/i
let b = /stone/i
let k = /paper/i
let reg = /^(scissors|rock|paper)/i
if (jwb && reg.test(m.text) && !room.pilih && !m.isGroup) {
room.pilih = reg.exec(m.text.toLowerCase())[0]
room.text = m.text
m.reply(`*[ ✔ ] YOU HAVE CHOSEN ${m.text}, RETURN TO GROUP AND ${room.pilih2 ? `CHECK RESULTS*` : 'WAIT FOR RESULTS*'}`)
if (!room.pilih2) this.reply(room.p2, '*[!] THE OPPONENT IS CHOSEN, IT IS YOUR TURN TO CHOOSE!!*', 0)}
if (jwb2 && reg.test(m.text) && !room.pilih2 && !m.isGroup) {
room.pilih2 = reg.exec(m.text.toLowerCase())[0]
room.text2 = m.text
m.reply(`*[ ✔ ] YOU HAVE CHOSEN ${m.text}, RETURN TO GROUP AND ${room.pilih ? `CHECK RESULTS*` : 'WAIT FOR RESULTS*'}`)
if (!room.pilih) this.reply(room.p, '*[!] THE OPPONENT IS CHOSEN, IT IS YOUR TURN TO CHOOSE!!*', 0)}
let stage = room.pilih
let stage2 = room.pilih2
if (room.pilih && room.pilih2) {
clearTimeout(room.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = room.p
else if (b.test(stage) && k.test(stage2)) win = room.p2
else if (g.test(stage) && k.test(stage2)) win = room.p
else if (g.test(stage) && b.test(stage2)) win = room.p2
else if (k.test(stage) && b.test(stage2)) win = room.p
else if (k.test(stage) && g.test(stage2)) win = room.p2
else if (stage == stage2) tie = true
this.reply(room.asal, `
*👑 RRP RESULTS 👑*${tie ? '\n*-◉ TIE!!*' : ''}

*@${room.p.split`@`[0]} (${room.text}) ${tie ? '' : room.p == win ? ` WON 🥳 +${room.poin}XP*` : ` LOST 🤡 ${room.poin_lose}XP*`}
*@${room.p2.split`@`[0]} (${room.text2}) ${tie ? '' : room.p2 == win ? ` WON 🥳 +${room.poin}XP*` : ` LOST 🤡 ${room.poin_lose}XP*`}
`.trim(), m, { mentions: [room.p, room.p2] } )
if (!tie) {
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot
db.data.users[win == room.p ? room.p2 : room.p].exp += room.poin_lose
}
delete this.suit[room.id]}}
return !0
}
handler.exp = 0
export default handler
function random(arr) {
return arr[Math.floor(Math.random() * arr.length)]}