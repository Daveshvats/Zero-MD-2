/* Created by https://github.com/BrunoSobrino */
       /* Diseño by Yameko-Bot V1*/

import yts from "yt-search"
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] MISSING SONG NAME, PLEASE ENTER THE COMMAND PLUS THE NAME/TITLE OF A SONG*\n\n*-◉ EXAMPLE:*\n*${usedPrefix + command} Begin you*`    
try {
let search = await yts(args.join(" "))
let listSerch = []
let listSerch2 = []
let listSerch3 = []
let listSerch4 = []
let teskd = `music related to: ${args.join(" ")}`
const sections = [{
title: `|－－－－－{ ＡＵＤＩＯ }－－－－－|`,
rows: listSerch },
{              
title: `|－－－－－{ ＶＩＤＥＯ }－－－－－|`,
rows: listSerch2 },
{              
title: `|－－{ ＤＯＣＵＭＥＮＴＯ  ＭＰ３ }－－|`,
rows: listSerch3 },
{              
title: `|－－{ ＤＯＣＵＭＥＮＴＯ  ＭＰ４ }－－|`,
rows: listSerch4 }]
const listMessage = {
text: teskd,
footer: 'Choose an option and press Submit',
title: " 『 RELATED MUSIC 』",
buttonText: "[♦ RESULTS ♦]",
sections}
for (let i of search.all) {
listSerch.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3 ${i.url}`})
listSerch2.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4 ${i.url}`})
listSerch3.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3doc ${i.url}`})
listSerch4.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4doc ${i.url}`})}
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] ERROR, PLEASE TRY AGAIN WITH ANOTHER SONG NAME*')
}}
handler.command = /^playlist|playlist2$/i
export default handler
