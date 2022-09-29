let handler = async (m, { conn, usedPrefix }) => {
    var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
    var document = doc[Math.floor(Math.random() * doc.length)]
    let text = `
    *-◉ THE NUMBER OF MY CREATOR IS wa.me/917404854406*
    
    *-◉ COLLABORATOR NUMBER 1 IS wa.me/919466558184*
    
    *-◉ THE NUMBER OF THE COLLABORATOR 2 IS wa.me/523326356169*
    
    `.trim()
    let buttonMessage= {
    'document': { url: `https://github.com/Daveshvats/Zero-Bot` },
    'mimetype': `application/${document}`,
    'fileName': `「Hello World」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
    'forwardingScore': 200,
    'isForwarded': true,
    'externalAdReply': {
    'mediaUrl': 'https://github.com/Daveshvats/Zero-Bot',
    'mediaType': 2,
    'previewType': 'pdf',
    'title': 'THE BEST Bot OF WHATsAPP',
    'body': wm,
    'thumbnail': imagen1, }},
    'captions': text,
    'footer': wm,
    'buttons':[
    {buttonId: `${usedPrefix}menu`, buttonText: {displayText: '👾 MENU 👾'}, type: 1},
    {buttonId: `${usedPrefix}donate`, buttonText: {displayText: '📮 DONATE 📮'}, type: 1}],
    'headerType': 6 }
    conn.sendMessage(m.chat, buttonMessage, { quoted: m })
    //let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Bruno Sobrino 👑;;;\nFN:Bruno Sobrino 👑\nORG:Bruno Sobrino 👑\nTITLE:\nitem1.TEL;waid=5219996125657:+521 999 612 5657\nitem1.X-ABLabel:Bruno Sobrino 👑\nX-WA-BIZ-DESCRIPTION:[!] CONTACT THIS NUMBER FOR IMPORTANT THINGS.\nX-WA-BIZ-NAME:Bruno Sobrino 👑\nEND:VCARD`
    //await conn.sendMessage(m.chat, { contacts: { displayName: 'Bruno Sobrino 👑', contacts: [{ vcard }] }}, {quoted: m})
    //const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    //await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
    handler.help = ['owner', 'creator']
    handler.tags = ['info']
    handler.command = /^(owner|creator|creator|owner)$/i
    export default handler