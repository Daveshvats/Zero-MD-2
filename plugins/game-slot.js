/* CREDITS TO https://github.com/FG98F */

let handler = async (m, { args, usedPrefix, command }) => {
        let fa = `
        *[!] ENTER THE AMOUNT YOU WISH TO BET*
        
        *📌 EXAMPLE:*
        *${usedPrefix + command} 100*`.trim()
        if (!args[0]) throw fa
        if (isNaN(args[0])) throw fa
        let bet = parseInt(args[0])
        let users = global.db.data.users[m.sender]
        let time = users.lastslot + 10000
        if (new Date - users.lastslot < 10000) throw `*⏳ WAIT ${msToTime(time - new Date())} TO BET AGAIN*`
        if (bet < 100) throw '*[!] THE MINIMUM TO BET IS 100 XP*'
        if (users.exp < bet) {
        throw `*[!] YOUR XP IS NOT ENOUGH TO BET THAT AMOUNT, PLAY OTHER GAMES OR INTERACT WITH THE BOT TO EARN MORE XP*`
        }
        let emojis = ["🐋", "🐉", "🕊️"];
        let a = Math.floor(Math.random() * emojis.length);
        let b = Math.floor(Math.random() * emojis.length);
        let c = Math.floor(Math.random() * emojis.length);
        let x = [],
        y = [],
        z = [];
        for (let i = 0; i < 3; i++) {
        x[i] = emojis[a];
        a++;
        if (a == emojis.length) a = 0;
        }
        for (let i = 0; i < 3; i++) {
        y[i] = emojis[b];
        b++;
        if (b == emojis.length) b = 0;
        }
        for (let i = 0; i < 3; i++) {
        z[i] = emojis[c];
        c++;
        if (c == emojis.length) c = 0;
        }
        let end;
        if (a == b && b == c) {
        end = `*YOU WON! 🎁 +${bet + bet} XP*`
        users.exp += bet
        } else if (a == b || a == c || b == c) {
        end = `*🔮 YOU ALMOST MADE IT! KEEP TRYING*\n*TAKE +10 XP*`
        users.exp += 10
        } else {
        end = `*❌ YOU LOST -${bet} XP*`
        users.exp -= bet
        }
        users.lastslot = new Date * 1
        return await m.reply(
                `
        🎰 | *SLOTS*
        --------
        ${x[0]} : ${y[0]} : ${z[0]}
        ${x[1]} : ${y[1]} : ${z[1]}
        ${x[2]} : ${y[2]} : ${z[2]}
        --------
        🎰 | ${end}`)
        }
        handler.help = ['slot <bet>']
        handler.tags = ['game']
        handler.command = ['slot']
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