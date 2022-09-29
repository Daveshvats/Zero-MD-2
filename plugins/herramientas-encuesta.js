/* Credits to https://github.com/ALBERTO9883 */

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    if (!args[0]) throw `⚠️️ *_Enter a text to start the poll._*\n\n📌 Example : \n*${usedPrefix + command}* text|text2...`
    if (!text.includes('|')) throw `⚠️️ Separate polls with *|* \n\n📌 Example : \n*${usedPrefix + command}* text|text2...`
    let a = []
    let b = text.split('|')
    for (let c = 0; c < b.length; c++) { a.push([b[c]]) }
    return conn.sendPoll(m.chat, `📊 *Poll for:*\n\n${text}`, y, m)}
    handler.help = ['poll <text|text2>']
    handler.tags = ['group']
    handler.command = ['poll', 'poll']
    export default handler