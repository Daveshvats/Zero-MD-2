import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw '*[!NFO!] ENTER YOUR SERIAL NUMBER, IF YOU DON NOT REMEMBER IT YOU CAN USE THE COMMAND #myns*'
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw '*[!NFO!] WRONG SERIAL NUMBER, PLEASE CHECK THAT YOU HAVE WRITTEN IT CORRECTLY!*\n\n*IF YOU CAN NOT REMEMBER IT YOU CAN USE THE #myns COMMAND*'
user.registered = false
m.reply(`*[ ✔ ] SUCCESSFUL, YOU ARE NO LONGER REGISTERED IN THE BOT*`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <serial number>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler