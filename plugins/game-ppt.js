let handler = async (m, { conn, text, command, usedPrefix, args }) => {
    let pp = 'https://www.bighero6challenge.com/images/thumbs/Rock,-paper-or-scissors-0003318_1584.jpeg'
    if (!args[0]) throw conn.sendHydrated(m.chat, 'ROCK, PAPER, OR SCISSORS\n\nYou can use the BUTTONS to play or you can also use these commands:\n.ppt rock\n.ppt paper \n.ppt scissors\n\nUse lowercase', wm, pp, null, null, null, null, [
    ['Stone 🥌', `${usedPrefix + command} stone`],
    ['Paper 📄', `${usedPrefix + command} paper`],
    ['Scissors ✂️', `${usedPrefix + command} scissors`]
    ], m)
    var astro = Math.random()
    if (astro < 0.34) {
    astro = 'stone'
    } else if (astro > 0.34 && astro < 0.67) {
    astro = 'scissor'
    } else {
    astro = 'paper'
    }
    if (text == astro) {
    global.db.data.users[m.sender].exp += 500
    m.reply(`🔰 Draw!\n\n*👉🏻 You: ${text}\n👉🏻 The Bot: ${astro}\n🎁 Prize +500 XP*`)
    } else if (text == 'paper') {
    if (astro == 'stone') {
    global.db.data.users[m.sender].exp += 1000
    m.reply(`🥳 You win! 🎉\n\n*👉🏻 You: ${text}\n👉🏻 The Bot: ${astro}\n🎁 Prize +1000 XP*`)
    } else {
    global.db.data.users[m.sender].exp -= 300
    m.reply(`☠️ You lose! ❌\n\n*👉🏻 You: ${text}\n👉🏻 The Bot: ${astro}\n❌ Prize -300 XP*`)
    }
    } else if (text == 'scissors') {
    if (astro == 'paper') {
    global.db.data.users[m.sender].exp += 1000
    m.reply(`🥳 You win! 🎉\n\n*👉🏻 You: ${text}\n👉🏻 The Bot: ${astro}\n🎁 Prize +1000 XP*`)
    } else {
    global.db.data.users[m.sender].exp -= 300
    m.reply(`☠️ You lose! ❌\n\n*👉🏻 You: ${text}\n👉🏻 The Bot: ${astro}\n❌ Prize -300 XP*`)
    }
    } else if (text == 'scissors') {
    if (astro == 'paper') {
    global.db.data.users[m.sender].exp += 1000
    m.reply(`🥳 You win! 🎉\n\n*👉🏻 You: ${text}\n👉🏻 The Bot: ${astro}\n🎁 Prize +1000 XP*`)
    } else {
    global.db.data.users[m.sender].exp -= 300
    m.reply(`☠️ You lose! ❌\n\n*👉🏻 You: ${text}\n👉🏻 The Bot: ${astro}\n❌ Prize -300 XP*`)
    }
    } else if (text == 'paper') {
    if (astro == 'stone') {
    global.db.data.users[m.sender].exp += 1000
    m.reply(`🥳 You win! 🎉\n\n*👉🏻 You: ${text}\n👉🏻 The Bot: ${astro}\n🎁 Prize +1000 XP*`)
    } else {
    global.db.data.users[m.sender].exp -= 300
    m.reply(`☠️ You lose! ❌\n\n*👉🏻 You: ${text}\n👉🏻 The Bot: ${astro}\n❌ Prize -300 XP*`)
    }
    } else if (text == 'stone') {
    if (astro == 'scissors') {
    global.db.data.users[m.sender].exp += 1000
    m.reply(`🥳 You win! 🎉\n\n*👉🏻 You: ${text}\n👉🏻 The Bot: ${astro}\n🎁 Prize +1000 XP*`)
    } else {
    global.db.data.users[m.sender].exp -= 300
    m.reply(`☠️ You lose! ❌\n\n*👉🏻 You: ${text}\n👉🏻 The Bot: ${astro}\n❌ Prize -300 XP*`)
    }
    }}
    handler.help = ['ppt']
    handler.tags = ['games']
    handler.command = /^(ppt)$/i
    export default handler