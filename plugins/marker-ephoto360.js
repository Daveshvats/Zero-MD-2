/*
- Get more effects at https://violetics.pw/api/ephoto360
- Use the apikey "beta"
*/
let handler = async (m, { conn, args, command }) => {
    let response = args.join(' ').split('|')
    if (!args[0]) throw '*[!] ENTER TEXT*'
    try {
    if (command == 'heartlogo') {
    conn.reply(m.chat, '*[!] MAKING YOUR LAYOUT, WAIT A WHILE...*', m)
    let res = `https://violetics.pw/api/ephoto360/heart-flashlight?apikey=beta&text=${response[0]}`
    conn.sendFile(m.chat, res, 'error.jpg', null, m)}
    if (command == 'logochristmas') {
    conn.reply(m.chat, '*[!] MAKING YOUR LAYOUT, WAIT A WHILE...*', m)
    let res = `https://violetics.pw/api/ephoto360/christmas-snow?apikey=beta&text=${response[0]}`
    conn.sendFile(m.chat, res, 'error.jpg', null, m)}
    } catch {
    conn.reply(m.chat, '*[!INFO!] ERROR, PLEASE TRY AGAIN*', m)
    }}
    handler.command = /^logoheart|logochristmas/i
    export default handler