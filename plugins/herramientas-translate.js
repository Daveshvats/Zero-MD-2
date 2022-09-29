import translate from 'translate-google-api'
const defaultLang = 'is'
const tld = 'cn'
let handler = async (m, { args, usedPrefix, command }) => {
let msg = `*[!INFO!] PROPER USAGE OF COMMAND ${usedPrefix + command} (language) (text)*\n*EXAMPLE:*\n*${usedPrefix + command} is Hello*\n\n* KNOW THE SUPPORTED LANGUAGES AT:*\n*- https://cloud.google.com/translate/docs/languages*`
if (!args || !args[0]) return m.reply(msg)
let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ') }
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {
tld,
to: lang, })
} catch (e) {
result = await translate(`${text}`, {
tld,
to: defaultLang, })
} finally {
m.reply('*Translation:* ' + result[0]) }}
handler.help = ['translate', 'translate']
handler.tags = ['General']
handler.command = /^(tr(anslate)|translate?)$/i
export default handler