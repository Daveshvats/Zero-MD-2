import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] MISSING SONG NAME, PLEASE ENTER COMMAND PLUS SONG NAME/TITLE*\n\n*-◉ EXAMPLE:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[!INFO!] SORRY, I COULD NOT FIND THE AUDIO/VIDEO, TRY ANOTHER NAME/TITLE*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
*◉- PLAY DOCUMENT -◉*

📌 *TITLE:* ${title}
📇 *DESCRIPTION:* ${description}
📆 *PUBLISHED:* ${publishedTime}
⌚ *DURATION:* ${durationH}
👀 *VIEWS:* ${viewH}
`.trim(), author, thumbnail, `${url}`, 'URL', null, null, [
['AUDIO', `${usedPrefix}yta.2 ${url}`],
['VIDEO',`${usedPrefix}ytv.2 ${url}`]
], m)
}catch(e){
m.reply('*[❗𝐈𝐍𝐅𝐎❗] ERROR, PLEASE TRY AGAIN*')
console.log(e)
}}
handler.command = /^play3|playdoc?$/i
export default handler
