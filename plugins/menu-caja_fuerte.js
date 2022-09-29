const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
let name = await conn.getName(m.sender)
let str = `
*_ミ💖 HELLO ${name} 💖彡_*

ㅤㅤ *🗳️<SAFE/>🔐*

- HERE YOU CAN SAVE MESSAGES THAT YOU WANT TO SEE LATER

*<ADD TO LIST/>*

o ඬ🗳️ _${usedPrefix}addarmsg *<text/command/keyword>* (responds to a text)_
o ඬ🗳️ _${usedPrefix}addvn *<text/command/keyword>* (responds to a voice memo)_
or ඬ🗳️ _${usedPrefix}addvideo *<text/command/keyword>* (responds to a video)_
o ඬ🗳️ _${usedPrefix}addaudio *<text/command/keyword>* (responds to an audio)_
o ඬ🗳️ _${usedPrefix}addimg *<text/command/keyword>* (responds to an image)_
o ඬ🗳️ _${usedPrefix}addsticker *<text/command/keyword>* (responds to a sticker)_

*<LIST OF COMMANDS/>*

or ඬ🗳️ _${usedPrefix}listamsg_
or ඬ🗳️ _${usedPrefix}listavn_
or ඬ🗳️ _${usedPrefix}listavideo_
or ඬ🗳️ _${usedPrefix}listaudio_
or ඬ🗳️ _${usedPrefix}listaimg_
or ඬ🗳️ _${usedPrefix}listasticker_

*<VIEW TEXTS OR FILES/>*

or ඬ🗳️ _${usedPrefix}vermsg *<text/command/keyword>*_
or ඬ🗳️ _${usedPrefix}vervn *<text/command/keyword>*_
or ඬ🗳️ _${usedPrefix}vervideo *<text/command/keyword>*_
or ඬ🗳️ _${usedPrefix}veraudio *<text/command/keyword>*_
or ඬ🗳️ _${usedPrefix}verimg *<text/command/keyword>*_
or ඬ🗳️ _${usedPrefix}versticker *<text/command/keyword>*_

*<DELETE/>*

or ඬ🗳️ _${usedPrefix}removemsg *<text/command/keyword>*_
o ඬ🗳️ _${usedPrefix}removevn *<text/command/keyword>*_
or ඬ🗳️ _${usedPrefix}removevideo *<text/command/keyword>*_
or ඬ🗳️ _${usedPrefix}removeaudio *<text/command/keyword>*_
or ඬ🗳️ _${usedPrefix}removeimg *<text/command/keyword>*_
or ඬ🗳️ _${usedPrefix}removesticker *<text/command/keyword>*_`.trim()

conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/Daveshvats/Zero-Bot', 'GITHUB', null, null, [
['MAIN MENU', '/menu']
], m)
}}
handler.help = ['safe']
handler.tags = ['owner']
handler.command = /^(safe)$/i
handler.rowner = true
handler.fail = null
export default handler