import { toPTT } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `*[❗𝐈𝐍𝐅𝐎❗] RESPOND TO THE VIDEO OR AUDIO YOU WANT TO CONVERT TO A VOICE MEMO*`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] SORRY, AN ERROR OCCURRED DOWNLOADING YOUR VIDEO, PLEASE TRY AGAIN*'
if (!media && !/audio/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] SORRY, AN ERROR OCCURRED DOWNLOADING YOUR VIDEO, PLEASE TRY AGAIN*'
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] SORRY, AN ERROR OCCURRED WHILE CONVERTING YOUR AUDIO TO VOICE MEMO, PLEASE TRY AGAIN*'
if (!audio.data && !/video/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] SORRY, AN ERROR OCCURRED WHILE CONVERTING YOUR AUDIO TO VOICE MEMO, PLEASE TRY AGAIN*'
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['tovn (reply)']
handler.tags = ['audio']
handler.command = /^to(vn|(ptt)?)$/i
export default handler
