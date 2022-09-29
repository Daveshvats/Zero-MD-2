let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, YOU SHOULD MARRY 💍 ${toM(b)}, THEY MAKE A GOOD COUPLE 💓*`, null, {
mentions: [a, b]
})}
handler.help = ['formpair']
handler.tags = ['main', 'fun']
handler.command = ['formpair','formpairs']
handler.group = true
export default handler