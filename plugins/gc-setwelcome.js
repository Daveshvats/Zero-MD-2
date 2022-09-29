let handler = async (m, { conn, text, isROwner, isOwner }) => {
    if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('*[!] WELCOME MESSAGE SUCCESSFULLY SET FOR THIS GROUP*')
    } else throw `*[!] ENTER THE WELCOME MESSAGE YOU WANT TO ADD, USE:*\n*- @user (mention)*\n*- @group (group name)*\n*- @desc (description of group)*`
    }
    handler.help = ['setwelcome <text>']
    handler.tags = ['group']
    handler.command = ['setwelcome']
    handler.admin = true
    export default handler