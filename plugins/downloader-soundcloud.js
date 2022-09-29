import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] ENTER THE NAME OF A SONG TO SEARCH*`
try {
let res = await fetch(`https://hadi-api.herokuapp.com/api/soundcloud/play?query=${text}`)
let json = await res.json()
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${json.result.download}`)).text()
let soundcloudt = `❒═══❬ 𝐒𝐎𝐔𝐍𝐃𝐂𝐋𝐎𝐔𝐃 ❭═══╾❒
┬
├‣✨ *TITLE:* ${json.result.title}
┴
┬
├‣💚 *DIRECT URL:* ${shortUrl}\n┴\n\n*- Sending music...*\n\n_﹫ZERO_`
conn.sendFile(m.chat, json.result.thumbnail, '', soundcloudt, m)
conn.sendFile(m.chat, json.result.download, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch (e) {
throw '*[❗𝐈𝐍𝐅𝐎❗] ERROR, COULD NOT SEARCH THE SONG OR THE HELP PAGE TO SEARCH THE SONG IS FAIL, PLEASE CHECK BACK LATER*'
}}
handler.command = /^(soundcloud|cover)$/i
export default handler
