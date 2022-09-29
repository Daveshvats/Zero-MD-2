import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[!] ENTER A COUNTRY NAME, EXAMPLE ${usedPrefix + command} Mexico*`
let res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.confirmed) throw 'Country?'
if (json.confirmed) m.reply(`
🌏 Country : ${text}
✅Confirmed : ${json.confirmed.value}
📉recovered : ${json.recovered.value}
☠️Deaths : ${json.deaths.value}
💌 Update Info : ${json.lastUpdate}
`.trim())
else throw json
}
handler.help = ['covid'].map(v => v + ' <country>')
handler.tags = ['info']
handler.command = /^(corona|covid|covid19)$/i
export default handler