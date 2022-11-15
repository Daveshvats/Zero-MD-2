/* Created By https://github.com/unptoadrih15 */

import fetch from 'node-fetch'
let timeout = 60000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
let id = m.chat
if (id in conn.tebaklagu) {
conn.reply(m.chat, 'There are still unanswered songs in this chat.', conn.tebaklagu[id][0])
throw false
}
let res = await fetch(global.API('xteam', '/game/tebaklagu/', { id: '5LTV57azwaid7dXfz5fzJu' }, 'APIKEY'))
if (res.status !== 200) throw await res.text()
let result = await res.json()
let json = result.result
let caption = `
GUESS THE TITLE OF THE SONG
Time ${(timeout / 1000).toFixed(2)} seconds
Type *${usedPrefix}hint* to get a hint
Prize: ${poin} XP
REPLY TO THIS MESSAGE WITH ANSWERS!`.trim()
conn.tebaklagu[id] = [
await m.reply(caption),
json, poin,
setTimeout(() => {
if (conn.tebaklagu[id]) conn.reply(m.chat, `Time's up!\nReply is ${json.judul}`, conn.tebaklagu[id][0])
delete conn.tebaklagu[id]
}, timeout)
]
await conn.sendFile(m.chat, json.preview, 'coba-lagi.mp3', '', m)
}
handler.help = ['tebaklagu']
handler.tags = ['game']
handler.command = /^song|song$/i
export default handler