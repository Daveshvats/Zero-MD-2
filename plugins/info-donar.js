/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

/* ⚠ PLEASE DO NOT MODIFY ANYTHING HERE ⚠ */

import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donate =`
*┏ ┅ ----------------- ┅ -*
*┇ 「 DONATE 」*
*┣ ┅ ----------------- ┅ -*
*┃ HELLO ${name}*
*┃*
*┃ 👉🏻 HERE SOME DATA*
*┃ IN CASE YOU WOULD LIKE TO SUPPORT :3*
*┃*
*┃ ➤ FAPAY:*
*┃ 7404854406.famc@idfcbank*
*┃ ➤ CONCEPT: SUPPORT*
*┃ ➤ PAYPAL: https://www.paypal.me/edgarkyner*
*┃*
*┃ 👉🏻 CONTACT ME IF YOU NEED*
*┃ MORE DATA AND TO THANK YOU*
*┃ wa.me/917404854406*
*┗ ┅ ----------------- ┅ -*
`.trim()
function _0x29f5(){const _0x566d80=['chat','10zQulaE','1128940ganLMA','relayMessage','2992230eQzNdo','161nvJXUq','25962YOlrjt','179545SeklXD','34167910xOqfEH','10IIKotd','message','878088DXpOHr','9083456bTUBuy'];_0x29f5=function(){return _0x566d80;};return _0x29f5();}const _0x4683a7=_0x27ac;function _0x27ac(_0x4fd3ff,_0x2f7c1a){const _0x29f56b=_0x29f5();return _0x27ac=function(_0x27ac09,_0x443f1e){_0x27ac09=_0x27ac09-0xda;let _0x324a1d=_0x29f56b[_0x27ac09];return _0x324a1d;},_0x27ac(_0x4fd3ff,_0x2f7c1a);}(function(_0x3b8202,_0x534d5b){const _0x37ffd2=_0x27ac,_0x30c97b=_0x3b8202();while(!![]){try{const _0x12b804=parseInt(_0x37ffd2(0xe4))/0x1*(-parseInt(_0x37ffd2(0xde))/0x2)+-parseInt(_0x37ffd2(0xdb))/0x3+parseInt(_0x37ffd2(0xdf))/0x4*(-parseInt(_0x37ffd2(0xe6))/0x5)+-parseInt(_0x37ffd2(0xe3))/0x6*(parseInt(_0x37ffd2(0xe2))/0x7)+-parseInt(_0x37ffd2(0xdc))/0x8+parseInt(_0x37ffd2(0xe1))/0x9+parseInt(_0x37ffd2(0xe5))/0xa;if(_0x12b804===_0x534d5b)break;else _0x30c97b['push'](_0x30c97b['shift']());}catch(_0x9d0633){_0x30c97b['push'](_0x30c97b['shift']());}}}(_0x29f5,0xb9679));let res=generateWAMessageFromContent(m[_0x4683a7(0xdd)],{'liveLocationMessage':{'degreesLatitude':0x0,'degreesLongitude':0x0,'caption':donate,'sequenceNumber':'0','contextInfo':{'mentionedJid':conn['parseMention'](donate)}}},{'quoted':m});conn[_0x4683a7(0xe0)](m[_0x4683a7(0xdd)],res[_0x4683a7(0xda)],{});
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler
