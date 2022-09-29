import { createHash } from 'crypto'
let handler = async function (m, { text, usedPrefix }) {
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let user = global.db.data.users[m.sender]
if (user.registered === true) throw `*[!INFO!] HEY! YOU ARE ALREADY REGISTERED*\n\n*DO YOU WANT TO REMOVE YOUR REGISTRATION? USE THE COMMAND ${usedPrefix}unreg <serial number>*\n\n*IF YOU DON'T REMEMBER YOUR SERIAL NUMBER YOU CAN USE THE COMMAND ${usedPrefix}myns*`
let name = conn.getName(m.sender)
let age = Math.floor(Math.random() * 41)
age = parseInt(age)
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex')
let caption = `┏┅ ------------ ┅ -
┇「INFORMATION」
┣┅ ------------ ┅ -
┃ *NAME:* ${name}
┃ *AGE:* ${age} years
┃ *SERIAL NUMBER:*
┃ ${sn}
┗┅ ------------ ┅ -`
let author = global.author
conn.sendButton(m.chat, caption, `!YOUR SERIAL NUMBER WILL HELP YOU IF YOU WANT TO DELETE YOUR REGISTRATION IN THE BOT!\n${author}`, [['!!I AM A VERIFIED NOW!!' , '/profile']], m)
global.db.data.users[m.sender].money += 10000
global.db.data.users[m.sender].exp += 10000
}
handler.help = ['verify']
handler.tags = ['xp']
handler.command = /^(verify|register|verify|reg|register)$/i
export default handler