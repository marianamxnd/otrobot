import { facebookdl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `Use example ${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*`
await m.react('🕓');
const { result } = await facebookdl(args[0]))
await m.react('✅');
await conn.sendFile(m.chat, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `*\`[ FACEBOOK VIDEO ]\`*`, m, null, rcanal)
}
handler.help = ['facebook2'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook2|fb2)(downloder2|dl2)?)$/i
handler.exp = 35
export default handler