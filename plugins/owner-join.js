let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw '*[ ⚠️ ALERT ⚠️ ] WRONG OR MISSING LINK*\n*👉🏻 ENTER A GROUP LINK*\n\n*EXAMPLE:*\n*#join https://chat.whatsapp .com/FwEUGxkvZD85fIIp0gKyFC*\n\n*[!INFO!] DO NOT REPLY TO ANY MESSAGE, IT MAY CAUSE INTERFERENCE, ONLY WRITE IT AS A NEW MESSAGE*'

if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
await m.reply(`*THE BOT SUCCESSFULLY JOINED THE GROUP, ENJOY THE BOT! ✔️*`)
} else {
const data = global.owner.filter(([id]) => id)

for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) await m.reply( '*[!INFO!] NEW BOT REQUEST FOR A GROUP [!INFO!]*\n\n*-◉ REQUEST NUMBER:* ' + 'wa.me/' + m.sender.split('@' )[0] + '\n*-◉ LINK OF THE GROUP WHERE THE BOT IS REQUESTED:* ' + link, jid)

await m.reply('*[!INFO!] YOUR GROUP LINK WAS SENT TO MY OWNER*\n\n*👉🏻 YOUR GROUP WILL BE IN EVALUATION AND THE BOT OWNER WILL DECIDE WHETHER TO ADD ME OR NOT *\n\n*[!INFO!] SOME OF THE REASONS WHY YOUR REQUEST MAY BE REJECTED ARE:*\n*1.- THE BOT IS SATURATED*\n*2.- THE BOT WAS PREVIOUSLY REMOVED FROM THE GROUP *\n*3.- THE GROUP LINK WAS REESTABLISHED*\n*4.-THE BOT IS NOT ADDED TO GROUPS BY DECISION OF THE OWNER*\n\n*👉🏻 PLEASE NOTE THAT YOUR REQUEST TO JOIN THE BOT TO A GROUP MAY TAKE HOURS OR DAYS TO BE ANSWERED, BE PATIENT*')}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']
handler.command = /^join|newgroup$/i
export default handler