/* Created By https://github.com/ALBERTO9883 */
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, {text, usedPrefix, command, conn}) => {
let sfoto = fs.readFileSync('./Menu2.jpg')
if (!text) throw `*[β] ENTER THE NAME OF THE STICKER PACK YOU WANT TO SEARCH*`
let json = await fetch(`https://api.zacros.my.id/search/sticker?query=${text}`)
let jsons = await json.json()
  let res = jsons.result.map((v, index) => `*πͺ΄ β’RESULT:* ${1 + index}\n*π΅ β’ NAME:* ${v.title}\n*π β’ πππ»:* ${v.url}`).join`\n\nβββββββββββββββββββββ\n\n`
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let buttonMessage= {
'document': { url: `https://github.com/Daveshvats/Zero-Bot` },
'mimetype': `application/${document}`,
'fileName': `γ  π―ππππ πΎππππ γ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/Daveshvats/Zero-Bot',
'mediaType': 2,
'previewType': 'pdf',
'title': `β’ RESULT OF THE SEARCHπ`,
'body': wm,
'thumbnail': sfoto,}},
'caption': res,
'footer': `β’ IF YOU WANT TO DOWNLOAD A\n*STICKERS PACK*\n*WRITE ${usedPrefix}stickerpack <URL>*`,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'πΌπ΄π½π'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.command = ['stickersearch', 'searchsticker', 'stickerssearch', 'searchstickers']
export default handler
