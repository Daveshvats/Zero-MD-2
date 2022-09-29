let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
    'open': 'not_announcement',
    'close': 'announcement',
    'open': 'not_announcement',
    'closed': 'announcement',
    'open': 'not_announcement',
    'close': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
    throw `
    *[!] WRONG FORMAT!!*
    
    *┏---( ✨EXAMPLE✨ )---┓*
    *┠┉↯ ${usedPrefix + command} open*
    *┠┉↯ ${usedPrefix + command} close*
    `.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
    {m.reply('*[ ✔ ] GROUP SET SUCCESSFUL*')}
    }
    handler.help = ['group open / close', 'group open / close']
    handler.tags = ['group']
    handler.command = /^(group|group)$/i
    handler.admin = true
    handler.botAdmin = true
    export default handler