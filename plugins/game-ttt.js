import TicTacToe from '../lib/tictactoe.js'
let handler = async (m, { conn, usedPrefix, command, text }) => {
conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw '*[!] YOU ARE STILL IN A GAME WITH SOMEONE*'
if (!text) throw `*[!] GAME ROOM NAME REQUIRED*\n\n*-â EXAMPLE*\n*â ${usedPrefix + command} new room*`
let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
await m.reply('*[đšī¸] START THE GAME, A PLAYER JOINED THE GAME*')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: 'â',
Or: 'â­',
1: '1ī¸',
2: '2ī¸',
3: '3ī¸',
4: '4ī¸',
5: '5ī¸',
6: '6ī¸',
7: '7ī¸',
8: '8ī¸',
9: '9ī¸',
}[v]})
let str = `
đŽ THREE IN A ROW đŽ

â = @${room.game.playerX.split('@')[0]}
â­ = @${room.game.playerO.split('@')[0]}

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
conn.sendButton(m.chat, `*đš THREE IN A ROW đŽ*\n\n*â WAITING FOR THE SECOND PLAYER*\n*â TO DELETE OR EXIT THE GAME USE THE COMMAND ${usedPrefix}delttt*`, wm , imgplay, [['JOIN THE GAME', `${usedPrefix + command} ${text}`]], m, { mentions: conn.parseMention(text) })
conn.game[room.id] = room
}}
handler.command = /^(tictactoe|ttc|ttt|xo)$/i
export default handler