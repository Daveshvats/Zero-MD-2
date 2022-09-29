let handler = async (m, { conn, text }) => {

    let [nomor, weigh, jumlah] = text.split('|')
    if (!nomor) throw '*[ ⚠️ ] PLEASE ENTER THE NUMBER TO WHICH MESSAGES WILL BE SPAMED!*\n*PROPER USE:*\n*-◉ #spamwa number|text|amount*\n* EXAMPLE:*\n*-◉ #spamwa 5219999999999|reply :v|25*'
    if (!pesan) throw '*[ ⚠️ ] PLEASE ENTER THE MESSAGE TO SPAM!*\n*PROPER USE:*\n*-◉ #spamwa number|text|amount*\n*EXAMPLE:*\n *-◉ #spamwa 5219999999999|reply :v|25*'
    if (jumlah && isNaN(jumlah)) throw '*[ ⚠️ ] AMOUNT MUST BE A NUMBER!*\n*PROPER USE:*\n*-◉ #spamwa number|text|amount*\n*EXAMPLE:*\ n*-◉ #spamwa 5219999999999|answer :v|25*'
    
    let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@ s.whatsapp.net'
    let fixedJumlah = jumlah ? jumlah * 1 : 10
    if (fixedJumlah > 50) throw '*[ ⚠️ ] TOO MANY MESSAGES! THE QUANTITY MUST BE LESS THAN 50 MESSAGES*️'
    await m.reply(`*[!] MESSAGE SPAM TO ${nomor} NUMBER WAS SUCCESSFUL*\n*AMOUNT SENT:*\n*-◉ ${fixedJumlah} times!*`)
    for (let i = fixedJumlah; i > 1; i--) {
    if (i !== 0) conn.reply(fixedNumber, weigh.trim(), m)
    }}
    handler.help = ['spamwa <number>|<message>|<no of messages>']
    handler.tags = ['General']
    handler.command = /^spam(wa)?$/i
    handler.group = false
    handler.premium = false
    handler.private = true
    handler.limit = true
    export default handler