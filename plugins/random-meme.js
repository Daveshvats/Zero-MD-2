import axios from "axios"
let handler = async (m, {command, conn}) => {
let res = await axios(pickRandom(meme))
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 NEXT 🔄', `/${command}`]], m)
}
handler.help = ['meme']
handler.tags = ['random']
handler.command = /^(meme)$/i
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

const meme = [
"https://meme-api.herokuapp.com/gimme/",
"https://meme-api.herokuapp.com/gimme/india/",
"https://meme-api.herokuapp.com/gimme/mexico/",
"https://meme-api.herokuapp.com/gimme/america/",
"https://meme-api.herokuapp.com/gimme/",
"https://meme-api.herokuapp.com/gimme/",
"https://meme-api.herokuapp.com/gimme/",
"https://meme-api.herokuapp.com/gimme/",
"https://meme-api.herokuapp.com/gimme/",
"https://meme-api.herokuapp.com/gimme/",
"https://meme-api.herokuapp.com/gimme/",
"https://meme-api.herokuapp.com/gimme/",
"https://meme-api.herokuapp.com/gimme/",
"https://meme-api.herokuapp.com/gimme/",
"https://meme-api.herokuapp.com/gimme/",
"https://meme-api.herokuapp.com/gimme/",
"https://meme-api.herokuapp.com/gimme/",
"https://meme-api.herokuapp.com/gimme/",
"https://meme-api.herokuapp.com/gimme/",
"https://meme-api.herokuapp.com/gimme/"
]
