//
//By @NeKosmic || https://github.com/NeKosmic/
//

import * as fs from 'fs'

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
  if (m.isBaileys && m.fromMe)
       return !0
  if (!m.isGroup) return !1
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let delet = m.key.participant
  let bang = m.key.id
  let name = await conn.getName(m.sender)
  let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": 'Zero', 'jpegThumbnail': null}}}
   if (chat.antiTraba && m.text.length > 2000) { //Cantidad máxima de caracteres aceptados en un mensaje//
    if (isAdmin) return conn.sendMessage(m.chat, { text: `Admin @${m.sender.split("@")[0]} just sent a text containing many characters -.-!` , mentions: [m.sender] }, { quoted: fakemek })
    await conn.sendButton(m.chat, `*[ ! ] A message containing many characters was detected [ ! ]*\n`, `${isBotAdmin ? '' : 'I am not an admin, I can not do anything :/' }`, author, ['[ DISABLE ANTI-LOCK ]', usedPrefix+'turn anti-lock off'], fakemek )
        if (isBotAdmin && bot.restrict) {
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
        setTimeout(() => {
        conn.sendMessage(m.chat, { text: `Mark chat as read ✓\n${"\n".repeat(400)}\n=> The number : wa.me/${m.sender.split ("@")[0]}\n=> Alias ​​: ${name}\n[ ! ] You have just sent a text containing many characters which may cause device failures`, mentions: [m.sender] } , { quoted: fakemek })
        }, 0)
        setTimeout(() => {
        conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }, 1000)
        } else if (!bot.restrict) return m.reply('[ ! ] To perform delete actions, my owner has to turn on restricted mode!')
    }
    return !0
}
