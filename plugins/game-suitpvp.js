let timeout = 60000
let point = 500
let poin_lose = -100
let poin_bot = 200
let handler = async (m, { conn, usedPrefix, text }) => {
conn.suit = conn.suit ? conn.suit : {}
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw '*[! ] END YOUR GAME BEFORE STARTING ANOTHER*'
let textwho = `*WHO DO YOU WANT TO CHALLENGE? TAG A PERSON*\n\n*-◉ EXAMPLE:*\n${usedPrefix}suit @${global.suittag}`
if (!m.mentionedJid[0]) return m.reply(textwho, m.chat, { mentions: conn.parseMention(textwho)})
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw ` *[!] THE PERSON YOU WANT TO CHALLENGE IS STILL PLAYING ANOTHER GAME, WAIT UNTIL THEY FINISH PLAYING`
let id = 'suit_' + new Date() * 1
let caption = `🎮 GAMES - PVP - GAMES 🎮\n\n-◉ @${m.sender.split`@`[0]} CHALLENGE @${m.mentionedJid[0].split`@`[0 ]} TO IN A PVP OF ROCK, PAPER, SCISSORS`.trim()
let footer = `◉ TYPE "accept" TO ACCEPT\n◉ TYPE "reject" TO REJECT`
let imgplaygame = `https://www.merca2.es/wp-content/uploads/2020/05/Piedra-papel-o-tijera-0003318_1584-825x259.jpeg`
conn.suit[id] = {
chat: await conn.sendButton(m.chat, caption, footer, imgplaygame, [[`Accept`], [`Reject`]], null, {mentions: conn.parseMention(caption)}),
id:id,
p:m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (conn.suit[id]) conn.reply(m.chat, `[ ⏳ ] TIMEOUT, PVP CANCELED DUE TO NO RESPONSE`, m)
delete conn.suit[id]
}, timeout), poin, poin_lose, poin_bot, timeout
}}
handler.command = /^pvp|suit(pvp)?$/i
handler.group = true
handler.game = true
export default handler