// credits to https://github.com/FG98F
let handler = async (m, { conn, isPrems}) => {
    let hasil = Math.floor(Math.random() * 5000)
    let time = global.db.data.users[m.sender].lastwork + 600000
    if (new Date - global.db.data.users[m.sender].lastwork < 600000) throw `*You are tired, you must rest at least ${msToTime(time - new Date())} to get back to work!* `
    
    m.reply(`${pickRandom(global.work)} *${hasil} XP*`)
    global.db.data.users[m.sender].lastwork = new Date * 1
    }
    handler.help = ['work']
    handler.tags = ['xp']
    handler.command = ['work', 'work']
    handler.fail = null
    handler.exp = 0
    export default handler
    
    function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds
    
    return minutes + " m " + seconds + " s "
    }
    
    
    function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
    }
    
    global.work = ["You work as a cookie cutter and earn", "You work for a private military company, earning", "Host a wine tasting event and earn",
     "They kidnap you and take you to an underground coliseum where you fought monsters with people you've never met before. You win", "You clean the chimney and find",
    "You develop games for a living and you win,",
    "Why is this command called work? You're not even doing anything work-related. Yet you win", "You worked at the office overtime for",
    "You work as a bride kidnapper and win",
    "Someone came and put on a play. They gave you for watching", "You bought and sold items and you won", "You work in Grandma's restaurant as a cook and you win",
    "You work 10 minutes at a local Pizza Hut. You win,",
    "You work as a fortune cookie writer and you win", "You go through your bag and decide to sell some useless items you don't need. Turns out all that junk was worth it",
    "You see someone struggling to get a box into their car, you rush to help them before they get hurt. After helping them, they kindly give you,",
    "You develop games for a living and you win,",
    "You win a hot chili eating contest. The prize is",
    "You work all day in the company for",
    "You help moderate the DyLux group by", "You designed a logo for *FG* by",
    "You moderated the group when *FG* wasn't there, the payment was",
    "He worked his best at a printing company he was hiring and earned his well deserved!",
    "You work as a bush trimmer for *FG98* and you win", "The demand for mobile games has increased, so you create a new game full of micro-transactions. With your new game you win a total of",
    "You work as a voice actor for SpongeBob and you managed to win,",
    "You were farming and you won", "You work as a sand castle builder and you win", "You worked and you won",
    "You work as a street artist and earn", "You did social work for a good cause! For your good cause You received",
    "You take women to the store for"
    ]