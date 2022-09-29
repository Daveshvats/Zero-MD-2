let handler = async (m, { conn, text, participants }) => {
    let member = participants.map(u => u.id)
    if(!text) {
    var sum = member.length
    } else {
    var sum = text}
    vartotal = 0
    var sider = []
    for(let i = 0; i < sum; i++) {
    let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
    if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && ! users.isSuperAdmin) {
    if (typeof global.db.data.users[member[i]] !== 'undefined'){
    if(global.db.data.users[member[i]].whitelist == false){
    overall++
    sider.push(member[i])}
    }else {
    overall++
    sider.push(member[i])}}}
    if(total == 0) return conn.reply(m.chat, `*[!] THIS GROUP IS ACTIVE, IT HAS NO GHOSTS :D*`, m)
    m.reply(`*[ ⚠ INACTIVE REVIEW ⚠ ]*\n\n*GROUP:* ${await conn.getName(m.chat)}\n*GROUP MEMBERS:* ${sum}\n\n *[ 👻 GHOST LIST 👻 ]*\n${sider.map(v => ' 👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\ n\n*NOTE: THIS MAY NOT BE 100% ACCURATE, THE BOT STARTS COUNTING MESSAGES AFTER THIS NUMBER IS ACTIVATED*`, null, { mentions: sider })}
    handler.command = /^(seeghosts|ghosts|sider)$/i
    handler.admin = true
    handler.botAdmin = true
    export default handler