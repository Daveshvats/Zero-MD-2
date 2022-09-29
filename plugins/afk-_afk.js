export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
        *[❗𝐈𝐍𝐅𝐎❗] MADE INACTIVE (𝙰𝙵𝙺)${user.afkReason ? ' AFTER BEING INACTIVE (𝙰𝙵𝙺) FOR REASON: ' + user.afkReason : ''}*
  
        *—◉ IDLE TIME (𝙰𝙵𝙺): ${(new Date - user.afk).toTimeString()}*
        `.trim())
              user.afk = -1
              user.afkReason = ''
          }
          let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
          for (let jid of jids) {
              let user = global.db.data.users[jid]
              if (!user)
                  continue
              let afkTime = user.afk
              if (!afkTime || afkTime < 0)
                  continue
              let reason = user.afkReason || ''
              m.reply(`*[❗] DON'T LABEL IT [❗]*
      
      *—◉ THE USER YOU LABELED THIS INACTIVITY (𝙰𝙵𝙺)*
      *—◉ ${reason ? 'REASON FOR INACTIVITY (𝙰𝙵𝙺): ' + reason : 'REASON FOR INACTIVITY (𝙰𝙵𝙺): _THE USER DID NOT SPECIFY A REASON_'}*
      *—◉ IDLE ELAPSED TIME (𝙰𝙵𝙺): ${(new Date - afkTime).toTimeString()}*
  `.trim())
    }
    return true
}
