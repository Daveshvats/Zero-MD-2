import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[βππππβ] ENTER THE NAME OF A SONG TO SEARCH*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let json = await res.json()
let { link } = json.result[0]
let res2 = await fetch(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkeysapi}&url=${link}`)
let json2 = await res2.json()
let { thumbnail, title, artists, preview_url } = json2.result
let spotifyi = `βββββββ¬ πππππππ β­ββββββΎβ\nβ¬\nββ£β¨ *ππΈπππ»πΎ:* ${title}\nβ΄\nβ¬\nββ£π£οΈ *ARTIST:* ${artists}\nβ΄\nβ¬\nββ£π *πππ»*: ${link}\nβ΄\nβ¬\nββ£π *DIRECT URL:* ${preview_url}\nβ΄`
conn.sendFile(m.chat, thumbnail, 'error.jpg', spotifyi, m)
await conn.sendFile(m.chat, preview_url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' }) 
} catch (e) {
throw '*[βππππβ] ERROR, COULD NOT SEARCH THE SONG OR THE HELP PAGE TO SEARCH THE SONG IS FAIL, PLEASE CHECK BACK LATER*'
}}
handler.command = /^(spotify|music)$/i
export default handler
