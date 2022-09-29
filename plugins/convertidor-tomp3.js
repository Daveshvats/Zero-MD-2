import { toAudio } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q || q.msg).mimetype || q.mediaType || ''
if (!/video|audio/.test(mime)) throw `*[❗𝐈𝐍𝐅𝐎❗] REPLY TO THE VIDEO OR VOICE MEMO YOU WANT TO CONVERT TO AUDIO/MP3*`
let media = await q.download()
if (!media) throw '*[❗𝐈𝐍𝐅𝐎❗] SORRY, AN ERROR OCCURRED DOWNLOADING YOUR VIDEO, PLEASE TRY AGAIN*'
let audio = await toAudio(media, 'mp4')
if (!audio.data) throw '*[❗𝐈𝐍𝐅𝐎❗] SORRY, AN ERROR OCCURRED WHILE CONVERTING YOUR VOICE MEMO TO AUDIO/MP3, PLEASE TRY AGAIN*'
conn.sendMessage(m.chat, { audio: audio.data,  mimetype: 'audio/mpeg' }, { quoted: m })
}
handler.alias = ['tomp3', 'toaudio']
handler.command = /^to(mp3|audio)$/i
export default handler
