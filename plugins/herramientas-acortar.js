import axial from "axios"
import fetch from 'node-fetch'
let handler = async(m, { conn, text, xteamkey }) => {
if (!text) throw '*[!INFO!] ENTER A LINK / URL YOU WOULD LIKE TO SHORTEN*'
let json = await (await fetch(`https://api.xteam.xyz/shorturl/tinyurl?url=${text}&apikey=cb15ed422c71a2fb`)).json()
if (!json.status) throw json
let hasil = `*LINK SHORTENED CORRECTLY!!*\n\n*PREVIOUS LINK:*\n${text}\n*SHORTENED LINK:*\n*${json.result}*`.trim()
m.reply(hasil)
}
handler.help = ['tinyurl','shorten'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short|shorten|short)$/i
handler.fail = null
export default handler