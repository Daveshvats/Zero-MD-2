import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
┌---⊷ *LEVEL*
▢ Name : *${name}*
▢ Level : *${user.level}*
▢ XP : *${user.exp - min}/${xp}*
└--------------

You are missing *${max - user.exp}* of *XP* to level up
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `🎊 Well done ${conn.getName(m.sender)} Level:`
        let str = `
┌-⊷ *LEVEL UP*
▢ Previous level : *${before}*
▢ Current level : *${user.level}*
└--------------

*_The more you interact with the bots, the higher your level_*
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = ['level', 'lvl', 'levelup', 'level']

export default handler