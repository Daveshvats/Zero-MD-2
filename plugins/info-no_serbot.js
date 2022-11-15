let handler = async (m, { conn, usedPrefix }) => {
    var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
    var document = doc[Math.floor(Math.random() * doc.length)]
    let text1 = `
    *[!INFO!] BOT FUNCTIONS (#serbot, #jadibot, #bots, #getcode, #subbots, #sersubbot) ARE CURRENTLY NOT FUNCTIONAL FOR THIS BOT (Zero-Bot)*
    
    *-◉ YOU CAN TRY INSTALLING THE BOT FROM SCRATCH BY FOLLOWING ONE OF THE TUTORIALS ON THE SHADOW BROKERS CHANNEL*`
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
    'thumbnail': imagen1,}},
    'caption': text1,
    'footer': wm,
    'buttons':[
    {buttonId: `${usedPrefix}installbot`, buttonText: {displayText: 'INSTALBOT'}, type: 1}],
    'headerType': 6 }
    conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
    handler.command = /^(jadibot|serbot|bots|subbots|getcode)/i
    export default handler