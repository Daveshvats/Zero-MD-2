import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[βππππβ] ENTER THE NAME OF A SONG TO SEARCH*`
try {
let res = await fetch(`https://hadi-api.herokuapp.com/api/soundcloud/play?query=${text}`)
let json = await res.json()
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${json.result.download}`)).text()
let soundcloudt = `βββββ¬ ππππππππππ β­ββββΎβ
β¬
ββ£β¨ *TITLE:* ${json.result.title}
β΄
β¬
ββ£π *DIRECT URL:* ${shortUrl}\nβ΄\n\n*- Sending music...*\n\n_οΉ«ZERO_`
conn.sendFile(m.chat, json.result.thumbnail, '', soundcloudt, m)
conn.sendFile(m.chat, json.result.download, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch (e) {
throw '*[βππππβ] ERROR, COULD NOT SEARCH THE SONG OR THE HELP PAGE TO SEARCH THE SONG IS FAIL, PLEASE CHECK BACK LATER*'
}}
handler.command = /^(soundcloud|cover)$/i
export default handler
