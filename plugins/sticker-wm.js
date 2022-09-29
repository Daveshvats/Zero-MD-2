import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '*[!INFO!] REPLY TO THE STICKER YOU WANT TO ADD A PACKAGE AND A NAME*'
let sticker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '*[!INFO!] RESPOND TO THE STICKER YOU WANT TO ADD A PACKAGE AND A NAME*'
let img = await m.quoted.download()
if (!img) throw '*[!INFO!] RESPOND TO THE STICKER YOU WANT TO ADD A PACKAGE AND A NAME*'
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) sticker = e
} finally {
if (sticker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else throw '*[!INFO!] SORRY, SOMETHING WRONG.. CHECK THAT YOU REPLYED TO A STICKER AND ADDED A PACKAGE NAME AND A USERNAME*'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^steal|wm$/i
export default handler