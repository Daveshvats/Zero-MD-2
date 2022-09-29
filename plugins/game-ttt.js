import TicTacToe from '../lib/tictactoe.js'
let handler = async (m, { conn, usedPrefix, command, text }) => {
conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw '*[!] YOU ARE STILL IN A GAME WITH SOMEONE*'
if (!text) throw `*[!] GAME ROOM NAME REQUIRED*\n\n*-◉ EXAMPLE*\n*◉ ${usedPrefix + command} new room*`
let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
await m.reply('*[🕹️] START THE GAME, A PLAYER JOINED THE GAME*')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❎',
Or: '⭕',
1: '1️',
2: '2️',
3: '3️',
4: '4️',
5: '5️',
6: '6️',
7: '7️',
8: '8️',
9: '9️',
}[v]})
let str = `
🎮 THREE IN A ROW 🎮

❎ = @${room.game.playerX.split('@')[0]}
⭕ = @${room.game.playerO.split('@')[0]}

        ${arr.slice(0, 3).join('')}
        ${arr.slice(3, 6).join('')}
        ${arr.slice(6).join('')}

@${room.game.currentTurn.split('@')[0]} TURN
`.trim()
if (room.x !== room.o) await conn.sendMessage(room.x, { text: str, mentions: this.parseMention(str)}, { quoted: m })
await conn.sendMessage(room.o, { text: str, mentions: conn.parseMention(str)}, { quoted: m })
} else {
room = {
id: 'tictactoe-' + (+new Date),
x:m.chat,
either: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING' }
if (text) room.name = text
let imgplay = `https://cope-cdnmed.agilecontent.com/resources/jpg/8/9/1590140413198.jpg`
conn.sendButton(m.chat, `*🕹 THREE IN A ROW 🎮*\n\n*◉ WAITING FOR THE SECOND PLAYER*\n*◉ TO DELETE OR EXIT THE GAME USE THE COMMAND ${usedPrefix}delttt*`, wm , imgplay, [['JOIN THE GAME', `${usedPrefix + command} ${text}`]], m, { mentions: conn.parseMention(text) })
conn.game[room.id] = room
}}
handler.command = /^(tictactoe|ttc|ttt|xo)$/i
export default handler