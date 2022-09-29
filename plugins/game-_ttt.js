import { format } from 'util'
let debugMode = !1
let winScore = 4999
let playScore = 99
export async function before(m) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game .playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
if (!/^([1-9]|(me)?nyerah|\surrender\|surrender|SURRENDER|surr?ender)$/i.test(m.text))
return !0
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) {
if (!isSurrender)
return !0 }
if (debugMode)
m.reply('[DEBUG]\n' + require('util').format({
isSurrender,
text: m.text }))
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'The game is over',
'-2': 'Invalid',
'-1': 'Invalid position',
0: 'Invalid position',
}[okay])
return !0 }
if (m.sender === room.game.winner)
isWin = true
else if (room.game.board === 511)
isTie = true
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
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true }
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `
🎮 THREE IN A ROW 🎮

❎ = @${room.game.playerX.split('@')[0]}
⭕ = @${room.game.playerO.split('@')[0]}

        ${arr.slice(0, 3).join('')}
        ${arr.slice(3, 6).join('')}
        ${arr.slice(6).join('')}

${isWin ? `@${(isSurrender ? room.game.currentTurn : room.game.winner).split('@')[0]} YOU WON 🥳, GET +4999 exp` : isTie ? 'THE GAME ENDED IN A DRAW 😐' : `TURN OF @${room.game.currentTurn.split('@')[0]}`}
`.trim()
let users = global.db.data.users
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o)
await this.sendMessage(room.x, { text: str, mentions: this.parseMention(str)}, { quoted: m })
await this.sendMessage(room.o, { text: str, mentions: this.parseMention(str)}, { quoted: m })
if (isTie || isWin) {
users[room.game.playerX].exp += playScore
users[room.game.playerO].exp += playScore
if (isWin)
users[winner].exp += winScore - playScore
if (debugMode)
m.reply('[DEBUG]\n' + format(room))
delete this.game[room.id]}}
return !0 }