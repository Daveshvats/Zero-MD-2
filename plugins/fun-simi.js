import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[!] ENTER A TEXT TO TALK TO SIMSIMI OR THE BOT*\n\n*EXAMPLE: ${usedPrefix + command} Hello bot*`
let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=en`)
let json = await res.json()
m.reply(json.success)}
handler.help = ['simi', 'bot'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|bot|alexa|cortana)$/i
export default handler