import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] EXAMPLE OF USING THE COMMAND ${usedPrefix + command} Minecraft*`
const res = await googleImage(text+"wallpaper")
let image = res.getRandom()
let link = image
conn.sendHydrated(m.chat, link, link, '🔗 URL', null, null, [ ['🔄 NEXT 🔄', `/image ${text}`]
], m)
}
handler.help = ['wallpaper2 <query>', '/wallpap2 <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(wallpaper2)$/i
export default handler
