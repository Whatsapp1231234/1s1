import fs from 'fs';

const handler = async (m, {conn, args}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.gc_link

  const group = m.chat;
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
    contextInfo: {externalAdReply: {mediaUrl: null, mediaType: 1, description: null,
      title: tradutor.texto1[0],
      body: 'Хулиган',
      previewType: 0, thumbnail: fs.readFileSync('./Menu2.jpg'),
      sourceUrl: `https://github.com`}}});
};
handler.help = ['linkgroup'];
handler.tags = ['group'];
handler.command = /^ссылка(gro?up)?$/i;
handler.group = true;
handler.botAdmin = true;
export default handler;
