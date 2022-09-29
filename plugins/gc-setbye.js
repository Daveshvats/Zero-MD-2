let handler = async (m, { conn, text, isROwner, isOwner }) => {
    if (text) {
    global.db.data.chats[m.chat].sBye = text
    m.reply('*[!] GOODBYE MESSAGE SUCCESSFULLY SET FOR THIS GROUP*')
    } else throw `*[!] ENTER THE PARTING MESSAGE YOU WANT TO ADD, USE:*\n*- @user (mention)*`
    }
    handler.help = ['setbye <text>']
    handler.tags = ['group']
    handler.command = ['setbye']
    handler.admin = true
    export default handler