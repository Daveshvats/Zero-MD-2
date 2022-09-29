import { facebookDl } from './scraper.js'
import { savefrom } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] ENTER A FACEBOOK LINK, EXAMPLE: ${usedPrefix + command}* https://www.facebook.com/HolaSoySkull/videos/982580549178886/?app=fbl`
try {
m.reply(`*[❗] DOWNLOADING YOUR VIDEO, PLEASE WAIT A MOMENT, THIS PROCESS MAY TAKE BETWEEN 2 AND 10 MINUTES DEPENDING ON THE LENGTH OF THE VIDEO...*`)
let res = await facebookDl(args[0]).catch(async _ => await savefrom(args[0])).catch(_ => null)
let url = res?.url?.[0]?.url || res?.url?.[1]?.url || res?.['720p'] || res?.['360p']
conn.sendMessage(m.chat, { video: { url }, caption: res?.meta?.title || '*HERE IS HIS VIDEO*' }, { quoted: m })
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] ERROR, PLEASE TRY AGAIN*\n\n*- CHECK THAT THE LINK IS SIMILAR TO:*\n*◉* https://www.facebook.com/HolaSoySkull/videos/982580549178886/?app=fbl')
}}
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
export default handler
