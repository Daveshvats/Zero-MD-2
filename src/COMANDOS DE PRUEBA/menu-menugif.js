import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let img = await(await fetch('https://www.paidmembershipspro.com/wp-content/uploads/2017/07/PayPal-Express.png')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
*ãđ HELLO â¨${taguser}â¨, HERE IS THE FULL MENU OF Zero-Bot đåŊĄ* đåŊĄ*

*đ DATE: ${week}, ${date}*
*đ UP TIME: ${uptime}*
*đ USERS: ${rtotalreg}*
${readMore}
*<BOT INFORMATION/>*

Â° āļŦ â đ _${usedPrefix}grupos_
Â° āļŦ â đ _${usedPrefix}estado_
Â° āļŦ â đ _${usedPrefix}infobot_
Â° āļŦ â đ _${usedPrefix}speedtest_
Â° āļŦ â đ _${usedPrefix}donar_
Â° āļŦ â đ _${usedPrefix}grouplist_
Â° āļŦ â đ _${usedPrefix}owner_
Â° āļŦ â đ _${usedPrefix}script_
Â° āļŦ â đ _Bot_ (đĸđ đ đ đđ đđđđđđđ)

*<JOIN A BOT TO YOUR GROUP/>*

or āļŦđŊ _${usedPrefix}join *<link / link / url>*_

*<GAMES/>*

Â° āļŦâđī¸ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
Â° āļŦâđī¸ _${usedPrefix}ppt *<papel / tijera /piedra>*_
Â° āļŦâđī¸ _${usedPrefix}prostituto *<nombre / @tag>*_
Â° āļŦâđī¸ _${usedPrefix}prostituta *<nombre / @tag>*_
Â° āļŦâđī¸ _${usedPrefix}gay2 *<nombre / @tag>*_
Â° āļŦâđī¸ _${usedPrefix}lesbiana *<nombre / @tag>*_
Â° āļŦâđī¸ _${usedPrefix}pajero *<nombre / @tag>*_
Â° āļŦâđī¸ _${usedPrefix}pajera *<nombre / @tag>*_
Â° āļŦâđī¸ _${usedPrefix}puto *<nombre / @tag>*_
Â° āļŦâđī¸ _${usedPrefix}puta *<nombre / @tag>*_
Â° āļŦâđī¸ _${usedPrefix}manco *<nombre / @tag>*_
Â° āļŦâđī¸ _${usedPrefix}manca *<nombre / @tag>*_
Â° āļŦâđī¸ _${usedPrefix}rata *<nombre / @tag>*_
Â° āļŦâđī¸ _${usedPrefix}love *<nombre / @tag>*_
Â° āļŦâđī¸ _${usedPrefix}doxear *<nombre / @tag>*_
Â° āļŦâđī¸ _${usedPrefix}pregunta *<texto>*_
Â° āļŦâđī¸ _${usedPrefix}suitpvp *<@tag>*_
Â° āļŦâđī¸ _${usedPrefix}slot *<apuesta>*_
Â° āļŦâđī¸ _${usedPrefix}ttt *<nombre sala>*_
Â° āļŦâđī¸ _${usedPrefix}delttt_
Â° āļŦâđī¸ _${usedPrefix}simi *<texto>*_
Â° āļŦâđī¸ _${usedPrefix}top *<texto>*_
Â° āļŦâđī¸ _${usedPrefix}topgays_
Â° āļŦâđī¸ _${usedPrefix}topotakus_
Â° āļŦâđī¸ _${usedPrefix}formarpareja_
Â° āļŦâđī¸ _${usedPrefix}verdad_
Â° āļŦâđī¸ _${usedPrefix}reto_
Â° āļŦâđī¸ _${usedPrefix}cancion_
Â° āļŦâđī¸ _${usedPrefix}pista_

*<ACTIVATE OR DEACTIVATE/>*

Â° āļŦââī¸ _${usedPrefix}enable *welcome*_
Â° āļŦââī¸ _${usedPrefix}disable *welcome*_
Â° āļŦââī¸ _${usedPrefix}enable *modohorny*_
Â° āļŦââī¸ _${usedPrefix}disable *modohorny*_
Â° āļŦââī¸ _${usedPrefix}enable *antilink*_
Â° āļŦââī¸ _${usedPrefix}disable *antilink*_
Â° āļŦââī¸ _${usedPrefix}enable *antilink2*_
Â° āļŦââī¸ _${usedPrefix}disable *antilink2*_
Â° āļŦââī¸ _${usedPrefix}enable *detect*_
Â° āļŦââī¸ _${usedPrefix}disable *detect*_
Â° āļŦââī¸ _${usedPrefix}enable *audios*_
Â° āļŦââī¸ _${usedPrefix}disable *audios*_
Â° āļŦââī¸ _${usedPrefix}enable *autosticker*_
Â° āļŦââī¸ _${usedPrefix}disable *autosticker*_
Â° āļŦââī¸ _${usedPrefix}enable *antiviewonce*_
Â° āļŦââī¸ _${usedPrefix}disable *antiviewonce*_
Â° āļŦââī¸ _${usedPrefix}enable *antitoxic*_
Â° āļŦââī¸ _${usedPrefix}disable *antitoxic*_
Â° āļŦââī¸ _${usedPrefix}enable *antitraba*_
Â° āļŦââī¸ _${usedPrefix}disable *antitraba*_
Â° āļŦââī¸ _${usedPrefix}enable *antiarabes*_
Â° āļŦââī¸ _${usedPrefix}disable *antiarabes*_

*<BUG REPORTS/>*

Â° āļŦâđ° _${usedPrefix}report *<text>*_

*<DOWNLOADS/>*

Â° āļŦâđĨ _${usedPrefix}facebook *<enlace / link / url>*_
Â° āļŦâđĨ _${usedPrefix}instagram *<enlace / link / url>*_
Â° āļŦâđĨ _${usedPrefix}mediafire *<enlace / link / url>*_
Â° āļŦâđĨ _${usedPrefix}instagram *<enlace / link / url>*_
Â° āļŦâđĨ _${usedPrefix}gitclone *<enlace / link / url>*_
Â° āļŦâđĨ _${usedPrefix}stickerpack *<enlace / link / url>*_
Â° āļŦâđĨ _${usedPrefix}gdrive *<enlace / link / url>*_
Â° āļŦâđĨ _${usedPrefix}tiktok *<enlace / link / url>*_
Â° āļŦâđĨ _${usedPrefix}xnxxdl *<enlace / link / url>*_
Â° āļŦâđĨ _${usedPrefix}xvideosdl *<enlace / link / url>*_
Â° āļŦâđĨ _${usedPrefix}ytmp3 *<enlace / link / url>*_
Â° āļŦâđĨ _${usedPrefix}ytmp4 *<enlace / link / url>*_
Â° āļŦâđĨ _${usedPrefix}ytmp3doc *<enlace / link / url>*_
Â° āļŦâđĨ _${usedPrefix}ytmp4doc *<enlace / link / url>*_
Â° āļŦâđĨ _${usedPrefix}play.1 *<texto / enlace / link / url>*_
Â° āļŦâđĨ _${usedPrefix}play.2 *<texto / enlace / link / url>*_
Â° āļŦâđĨ _${usedPrefix}play *<texto>*_
Â° āļŦâđĨ _${usedPrefix}playdoc *<texto>*_
Â° āļŦâđĨ _${usedPrefix}playlist *<texto>*_
Â° āļŦâđĨ _${usedPrefix}playlist2 *<texto>*_
Â° āļŦâđĨ _${usedPrefix}spotify *<texto>*_
Â° āļŦâđĨ _${usedPrefix}ringtone *<texto>*_
Â° āļŦâđĨ _${usedPrefix}soundcloud *<texto>*_
Â° āļŦâđĨ _${usedPrefix}imagen *<texto>*_
Â° āļŦâđĨ _${usedPrefix}pinteret *<texto>*_
Â° āļŦâđĨ _${usedPrefix}wallpaper *<texto>*_
Â° āļŦâđĨ _${usedPrefix}wallpaper2 *<texto>*_
Â° āļŦâđĨ _${usedPrefix}pptiktok *<nombre de usuario>*_
Â° āļŦâđĨ _${usedPrefix}igstalk *<nombre de usuario>*_
Â° āļŦâđĨ _${usedPrefix}igstory *<nombre de usuario>*_
Â° āļŦâđĨ _${usedPrefix}tiktokstalk *<nombre de usuario>*_

*<GROUPS/>*

Â° āļŦâđ _${usedPrefix}add *<numero>*_
Â° āļŦâđ _${usedPrefix}kick *<@tag>*_
Â° āļŦâđ _${usedPrefix}grupo *<abrir / cerrar>*_
Â° āļŦâđ _${usedPrefix}promote *<@tag>*_
Â° āļŦâđ _${usedPrefix}demote *<@tag>*_
Â° āļŦâđ _admins *<texto>*_ (đĸđ đ đ đđ đđđđđđđ)
Â° āļŦâđ _${usedPrefix}demote *<@tag>*_
Â° āļŦâđ _${usedPrefix}infogroup_
Â° āļŦâđ _${usedPrefix}link_
Â° āļŦâđ _${usedPrefix}setname *<texto>*_
Â° āļŦâđ _${usedPrefix}setdesc *<texto>*_
Â° āļŦâđ _${usedPrefix}invocar *<texto>*_
Â° āļŦâđ _${usedPrefix}setwelcome *<texto>*_
Â° āļŦâđ _${usedPrefix}setbye *<texto>*_
Â° āļŦâđ _${usedPrefix}hidetag *<texto>*_
Â° āļŦâđ _${usedPrefix}fantasmas_
Â° āļŦâđ _${usedPrefix}destraba_

*<CONVERTERS/>*

Â° āļŦâđ§§ _${usedPrefix}togifaud *<responde a un video>*_
Â° āļŦâđ§§ _${usedPrefix}toimg *<responde a un sticker>*_
Â° āļŦâđ§§ _${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
Â° āļŦâđ§§ _${usedPrefix}toptt *<responde a un video / audio>*_
Â° āļŦâđ§§ _${usedPrefix}tovideo *<responde a un sticker>*_
Â° āļŦâđ§§ _${usedPrefix}tourl *<responde a un video / imagen / audio>*_
Â° āļŦâđ§§ _${usedPrefix}tts es *<texto>*_

*<EFFECTS AND LOGOS/>*

Â° āļŦâđī¸ _${usedPrefix}logos *<efecto> <texto>*_
Â° āļŦâđī¸ _${usedPrefix}logocorazon *<texto>*_
Â° āļŦâđī¸ _${usedPrefix}logochristmas *<texto>*_
Â° āļŦâđī¸ _${usedPrefix}simpcard *<@tag>*_
Â° āļŦâđī¸ _${usedPrefix}hornycard *<@tag>*_
Â° āļŦâđī¸ _${usedPrefix}lolice *<@tag>*_
Â° āļŦâđī¸ _${usedPrefix}ytcomment *<texto>*_
Â° āļŦâđī¸ _${usedPrefix}phmaker *<opcion><responder a imagen>*_
Â° āļŦâđī¸ _${usedPrefix}itssostupid_
Â° āļŦâđī¸ _${usedPrefix}pixelar_
Â° āļŦâđī¸ _${usedPrefix}blur_

*<PHRASES AND TEXTS/>*

Â° āļŦâđĨ _${usedPrefix}consejo_
Â° āļŦâđĨ _${usedPrefix}fraseromantica_
Â° āļŦâđĨ _${usedPrefix}historiaromantica_

*<RANDOM/>*

Â° āļŦâđž _${usedPrefix}cristianoronaldo_
Â° āļŦâđž _${usedPrefix}messi_
Â° āļŦâđž _${usedPrefix}meme_
Â° āļŦâđž _${usedPrefix}itzy_
Â° āļŦâđž _${usedPrefix}blackpink_
Â° āļŦâđž _${usedPrefix}kpop *<blackpink / exo / bts>*_
Â° āļŦâđž _${usedPrefix}lolivid_
Â° āļŦâđž _${usedPrefix}loli_
Â° āļŦâđž _${usedPrefix}navidad_
Â° āļŦâđž _${usedPrefix}ppcouple_
Â° āļŦâđž _${usedPrefix}wpmontaÃąa_
Â° āļŦâđž _${usedPrefix}pubg_
Â° āļŦâđž _${usedPrefix}wpgaming_
Â° āļŦâđž _${usedPrefix}wpaesthetic_
Â° āļŦâđž _${usedPrefix}wpaesthetic2_
Â° āļŦâđž _${usedPrefix}wprandom_
Â° āļŦâđž _${usedPrefix}wallhp_
Â° āļŦâđž _${usedPrefix}wpvehiculo_
Â° āļŦâđž _${usedPrefix}wpmoto_
Â° āļŦâđž _${usedPrefix}coffee_
Â° āļŦâđž _${usedPrefix}pentol_
Â° āļŦâđž _${usedPrefix}caricatura_
Â° āļŦâđž _${usedPrefix}ciberespacio_
Â° āļŦâđž _${usedPrefix}technology_
Â° āļŦâđž _${usedPrefix}doraemon_
Â° āļŦâđž _${usedPrefix}hacker_
Â° āļŦâđž _${usedPrefix}planeta_
Â° āļŦâđž _${usedPrefix}randomprofile_
Â° āļŦâđž _${usedPrefix}neko_
Â° āļŦâđž _${usedPrefix}waifu_
Â° āļŦâđž _${usedPrefix}akira_
Â° āļŦâđž _${usedPrefix}akiyama_
Â° āļŦâđž _${usedPrefix}anna_
Â° āļŦâđž _${usedPrefix}asuna_
Â° āļŦâđž _${usedPrefix}ayuzawa_
Â° āļŦâđž _${usedPrefix}boruto_
Â° āļŦâđž _${usedPrefix}chiho_
Â° āļŦâđž _${usedPrefix}chitoge_
Â° āļŦâđž _${usedPrefix}deidara_
Â° āļŦâđž _${usedPrefix}erza_
Â° āļŦâđž _${usedPrefix}elaina_
Â° āļŦâđž _${usedPrefix}eba_
Â° āļŦâđž _${usedPrefix}emilia_
Â° āļŦâđž _${usedPrefix}hestia_
Â° āļŦâđž _${usedPrefix}hinata_
Â° āļŦâđž _${usedPrefix}inori_
Â° āļŦâđž _${usedPrefix}isuzu_
Â° āļŦâđž _${usedPrefix}itachi_
Â° āļŦâđž _${usedPrefix}itori_
Â° āļŦâđž _${usedPrefix}kaga_
Â° āļŦâđž _${usedPrefix}kagura_
Â° āļŦâđž _${usedPrefix}kaori_
Â° āļŦâđž _${usedPrefix}keneki_
Â° āļŦâđž _${usedPrefix}kotori_
Â° āļŦâđž _${usedPrefix}kurumi_
Â° āļŦâđž _${usedPrefix}madara_
Â° āļŦâđž _${usedPrefix}mikasa_
Â° āļŦâđž _${usedPrefix}miku_
Â° āļŦâđž _${usedPrefix}minato_
Â° āļŦâđž _${usedPrefix}naruto_
Â° āļŦâđž _${usedPrefix}nezuko_
Â° āļŦâđž _${usedPrefix}sagiri_
Â° āļŦâđž _${usedPrefix}sasuke_
Â° āļŦâđž _${usedPrefix}sakura_
Â° āļŦâđž _${usedPrefix}cosplay_


*<AUDIO EFFECTS/>*
*- RESPOND TO AN AUDIO OR VOICE NOTE*

Â° āļŦâđ¤ _${usedPrefix}bass_
Â° āļŦâđ¤ _${usedPrefix}blown_
Â° āļŦâđ¤ _${usedPrefix}deep_
Â° āļŦâđ¤ _${usedPrefix}earrape_
Â° āļŦâđ¤ _${usedPrefix}fast_
Â° āļŦâđ¤ _${usedPrefix}fat_
Â° āļŦâđ¤ _${usedPrefix}nightcore_
Â° āļŦâđ¤ _${usedPrefix}reverse_
Â° āļŦâđ¤ _${usedPrefix}robot_
Â° āļŦâđ¤ _${usedPrefix}slow_
Â° āļŦâđ¤ _${usedPrefix}smooth_
Â° āļŦâđ¤ _${usedPrefix}tupai_

*<ANONYMOUS CHAT/>*

Â° āļŦâđŗ _${usedPrefix}start_
Â° āļŦâđŗ _${usedPrefix}next_
Â° āļŦâđŗ _${usedPrefix}leave_

*<SEARCHERS/>*

Â° āļŦâđ _${usedPrefix}stickersearch *<texto>*_
Â° āļŦâđ _${usedPrefix}xnxxsearch *<texto>*_
Â° āļŦâđ _${usedPrefix}animeinfo *<texto>*_
Â° āļŦâđ _${usedPrefix}google *<texto>*_
Â° āļŦâđ _${usedPrefix}letra *<texto>*_
Â° āļŦâđ _${usedPrefix}wikipedia *<texto>*_
Â° āļŦâđ _${usedPrefix}ytsearch *<texto>*_
Â° āļŦâđ _${usedPrefix}apkdone *<texto>*_
Â° āļŦâđ _${usedPrefix}apkgoogle *<texto>*_
Â° āļŦâđ _${usedPrefix}apkmody *<texto>*_
Â° āļŦâđ _${usedPrefix}apkshub *<texto>*_
Â° āļŦâđ _${usedPrefix}happymod *<texto>*_
Â° āļŦâđ _${usedPrefix}hostapk *<texto>*_
Â° āļŦâđ _${usedPrefix}revdl *<texto>*_
Â° āļŦâđ _${usedPrefix}toraccino *<texto>*_
Â° āļŦâđ _${usedPrefix}uapkpro *<texto>*_
Â° āļŦâđ _${usedPrefix}playstore *<texto>*_

*<AUDIO/>*
*- WRITE THE NEXT WORDS OR PHRASES WITHOUT ANY PREFIX (#, /, *, .)*

Â° āļŦâđ _Quien es tu sempai botsito 7w7_
Â° āļŦâđ _Te diagnostico con gay_
Â° āļŦâđ _A nadie le importa_
Â° āļŦâđ _Fiesta del admin_
Â° āļŦâđ _Fiesta del administrador_ 
Â° āļŦâđ _Vivan los novios_
Â° āļŦâđ _Feliz cumpleaÃąos_
Â° āļŦâđ _Noche de paz_
Â° āļŦâđ _Buenos dias_
Â° āļŦâđ _Buenos tardes_
Â° āļŦâđ _Buenos noches_
Â° āļŦâđ _Audio hentai_
Â° āļŦâđ _Chica lgante_
Â° āļŦâđ _Feliz navidad_
Â° āļŦâđ _Vete a la vrg_
Â° āļŦâđ _Pasa pack Bot_
Â° āļŦâđ _Atencion grupo_
Â° āļŦâđ _Marica quien_
Â° āļŦâđ _Murio el grupo_
Â° āļŦâđ _Oh me vengo_
Â° āļŦâđ _tio que rico_
Â° āļŦâđ _Viernes_
Â° āļŦâđ _Baneado_
Â° āļŦâđ _Sexo_
Â° āļŦâđ _Hola_
Â° āļŦâđ _Un pato_
Â° āļŦâđ _Nyanpasu_
Â° āļŦâđ _Te amo_
Â° āļŦâđ _Yamete_
Â° āļŦâđ _BaÃąate_
Â° āļŦâđ _Es puto_
Â° āļŦâđ _La biblia_
Â° āļŦâđ _Onichan_
Â° āļŦâđ _Mierda de Bot_
Â° āļŦâđ _Siuuu_
Â° āļŦâđ _Epico_
Â° āļŦâđ _Shitpost_
Â° āļŦâđ _Rawr_
Â° āļŦâđ _UwU_
Â° āļŦâđ _:c_
Â° āļŦâđ _a_

*<TOOLS/>*

Â° āļŦâđ ī¸ _${usedPrefix}encuesta *<texto1|texto2...>*_
Â° āļŦâđ ī¸ _${usedPrefix}afk *<motivo>*_
Â° āļŦâđ ī¸ _${usedPrefix}ocr *<responde a imagen>*_
Â° āļŦâđ ī¸ _${usedPrefix}acortar *<enlace / link / url>*_
Â° āļŦâđ ī¸ _${usedPrefix}calc *<operacion math>*_
Â° āļŦâđ ī¸ _${usedPrefix}del *<respondre a mensaje del Bot>*_
Â° āļŦâđ ī¸ _${usedPrefix}whatmusic *<responde a un audio>*_
Â° āļŦâđ ī¸ _${usedPrefix}qrcode *<texto>*_
Â° āļŦâđ ī¸ _${usedPrefix}readmore *<texto1| texto2>*_
Â° āļŦâđ ī¸ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
Â° āļŦâđ ī¸ _${usedPrefix}styletext *<texto>*_
Â° āļŦâđ ī¸ _${usedPrefix}traducir *<texto>*_
Â° āļŦâđ ī¸ _${usedPrefix}nowa *<numero>*_
Â° āļŦâđ ī¸ _${usedPrefix}covid *<pais>*_

*<RPG - LIMITS - ECONOMY/>*

Â° āļŦâđĩ _${usedPrefix}balance_
Â° āļŦâđĩ _${usedPrefix}claim_
Â° āļŦâđĩ _${usedPrefix}lb_
Â° āļŦâđĩ _${usedPrefix}levelup_
Â° āļŦâđĩ _${usedPrefix}myns_
Â° āļŦâđĩ _${usedPrefix}perfil_
Â° āļŦâđĩ _${usedPrefix}work_
Â° āļŦâđĩ _${usedPrefix}minar_
Â° āļŦâđĩ _${usedPrefix}buy_
Â° āļŦâđĩ _${usedPrefix}buyall_
Â° āļŦâđĩ _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
Â° āļŦâđĩ _${usedPrefix}verificar_
Â° āļŦâđĩ _${usedPrefix}unreg *<numero de serie>*_

*<STICKERS/>*

Â° āļŦâđŊ _${usedPrefix}sticker *<responder a imagen o video>*_
Â° āļŦâđŊ _${usedPrefix}sticker *<enlace / link / url>*_
Â° āļŦâđŊ _${usedPrefix}s *<responder a imagen o video>*_
Â° āļŦâđŊ _${usedPrefix}s *<enlace / link / url>*_
Â° āļŦâđŊ _${usedPrefix}sfull *<responder a imagen o video>*_
Â° āļŦâđŊ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
Â° āļŦâđŊ _${usedPrefix}scircle *<responder a imagen>*_
Â° āļŦâđŊ _${usedPrefix}sremovebg *<responder a imagen>*_
Â° āļŦâđŊ _${usedPrefix}semoji *<tipo> <emoji>*_
Â° āļŦâđŊ _${usedPrefix}attp *<texto>*_
Â° āļŦâđŊ _${usedPrefix}attp2 *<texto>*_
Â° āļŦâđŊ _${usedPrefix}attp3 *<texto>*_
Â° āļŦâđŊ _${usedPrefix}ttp *<texto>*_
Â° āļŦâđŊ _${usedPrefix}ttp2 *<texto>*_
Â° āļŦâđŊ _${usedPrefix}ttp3 *<texto>*_
Â° āļŦâđŊ _${usedPrefix}ttp4 *<texto>*_
Â° āļŦâđŊ _${usedPrefix}ttp5 *<texto>*_
Â° āļŦâđŊ _${usedPrefix}pat *<@tag>*_
Â° āļŦâđŊ _${usedPrefix}slap *<@tag>*_
Â° āļŦâđŊ _${usedPrefix}kiss *<@tag>*_
Â° āļŦâđŊ _${usedPrefix}dado_
Â° āļŦâđŊ _${usedPrefix}wm *<packname> <author>*_
Â° āļŦâđŊ _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
Â° āļŦâđŊ _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_

*<OWNER AND MODERATORS/>*

Â° āļŦâđ > *<funcion>*
Â° āļŦâđ => *<funcion>*
Â° āļŦâđ $ *<funcion>*
Â° āļŦâđ _${usedPrefix}cajafuerte_
Â° āļŦâđ _${usedPrefix}blocklist_
Â° āļŦâđ _${usedPrefix}enable *restrict*_
Â° āļŦâđ _${usedPrefix}disable *restrict*_
Â° āļŦâđ _${usedPrefix}enable *autoread*_
Â° āļŦâđ _${usedPrefix}disable *autoread*_
Â° āļŦâđ _${usedPrefix}enable *public*_
Â° āļŦâđ _${usedPrefix}disable *public*_
Â° āļŦâđ _${usedPrefix}enable *pconly*_
Â° āļŦâđ _${usedPrefix}disable *pconly*_
Â° āļŦâđ _${usedPrefix}enable *gconly*_
Â° āļŦâđ _${usedPrefix}disable *gconly*_
Â° āļŦâđ _${usedPrefix}enable *anticall*_
Â° āļŦâđ _${usedPrefix}disable *anticall*_
Â° āļŦâđ _${usedPrefix}enable *antiprivado*_
Â° āļŦâđ _${usedPrefix}disable *antiprivado*_
Â° āļŦâđ _${usedPrefix}msg *<texto>*_
Â° āļŦâđ _${usedPrefix}banchat_
Â° āļŦâđ _${usedPrefix}unbanchat_
Â° āļŦâđ _${usedPrefix}banuser *<@tag>*_
Â° āļŦâđ _${usedPrefix}unbanuser *<@tag>*_
Â° āļŦâđ _${usedPrefix}dardiamantes *<@tag>*_
Â° āļŦâđ _${usedPrefix}aÃąadirxp *<@tag>*_
Â° āļŦâđ _${usedPrefix}banuser *<@tag>*_
Â° āļŦâđ _${usedPrefix}bc *<texto>*_
Â° āļŦâđ _${usedPrefix}bcchats *<texto>*_
Â° āļŦâđ _${usedPrefix}bcgc *<texto>*_
Â° āļŦâđ _${usedPrefix}cleartpm_
Â° āļŦâđ _${usedPrefix}restart_
Â° āļŦâđ _${usedPrefix}update_
Â° āļŦâđ _${usedPrefix}banlist_
Â° āļŦâđ _${usedPrefix}addprem *<@tag>*_
Â° āļŦâđ _${usedPrefix}delprem *<@tag>*_
Â° āļŦâđ _${usedPrefix}listprem_
Â° āļŦâđ _${usedPrefix}listcmd_
Â° āļŦâđ _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
Â° āļŦâđ _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_

*<KILLS WHATSAPP - VIRUS/>*

Â° āļŦââ  _${usedPrefix}crashđˇ_
Â° āļŦââ  _${usedPrefix}crash2_
Â° āļŦââ  _${usedPrefix}crash3_
Â° āļŦââ  _${usedPrefix}crash4_
Â° āļŦââ  _${usedPrefix}crash5_
Â° āļŦââ  _${usedPrefix}crash6_
Â° āļŦââ  _${usedPrefix}crash7_
`.trim()
    
const vi = ['https://telegra.ph/file/067b2cb3312837533239c.mp4',
'https://telegra.ph/file/e38881701692c74484a17.mp4',
'https://telegra.ph/file/de776d34ef058b7d2ec12.mp4', 'https://telegra.ph/file/bc82653506c301b40679c.mp4',     'https://telegra.ph/file/7f10b3624991bbcee9ded.mp4', 'https://telegra.ph/file/51aa9701839dcc29066e9.mp4',     'https://telegra.ph/file/4f26132ac0296a34a45a8.mp4']

var vid = vi[Math.floor(Math.random() * (vi.length))]

//templateButtons
let templateButtons = [ 
{index: 1, urlButton: {displayText: 'GITHUB', url: 'https://github.com/Daveshvats/Zero-Bot'}},
{index: 2, urlButton: {displayText: 'PAYPAL', url: 'https://www.paypal.me/edgarkyner'}},
{index: 3, quickReplyButton: {displayText: 'OWNER', id: '#owner'}},
{index: 4, quickReplyButton: {displayText: 'INFOBOT', id: '#infobot'}},
{index: 5, quickReplyButton: {displayText: 'DONAR', id: '#donar'}}
]

conn.sendMessage(m.chat, { video: { url: vid }, gifPlayback: true, gifAttribution: ~~(Math.random() * 2), caption: str.trim(), footer: wm, templateButtons }, { quoted: m})
    
} catch {
conn.reply(m.chat, '*[âđđđđâ] đ´đģ đŧđ´đŊđ đđ¸đ´đŊđ´ đđŊ đ´đđđžđ đ đŊđž đĩđđ´ đŋđžđđ¸đąđģđ´ đ´đŊđđ¸đ°đđģđž, đđ´đŋđžđđđ´đģđž đ°đģ đŋđđžđŋđ¸đ´đđ°đđ¸đž đŗđ´đģ đąđžđ*', m)
}}
handler.command = /^(prueba)$/i
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
