let handler = async (m, { command, text }) => m.reply(`
*⁉️ QUESTIONS ⁉️*
  
*QUESTION:* ${text}
*ANSWER:* ${['Yes','Maybe yes','Possibly','Probably not','No','Impossible'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['question <text>?']
handler.tags = ['kerang']
handler.command = /^question|questions|apakah$/i
export default handler