import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `[âððððâ] NAME OF THE MISSING SONG, PLEASE ENTER THE COMMAND PLUS THE NAME/TITLE OR LINK OF ANY SONG OR YOUTUBE VIDEO\n\n*-â EXAMPLE:\n#play.1 Good Feeling - Flo Rida*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
if (command == 'ytmp3') {
conn.reply(m.chat, `*_â³YOUR AUDIO IS BEING PROCESSED...â³_*`, m)  
let json = await res.json()
conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'ytmp4') {
conn.reply(m.chat, `*_â³YOUR VIDEO IS BEING PROCESSED...â³_*`, m)
let json = await res.json()
conn.sendFile(m.chat, json.result.video, 'error.mp4', `_Zero_`, m)}
} catch (e) {
m.reply('*[âððððâ] ERROR, PLEASE TRY AGAIN*')
}}
handler.help = ['ytmp3' , 'ytmp4'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['ytmp3', 'ytmp4']
export default handler
