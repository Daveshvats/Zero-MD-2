import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `*[βππππβ] ENTER THE USERNAME OF AN INSTAGRAM USER, EXAMPLE: ${usedPrefix + command} luisitocomunica*`
const {
username,
name,
description,
followersH,
followingH,
postsH,
} = await instagramStalk(args[0])
m.reply(`
${name} *(${username})*
https://instagram.com/${username.replace(/^@/, '')}
*${followersH}* FOLLOWERS
*${following}* FOLLOWED
*${posts}* POSTS
*π±πΈπΎ:* ${description}
`.trim())
}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igstalk)$/i
export default handler
