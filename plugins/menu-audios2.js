import fetch from 'node-fetch';




const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.menu_audios

  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *Хулиган* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *Привет, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯



┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ *<ღ꧁ *ГОЛОСОВЫЕ* ꧂ღ>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ *- ${_translate.plugins.menu_audios.texto1}*
┣ >>>>>>>>>>>>>>>>>>>>>>
┣ ඬ⃟🔊 Красавчик
┣ ඬ⃟🔊 Где все
┣ ඬ⃟🔊 Что случилось
┣ ඬ⃟🔊 Дай
┣ ඬ⃟🔊 Группа
┣ ඬ⃟🔊 Как дела
┣ ඬ⃟🔊 Что нового
┣ ඬ⃟🔊 Что делаешь
┣ ඬ⃟🔊 Пока
┣ ඬ⃟🔊 До свидания
┣ ඬ⃟🔊 Псих
┣ ඬ⃟🔊 Идиот
┣ ඬ⃟🔊 Совет
┣ ඬ⃟🔊 Жопа
┣ ඬ⃟🔊 Как ты
┣ ඬ⃟🔊 Дай
┣ ඬ⃟🔊 Друг
┣ ඬ⃟🔊 Как жизнь
┣ ඬ⃟🔊 Девушка/и
┣ ඬ⃟🔊 Чего
┣ ඬ⃟🔊 Ух какая
┣ ඬ⃟🔊 Страшная
┣ ඬ⃟🔊 Мечта
┣ ඬ⃟🔊 Молчуны
┣ ඬ⃟🔊 Цель
┣ ඬ⃟🔊 Слышь ты
┣ ඬ⃟🔊 Кушаю
┣ ඬ⃟🔊 От души
┣ ඬ⃟🔊 😘
┣ ඬ⃟🔊 Надоел
┣ ඬ⃟🔊 Отвали
┣ ඬ⃟🔊 Нет настроения
┣ ඬ⃟🔊 Молодец
┣ ඬ⃟🔊 Споки ноки 
┣ ඬ⃟🔊 Заебал
┣ ඬ⃟🔊 Врун
┣ ඬ⃟🔊 Пиздабол
┣ ඬ⃟🔊 Правила
┣ ඬ⃟🔊 Здарова
┣ ඬ⃟🔊 Кто ты
┣ ඬ⃟🔊 Сука
┣ ඬ⃟🔊 Секс
┣ ඬ⃟🔊 Пошел ты
┣ ඬ⃟🔊 Хи хи
┣ ඬ⃟🔊 Помогите
┣ ඬ⃟🔊 До завтра
┣ ඬ⃟🔊 Красотка
┣ ඬ⃟🔊 Блять
┣ ඬ⃟🔊 Тупой/ая
┣ ඬ⃟🔊 Ты кто
┣ ඬ⃟🔊 Удали/ю
┣ ඬ⃟🔊 Понедельник
┣ ඬ⃟🔊 😡
┣ ඬ⃟🔊 😭
┣ ඬ⃟🔊 Кто звал
┣ ඬ⃟🔊 Пришел
┣ ඬ⃟🔊 Я тут
┣ ඬ⃟🔊 Дурак
┣ ඬ⃟🔊 Козел
┣ ඬ⃟🔊 Лох
┣ ඬ⃟🔊 Сюрприз
┣ ඬ⃟🔊 Чмо
┗━━━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, tradutor.texto2, m);
  }
};
handler.command = /^(меню2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|keyaudio|keyaudios)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
