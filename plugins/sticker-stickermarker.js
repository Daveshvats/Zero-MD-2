import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys'
const effects = ['jail', 'gay', 'glass', 'wasted' ,'triggered', 'lolice', 'simpcard', 'horny']

let handler = async (m, { conn, usedPrefix, text }) => {
let effect = text.trim().toLowerCase()
if (!effects.includes(effect)) throw `
*_✳️ CORRECT USE OF THE COMMAND ✳️_*
*👉 Use:* ${usedPrefix}stickermaker (effect)
- And reply to a picture
*✅ Example:* ${usedPrefix}stickermaker jail
*List Effect:*
${effects.map(effect => `_> ${effect}_`).join('\n')}
`.trim()
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*_🔰 Image not found_*\n\n*_✅ Please reply to an image_*'
if (!/image\/(jpe?g|png)/.test(mime)) throw `*_⚠️ Unsupported format_*\n\n*_👉🏻 Respond to an image_*`
let img = await q.download()
let url = await uploadImage(img)
let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
avatar:url
})
try {
let sticker = await sticker(null, apiUrl, global.packname, global.author)
conn.sendFile(m.chat, sticker, null, { asSticker: true })
} catch (e) {
m.reply('*_⚠️ There was an error converting to sticker_*\n\n*_✳️ Sending image instead..._*')
await conn.sendFile(m.chat, apiUrl, 'image.png', null, m)
}}
handler.help = ['stickmaker (caption|reply media)']
handler.tags = ['General']
handler.command = /^(stickmaker|stickermaker|stickermarker|cs)$/i
export default handler