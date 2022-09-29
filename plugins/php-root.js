/*
Made by https://github.com/balhisyhrl
*/
import cp from 'child_process'
import { promise } from 'util'
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { conn, text, usedPrefix, command }) => {
     let teks = m.quoted ? m.quoted.text : text
     if (!teks) throw `What text do you want to encode?\n\nexample:\n${usedPrefix + command} tst`
await conn.reply(m.chat, global.wait, m)
     let textb64 = Buffer.from(teks, 'utf-8').toString('base64')
     let or
     try {
         o = await exec(`php php/ROT.php --text ${textb64}`)
     } catch (e) {
         or = e
     } finally {
         let { stdout, stderr } = or
         if (stdout.trim()) m.reply(stdout)
         //if (stderr.trim()) m.reply(stderr)
     }
}
handler.help = ['rot <text>']
handler.tags = ['tools','php']
handler.command = /^(rot)$/i

export default handler