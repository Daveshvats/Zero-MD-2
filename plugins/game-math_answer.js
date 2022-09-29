global.math = global.math ? global.math : {}
let handler = async (m, { conn }) => {
let id = m.chat
if (!m.quoted) return
if (m.quoted.sender != conn.user.jid) return
if (!/^HOW MUCH IS THE RESULT OF/i.test(m.quoted.text)) return
if (!(m.chat in global.math)) return conn.sendButton(m.chat, '*[!INFO!] THAT QUESTION HAS ALREADY BEEN ANSWERED*', author, null, [['PLAY AGAIN' , '/mates']], m)
if (m.quoted.id == global.math[id][0].id) {
let math = global.math[id][1]
if (m.text == math.result) {
conn.sendButton(m.chat, `*CORRECT ANSWER!!*\n*YOU WON: ${math.bonus} XP*`, author, null, [['PLAY AGAIN', `/math ${math. mode}`]], m)
global.db.data.users[m.sender].exp += math.bonus
clearTimeout(global.math[id][3])
delete global.math[id]
} else {
if (--global.math[id][2] == 0) {
conn.sendButton(m.chat, `*YOUR CHANCES ARE OVER*\n*RESPONSE IS: ${math.result}*`, author, null, [['PLAY AGAIN', `/math ${math. mode}`]], m)
clearTimeout(global.math[id][3])
delete global.math[id]
} else conn.reply(m.chat, `*WRONG ANSWER!!*\n*${global.math[id][2]} opportunities STILL AVAILABLE*`, m)
}}}
handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/
handler.command = new RegExp
export default handler