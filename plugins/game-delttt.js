import MessageType from '@adiwajshing/baileys'
let handler = async (m, { conn, usedPrefix, command }) => {
let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return conn.sendButton(m.chat, '*[!] YOU ARE NOT IN A TICKET BOX GAME*', wm, null, [['START GAME ROOM', `${usedPrefix }ttt new game`]], m)
delete conn.game[room.id]
await m.reply('*[ ✔ ] THREE IN STREAM GAME ROOM REMOVED*')}
handler.command = /^(delttt|deltt|delxo|deltictactoe)$/i
handler.fail = null
export default handler