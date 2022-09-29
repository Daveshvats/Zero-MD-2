import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] MISSING SONG NAME, PLEASE ENTER COMMAND PLUS SONG NAME/TITLE*\n\n*-◉ EXAMPLE:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[!INFO!] SORRY, I COULD NOT FIND THE AUDIO/VIDEO, TRY ANOTHER NAME/TITLE*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
📌 *TITLE:* ${title}
📇 *DESCRIPTION:* ${description}
📆 *PUBLISHED:* ${publishedTime}
⌚ *DURATION:* ${duration}
👀 *VIEWS:* ${viewH}
`.trim(), author, thumbnail, `${url}`, '𝚄𝚁𝙻', null, null, [
['AUDIO', `${usePrefix}yta ${url}`],
['VIDEO', `${usedPrefix}ytv ${url}`],
['MORE RESULTS', `${usedPrefix}playlist ${text}`]
], m)
}catch(e){
m.reply('*[❗𝐈𝐍𝐅𝐎❗] ERROR, PLEASE TRY AGAIN*')
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
export default handler
