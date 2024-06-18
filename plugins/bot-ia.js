import fetch from 'node-fetch';
import axios from 'axios';
import translate from '@vitalets/google-translate-api';
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
const openaiii = new OpenAIApi(configuration);
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return;
if (!text) return conn.reply(m.chat, `🍃 *Ingrese una petición*\n\n- Ejemplo, !${command} Codigo en Js para un juego de ahorcado`, m, fake, )   
try {
await m.reply('🌺 *C A R G A N D O*\n- 🍃 Cargando Información')
m.react('⌛️') 
conn.sendPresenceUpdate('composing', m.chat);
let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/ia2?text=${text}`)
let res = await gpt.json()
await m.reply(res.gpt)
//m.react('✅️')
} catch {
try {
let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/chatgpt?q=${text}`)
let res = await gpt.json()
await m.reply(res.data) 
//m.react('✅️')
} catch {
m.react('✅️')
}}}
handler.help = ['openia', 'chatgpt', 'ia']
handler.tags = ['ai']
handler.command = /^(openai|chatgpt|ia)$/i

export default handler;