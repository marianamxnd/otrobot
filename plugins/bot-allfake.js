import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}}

let pp = ''
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/327f6ad853cb4f405aa80.jpg')

//creador
global.creador = 'Wa.me/573012482597'
global.ofcbot = `${conn.user.jid.split('@')[0]}`

//Reacciones De Comandos.!
global.rwait = '⏰'
global.done = '✅'
global.error = '❌'

//Mensajes Fakes

global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

var canal = 'https://whatsapp.com/channel/0029VaQD7LAJP216tu9liI2A' 
var canal2 = 'https://whatsapp.com/channel/0029VaXaCa66xCSHugaf773M' 
var canal3 = 'https://whatsapp.com/channel/0029Va4QjH7DeON0ePwzjS1A'
var grupofb = 'https://www.facebook.com/groups/872989990425789/?ref=share&mibextid=NSMWBT' 
var git = 'https://github.com/Diego-YL-177' 
var youtube = 'https://www.youtube.com/@Yoshiko_team' 
var github = 'https://github.com/Diego-YL-177/YoshikoBot-MD' 
var facebook = 'https://www.facebook.com/diegosaroficial?mibextid=ZbWKwL' 

global.redesYoshi = [canal, canal2, canal3, grupofb, git, youtube, github, facebook].getRandom()

global.canalesYoshi = [canal, canal2, canal3].getRandom()

var img = fs.readFileSync('./media/menus/Alsombra.jpg');
var img2 = fs.readFileSync('./media/menus/Yoshi.jpg');
var img3 = fs.readFileSync('./media/menus/ImagenYoshi.jpg');
var img4 = fs.readFileSync('./media/menus/YoshiBot.jpg');
var img5 = fs.readFileSync('./media/menus/Sombra.jpg');
var img6 = fs.readFileSync('./media/menus/MiniYoshi.jpg');
var img7 = fs.readFileSync('./media/menus/MiniBot.jpg');
var img8 = fs.readFileSync('./media/menus/Mini.jpg');
var img9 = fs.readFileSync('./media/menus/YoshiMejor.jpg');
var img10 = fs.readFileSync('./media/menus/YoshikoImagen.jpg');

global.yoshiImg = [img, img2, img3, img4, img5, img6, img7, img8, img9, img10].getRandom()

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞ • ⚔
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 1: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 2: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 3: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 4: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 5: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 6: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 7: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌅'; break; case 8: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 9: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 10: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 11: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 12: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 13: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 14: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 15: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 16: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 17: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 18: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 19: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 20: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 21: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 22: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 23: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break;}
global.saludo = "" + hour;

const moji = (await axios.get(`https://raw.githubusercontent.com/GataNina-Li/YartexBot-MD/main/storage/juegos/emojis.json`)).data
const emoji = await moji[Math.floor(moji.length * Math.random())]

var credit = 'X8KpIFJlcXVlc3RlZCBieSBDdXJpb3NpdHlCb3Rf'
global.cred = Buffer.from(credit, 'base64')

global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

global.fakeimg = { key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' }, message: { imageMessage: { mimetype: 'image/jpeg', caption: botname, jpegThumbnail: yoshiImg, viewOnce: true }}}

global.fakestaff = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "status@broadcast" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": yoshiImg }, "title": `${botname}`, "retailerId": "👑 Staff Oficial 💫", "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}

global.fakevideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${botname}`, "h": `Hmm`,'seconds': '2022', 'caption': `${botname}`, 'jpegThumbnail': yoshiImg}} }

global.fakeyoshi = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"imageMessage": { "title":`${wm}`, "h": `Hmm`,'seconds': '99999', 'imagePlayback': 'true', 'caption': `${botname}\n    ${wm}`, 'jpegThumbnail': yoshiImg }}}

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: `${packname}`, orderTitle: 'Bang', thumbnail: yoshiImg, sellerJid: '0@s.whatsapp.net'}}}

global.faketick = { "key": { "participant": `0@s.whatsapp.net`, "remoteJid": "6287834993722-1621306547@g.us", "fromMe": false, "id": "3B64558B07848BD81108C1D14712018E" }, "message": { "stickerMessage": { "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=", "pngThumbnail": yoshiImg, "mimetype": "image/webp", "height": 64, "width": 64, "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE", "fileLength": "60206", "firstFrameLength": 3626, "isAnimated": false } }, "messageTimestamp": "1614070775", "status": "PENDING" }

//global.fake = { contextInfo:{ forwardingScore: 0, externalAdReply: {title: '🌟 Bienvenido ' + nombre, body: team, sourceUrl: yt, thumbnailUrl: yoshiImg }}} //Fake simple

global.fake = { contextInfo: { mentionedJid: conn.parseMention(wm), forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363263466636910@newsletter', serverMessageId: '', newsletterName: '✰્᭄͜͡ 𝐘𝐨𝐬𝐡𝐢𝐤𝐨 𝐁𝐨𝐭 - 𝐌𝐃 💖' }, externalAdReply: { title: packname, body: `ꪶໍٜ߭۫ިׅ࣪۬߭ׄ🍫̸̷᮫ᨘ۬ׄ߭ᤢꫂꥈ Hola! ` + nombre, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: yoshiImg, thumbnail: yoshiImg, sourceUrl: redesYoshi }}}, { quoted: m } //fake con reenviado de canal
}

export default handler
