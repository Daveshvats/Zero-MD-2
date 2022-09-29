const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `
*ミ💖 HELLO _${name}_ 💖彡*

*<AUDIO MENU/>*
*- WRITE THE FOLLOWING WORDS OR PHRASES WITHOUT ANY PREFIX (#, /, *, .)*

or ඬ🔊 _Who is your sempai botsito 7w7_
or ඬ🔊 _I diagnose you with gay_
or ඬ🔊 _No one cares_
or ඬ🔊 _Admin Party_
or ඬ🔊 _Administrator Party_
or ඬ🔊 _Long live the bride and groom_
or ඬ🔊 _Happy Birthday_
or ඬ🔊 _Silent Night_
or ඬ🔊 _Good morning_
or ඬ🔊 _Good afternoon_
or ඬ🔊 _Good night_
or ඬ🔊 _Audio hentai_
or ඬ🔊 _lgante girl_
or ඬ🔊 _Merry Christmas_
or ඬ🔊 _Go to vrg_
or ඬ🔊 _Pass pack Bot_
or ඬ🔊 _Attention group_
or ඬ🔊 _Fag who_
o ඬ🔊 _The group died_
or ඬ🔊 _Oh I'm coming_
or ඬ🔊 _so yummy guy_
or ඬ🔊 _Friday_
or ඬ🔊 _Banned_
or ඬ🔊 _Sex_
or ඬ🔊 _Hello_
or ඬ🔊 _A duck_
or ඬ🔊 _Nyanpasu_
or ඬ🔊 _I love you_
or ඬ🔊 _Yamete_
or ඬ🔊 _Banate_
or ඬ🔊 _It's fucking_
or ඬ🔊 _The Bible_
or ඬ🔊 _Onichan_
or ඬ🔊 _Bot Shit_
or ඬ🔊 _Siuuuu_
or ඬ🔊 _Epic_
or ඬ🔊 _Shitpost_
or ඬ🔊 _Rawr_
or ඬ🔊 _UwU_
or ඬ🔊 _:c_
or ඬ🔊 _a_
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/Daveshvats/Zero-Bot', 'GITHUB', null, null, [
['MAIN MENU', '/menu']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menu2|audios|menu2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio|keyaudio|keyaudios)$/i
handler.fail = null
export default handler