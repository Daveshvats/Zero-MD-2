/* Created by https://github.com/FG98F */

let handler = async (m, { conn }) => {
    await conn.fetchBlocklist().then(async data => {
    let txt = `*≡ Block List*\n\n*Total :* ${data.length}\n\n┌-⊷\n`
    for (let i of data) {
    txt += `▢ @${i.split("@")[0]}\n`}
    txt += "└-----------"
    return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
    }).catch(error => {
    console.log(err);
    throw 'There are no blocked numbers'})}
    handler.help = ['blocklist']
    handler.tags = ['main']
    handler.command = ['blocklist', 'blocklist']
    handler.rowner = true
    export default handler