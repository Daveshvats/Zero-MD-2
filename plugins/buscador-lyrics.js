import fetch from 'node-fetch'
import { lyrics, lyricsv2 } from '@bochilteam/scraper'
import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw `*[βππππβ] EXAMPLE OF CORRECT USE OF THE COMMAND: ${usedPrefix + command} beret ojala*`
try {
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
title: result.author + result.title}))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.thumbnail.genius) throw json


let letratexto =`
TITLE: *${result.title}*
AUTHOR ${result.author}


${result.lyrics}


πππ ${result.link}
`.trim()
conn.sendHydrated(m.chat, letratexto, wm, json.thumbnail.genius, null, null, null, null, [
['TO DOWNLOAD π°ππ³πΈπΎ', `/play.1 ${text}`],
['TO DOWNLOAD ππΈπ³π΄πΎ', `/play.2 ${text}`]
], m)
} catch (e) {
m.reply('*[βππππβ] ERROR, PLEASE TRY AGAIN*')
console.log(e)
}}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|letra)$/i
export default handler
