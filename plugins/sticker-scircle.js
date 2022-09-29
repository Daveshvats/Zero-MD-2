import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
let img = await q.download()
let url = await uploadImage(img)
let scircle = global.API('dzx', '/api/canvas/circle', { url })
let sticker = await sticker(null, circle, global.packname, global.author)
conn.sendFile(m.chat, sticker, 'sticker.webp', '', m, { asSticker: true })
} catch (e) {
m.reply('*[!INFO!] SORRY, AN ERROR OCCURRED, TRY AGAIN, DON`T FORGET TO REPLY TO AN IMAGE WHICH WILL BECOME A CIRCULAR STICKER*')
}}
handler.command = /^scircle|circle$/i
export default handler
/* `https://api.dhamzxploit.my.id/api/canvas/circle?url=${url}` */