import fetch from 'node-fetch'
import translate from 'translate-google-api'
let handler = async (m, { conn, text, args }) => {
if (!args[0]) throw `*[❗] ENTER THE NAME OF THE APK YOU WANT TO SEARCH*`
const tld = 'cn'
let enc = encodeURIComponent(text)
try {
let json = await fetch(`https://latam-api.vercel.app/api/playstore?apikey=brunosobrino&q=${enc}`)
let gPlay = await json.json()
let mystic = await translate(`${gPlay.descripcion}`, { tld, to: 'es' })
if (!gPlay.titulo) return m.reply(`[ ! ] Sin resultados`)
conn.sendMessage(m.chat,{image:{url: gPlay.imagen},caption:`🔍 Result: ${gPlay.title}
🧬 Identifier: ${gPlay.id}
⛓️ Link: ${gPlay.link}
🖼️ Image: ${gPlay.image}
✍️ Developer: ${gPlay.developer}
📜 Description: ${mystic}
💲 Currency: ${gPlay.currency}
🎭 Free?: ${gPlay.free}
💸 Price: ${gPlay.price}
📈 Score: ${gPlay.score}`},{quoted:m})
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] ERROR, PLEASE TRY AGAIN*')
console.log(e)
}}
handler.help = ['playstore <aplicacion>']
handler.tags = ['internet']
handler.command = /^(playstore)$/i
export default handler
