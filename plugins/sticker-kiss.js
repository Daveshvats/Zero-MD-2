import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
import MessageType from '@adiwajshing/baileys'
let handler = async (m, { conn}) => {
try {
if(m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if(!m.mentionedJid.length) m.mentionedJid.push(m.sender)
let res = await fetch('https://nekos.life/api/kiss')
let json = await res.json()
let { url } = json
let stiker = await sticker(null, url, `+${m.sender.split('@')[0]} kissed ${m.mentionedJid.map((user)=>(user === m.sender)? 'someone ': `+${user.split('@')[0]}`).join(', ')}`)
conn.sendFile(m.chat, sticker, null, { asSticker: true })
} catch (e) { }}
handler.command = /^(kiss|skiss|kis|kisses|kiss)$/i
export default handler