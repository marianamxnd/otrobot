import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
m.react('🐈‍⬛')

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let edtr = `@${m.sender.split`@`[0]}`

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;ANGELITO 🍃\nNICKNAME:🐈‍⬛ ethan\nORG:tantan🐈‍⬛\nTITLE:soft\nitem1.TEL;waid=573172697479:+573172697479\nitem1.X-ABLabel:📞 WhatsApp Owner\nitem2.URL:https://github.com/karim-off/GenesisBot-Pro1\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: agasistencia2@gmail.com\nitem3.X-ABLabel:💌 Correo soporte\nitem4.ADR:;;🇦🇷 colombia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel: Localización 🫧\nBDAY;value=date:🐈‍⬛ 06-08-2005\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: packname, contacts: [{ vcard }] }}, { quoted: fkontak })
let caption = `*👋 Hola ${edtr}, este es el contacto de mi creador 🐈‍⬛*`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['owner', 'creator']
handler.tags = ['main']
handler.command = /^(owner|creator|creador|dueño)$/i

export default handler
