let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `*[!INFO!] ENTER THE @tag OF A GROUP PARTICIPANT OR THE PERSON'S NAME*`
    if (command == 'gay2') {
    conn.reply(m.chat, `
    _*${text.toUpperCase()}* *ES 🏳️‍🌈* *${(500).getRandom()}%* *GAY*_
    `.trim(), m, m.mentionedJid ? {
    mentions: m.mentionedJid
    } : {})}
    if (command == 'lesbian') {
    conn.reply(m.chat, `
    _*${text.toUpperCase()}* *ES 🏳️‍🌈* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}* _
    `.trim(), m, m.mentionedJid ? {
    mentions: m.mentionedJid
    } : {})}
    if (command == 'pajero') {
    conn.reply(m.chat, `
    _*${text.toUpperCase()}* *ES 😏💦* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_
    `.trim(), m, m.mentionedJid ? {
    mentions: m.mentionedJid
    } : {})}
    if (command == 'pajera') {
    conn.reply(m.chat, `
    _*${text.toUpperCase()}* *ES 😏💦* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_
    `.trim(), m, m.mentionedJid ? {
    mentions: m.mentionedJid
    } : {})}
    if (command == 'fucking') {
    conn.reply(m.chat, `
    _*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *MORE INFORMATION TO YOUR PRIVATE 🔥🥵 XD *_
    `.trim(), m, m.mentionedJid ? {
    mentions: m.mentionedJid
    } : {})}
    if (command == 'whore') {
    conn.reply(m.chat, `
    _*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *MORE INFORMATION TO YOUR PRIVATE 🔥🥵 XD *_
    `.trim(), m, m.mentionedJid ? {
    mentions: m.mentionedJid
    } : {})}
    if (command == 'armed') {
    conn.reply(m.chat, `
    _*${text.toUpperCase()}* *EN* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 💩*_
    `.trim(), m, m.mentionedJid ? {
    mentions: m.mentionedJid
    } : {})}
    if (command == 'manca') {
    conn.reply(m.chat, `
    _*${text.toUpperCase()}* *EN* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 💩*_
    `.trim(), m, m.mentionedJid ? {
    mentions: m.mentionedJid
    } : {})}
    if (command == 'rat') {
    conn.reply(m.chat, `
    _*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 🐁 EAT CHEESE 🧀 *_
    `.trim(), m, m.mentionedJid ? {
    mentions: m.mentionedJid
    } : {})}
    if (command == 'prostitute') {
    conn.reply(m.chat, `
    _*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 🫦👅, WHO DO YOU WANT YOUR SERVICES? XD*_
    `.trim(), m, m.mentionedJid ? {
    mentions: m.mentionedJid
    } : {})}
    if (command == 'prostitute') {
    conn.reply(m.chat, `
    _*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 🫦👅, WHO DO YOU WANT YOUR SERVICES? XD*_
    `.trim(), m, m.mentionedJid ? {
    mentions: m.mentionedJid
    } : {})}
    }
    handler.help = ['gay2', 'lesbian', 'wanker', 'wanker', 'puto', 'whore', 'one-armed', 'one-armed', 'rat', 'prostitute', 'prostitute']. map(v => v + ' @tag | name')
    handler.tags = ['calculator']
    handler.command = /^gay2|lesbian|wanker|wanker|fucking|whore|one-armed|one-armed|rat|prostitute|prostitute/i
    export default handler