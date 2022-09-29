import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, participants }) => {
let pp = 'https://i.imgur.com/WHjtUae.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `The user you are mentioning is not registered in my database`
try {
pp = await conn.profilePictureUrl(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `*NAME:* ${username} ${registered ? '(' + name + ') ': ''}
*NUMBER:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*LINK:* wa.me/${who.split`@`[0]}${registered ? '\n*AGE:* ' + age + ' years' : ''}
*LIMIT:* ${limit} USES
*REGISTERED:* ${registered ? 'If':'not'}
*PREMIUM:* ${prem ? 'If':'not'}
*SERIAL NUMBER:*
${sn}`
conn.sendButton(m.chat, str, author, pp, [['MAIN MENU', '/menu']], m)}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^profile|profile?$/i
export default handler