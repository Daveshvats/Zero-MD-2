import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler = async (m, { conn }) => {
let text = `
*-◉ TUTORIAL BOXMINE HOST*
> Tutorial: https://youtu.be/eC9TfKICpcY
> Official Page: https://boxmineworld.com
> Dashboard: https://dash.boxmineworld.com/home
> Panel: https://panel.boxmineworld.com
> Support: https://discord.gg/84qsr4v

------------------------------------

*-◉ TUTORIAL ACIDICNODES HOST*
> Tutorial: https://youtu.be/nbjvreJ0tUk
> Page: https://billing.acidicnodes.ml/register?ref=ADII104p
> Support: https://whatsapp.acidicnodes.com

------------------------------------

*-◉ TERM COMMANDS*
> cd && termux-setup-storage
> apt-get update -y && apt-get upgrade -y
> pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn
> git clone https://github.com/BrunoSobrino/Mystic-termux.git && cd Mystic-termux
> yarn install
> npm install
> npm update
> npm install
> npm start`
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: text, contextInfo: { externalAdReply: { title: 'Zero', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com /Daveshvats/ Zero-Bot' }, mentionedJid: [m.sender] }}}, { quoted: m })
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })
}
handler.command = /^(installbot)/i
export default handler