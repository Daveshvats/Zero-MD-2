let handler = async (m, { conn, participants, usedPrefix, command }) => {
    if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ ⚠️ ] OWNER IS RESTRICTED (enable restrict / disable restrict) USING THIS COMMAND*'
    let kicktext = `*[!] TAG A PERSON OR REPLY TO A GROUP MESSAGE TO KICK THE USER*\n\n*-◉ EXAMPLE:*\n*${usedPrefix + command} @${global.suittag} *`
    if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, { mentions: conn.parseMention(kicktext)})
    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    let owr = m.chat.split`-`[0]
    await conn.groupParticipantsUpdate(m.chat, [user], 'remove')}
    handler.command = /^(kick|kick|kick|kick)$/i
    handler.admin = true
    handler.group = true
    handler.botAdmin = true
    export default handler