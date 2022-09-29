let handler = async(m) => {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('*[!INFO!] THIS CHAT WAS SUCCESSFULLY BANNED*\n\n*-◉ THE BOT WILL NOT REACT TO ANY COMMANDS UNTIL YOU UNBAN THIS CHAT*')
    }
    handler.help = ['banchat']
    handler.tags = ['owner']
    handler.command = /^banchat$/i
    handler.rowner = true
    export default handler