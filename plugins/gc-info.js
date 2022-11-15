let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { antiToxic, antiTraba, antiviewonce, isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `*「 GROUP INFORMATION 」*\n
    *GROUP IDENTIFICATION:*
    ${groupMetadata.id}
    
    *NAME:*
    ${groupMetadata.subject}
    
    *DESCRIPTION:*
    ${groupMetadata.desc?.toString() || 'WITHOUT DESCRIPTION'}
    
    *TOTAL PARTICIPANTS:*
    ${participants.length} Participants
    
    *CREATOR OF THE GROUP:*
    @${owner.split('@')[0]}
    
    *GROUP ADMIN:*
    ${listAdmin}
    
    *AUTOMATIC OPTIONS:*
    -◉ WELCOME: ${welcome ? '✅' : '❌'}
    -◉ DETECT: ${detect ? '✅' : '❌'}
    -◉ ANTILINK: ${antiLink ? '✅' : '❌'}
    -◉ ANTILINK2: ${antiLink2 ? '✅' : '❌'}
    -◉ HORNY MODE: ${modohorny ? '✅' : '❌'}
    -◉ AUTOSTICKER: ${autosticker ? '✅' : '❌'}
    -◉ AUDIO: ${audios ? '✅' : '❌'}
    -◉ ANTIVIEWONCE: ${antiviewonce ? '✅' : '❌'}
    -◉ ANTITOXIC: ${antiToxic ? '✅' : '❌'}
    -◉ ANTI-LOCK: ${antiTraba ? '✅' : '❌'}
    `.trim()
    conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
    }
    handler.help = ['infogroup']
    handler.tags = ['group']
    handler.command = /^(groupinfo|gro?upinfo|info(gro?up|gc))$/i
    handler.group = true
    export default handler