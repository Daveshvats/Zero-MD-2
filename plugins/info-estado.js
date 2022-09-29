let handler = async (m, { conn, command, usedPrefix }) => {
    let picture = './Menu2.jpg'
    let name = await conn.getName(m.sender)
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) { process.send('uptime')
    _muptime = await new Promise(resolve => { process.once('message', resolve)
    setTimeout(resolves, 1000) }) * 1000}
    let uptime = clockString(_uptime)
    let status =`
    ╭-[ *Zero* ]
    │ *➤ HELLO ${name}*
    │
    │ *ミ🤖 BOT STATUS 🤖彡*
    │ *=> BOT ACTIVE ✅*
    │ *=> PUBLIC USE BOT ✅*
    │ *=> UP TIME: ${uptime}*
    ╰---------------
    `.trim()
    
    conn.sendHydrated(m.chat, status, wm, picture, 'https://github.com/Daveshvats/Zero-Bot', 'GITHUB', null, null, [
    ['MAIN MENU', '/menu']
    ], m)}
    
    handler.help = ['status']
    handler.tags = ['main']
    handler.command = /^(state|status|estate|state|state|stats)$/i
    export default handler
    
    function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}