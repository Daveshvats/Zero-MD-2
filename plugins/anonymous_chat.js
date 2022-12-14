async function handler(m, { command }) {
command = command.toLowerCase()
this.anonymous = this.anonymous ? this.anonymous : {}
switch (command) {
case 'next':
case 'leave': {
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) return this.sendButton(m.chat, '*[βππππβ]you are not in an anonymous chat*\n\n*do you want to start one?*\n_click on the following button_', author, null, [['start anonymous chat', `.start`]], m)
m.reply('*[ β ] successfully exited anonymous chat*')
let other = room.other(m.sender)
if (other) await this.sendButton(other, '*[βππππβ]the other user has left anonymous chat*\n\n*do you want to go to another anonymous chat?*\n_click on the following button_', author , null, [['start anonymous chat', `.start`]], m)
delete this.anonymous[room.id]
if (command === 'leave') break
}
case 'start': {
if (Object.values(this.anonymous).find(room => room.check(m.sender))) return this.sendButton(m.chat, '*[βππππβ] ππΎπ³π°ππΈπ° π΄πππ°π π΄π½ ππ½ π²π·π°π π°π½πΎπ½πΈπΌπΎ πΎ π΄ππΏπ΄ππ°π½π³πΎ π° πππ΄ πΎπππΎ ππππ°ππΈπΎ ππ΄ ππ½π° πΏπ°ππ° πΈπ½πΈπ²πΈπ°π*\n\n*ΒΏπππΈπ΄ππ΄π ππ°π»πΈπ π³π΄π» π²π·π°π π°π½πΎπ½πΈπΌπΎ?*\n_π³π° π²π»πΈπ²πΊ π΄π½ π΄π» NEXT π±πΎππΎπ½_', author, null, [['ππ°π»πΈπ π³π΄π» π²π·π°π π°π½πΎπ½πΈπΌπΎ', `.leave`]], m)
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
    await this.sendButton(room.a, '*[ β ] a person has joined the anonymous chat, they can start chatting*', author, null, [['go to another chat', `.next`]], m )
    room.b = m.sender
    room.state = 'CHATTING'
    await this.sendButton(m.chat, '*[ β ] a person has joined the anonymous chat, they can start chat*', author, null, [['go to another chat', `.next`]], m )
    }else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
await this.sendButton(m.chat, '*[βππππβ] waiting for another user to start anonymous chat*\n\n*do you want to leave anonymous chat?*\n_click on the following button_', author, null, [['exit anonymous chat ', `.leave`]], m)
}
break
}}}
handler.help = ['start', 'leave', 'next']
handler.tags = ['anonymous']
handler.command = ['start', 'leave', 'next']
handler.private = true
export default handler
