const { Telegraf } = require('telegraf');
const axios = require('axios');
const ytdl = require('ytdl-core');
const fs = require('fs');
const setting = require('./data/data.json');
//const { video } = require('./main');
const bot = new Telegraf(setting[0].token);
const admin = setting[0].admin;

var del = false;

bot.start((ctx) => {
  const namaPengguna = ctx.from.first_name;
  const pesanPercakapan = `
Halo ${namaPengguna}!

Selamat datang di bot Telegram kami. Terima kasih telah bergabung!

Anda dapat menggunakan perintah berikut:
/start - Memulai percakapan
/menu - Menampilkan bantuan dan perintah yang tersedia
`;
  ctx.reply(pesanPercakapan);
});

bot.on('new_chat_members', (ctx) => {
  const newMember = ctx.message.new_chat_members[0];
  const nameMember = newMember.first_name;
  const groupName = ctx.chat.title;
  ctx.reply(`Selamat datang, ${nameMember}! Selamat bergabung di grup ${groupName}.`);
});

bot.on('left_chat_member', (ctx) => {
  const userOut = ctx.message.left_chat_member;
  const nameUser = userOut.first_name;
  const groupName = ctx.chat.title;
  ctx.reply(`Selamat tinggal, ${nameUser}! Semoga harimu menyenangkan di grup ${groupName}.`);
});

bot.command('menu',(ctx) => {
  var mess = `Untuk list menu yang ${ctx.botInfo.first_name} miliki
  
/admins - Melihat daftar admin grup
/gempa - Informasi tentang gempa terkini
/deloff - Menonaktifkan auto delete bot [khusus admin bot]
/delon - Mengaktifkan auto delete bot [khusus admin bot]
/audio [link yt] - Untuk mengunduh audio dari youtube

Dan juga ada beberapa menu cmd button di bawah ini:`;
    bot.telegram.sendMessage(ctx.chat.id,mess,{
    reply_markup: {
      inline_keyboard: [
        [
          {
            text : "Angela Cosplay",
            callback_data: "angela"
          },{
            text : "Kamisato Ayaka Cosplay",
            callback_data: "ayaka"
          }
        ],[
          {
            text : "AI image",
            callback_data: "ai"
          },{
            text : "Bocchi Cosplay",
            callback_data: "bocchi"
          }
        ],[
          {
            text : "Bunny Cosplay",
            callback_data: "bunny"
          },{
            text : "Ganyu cosplay",
            callback_data: "ganyu"
          }
        ],[
          {
            text : "Ghost Blade",
            callback_data : "ghost"
          },{
            text : "Nahida cosplay",
            callback_data: "nahida"
          },
        ],[
          {
            text : "Osakana Cosplay",
            callback_data: "osakana"
          },{
            text : "Owner",
            callback_data : "owner",
          }
        ],[
          {
           text : "Comming Soon",
           callback_data : "comming"
          }
         ]
      ]
    }
  });
});

bot.action("angela",(ctx) => {
  var url = "https://christ.cyclic.cloud/home/api/angela";
  axios.get(url).then(({data}) => {
    var img = data.url;
    bot.telegram.sendPhoto(ctx.chat.id,img,{reply_markup:
      {
        inline_keyboard : [
          [
            {
              text : data.name,
              callback_data: 'angela'
            }
          ]
          ]
      }
    });
  });
});

bot.action("ayaka",(ctx) => {
  var url = "https://christ.cyclic.cloud/home/api/ayaka";
  axios.get(url).then(({data}) => {
    var img = data.url;
    bot.telegram.sendPhoto(ctx.chat.id,img,{reply_markup:
      {
        inline_keyboard : [
          [
            {
              text : data.name,
              callback_data: 'ayaka'
            }
          ]
          ]
      }
    });
  });
});

bot.action("ai",(ctx) => {
  var url = "https://christ.cyclic.cloud/home/api/ai-waifu";
  axios.get(url).then(({data}) => {
    var img = data.url;
    bot.telegram.sendPhoto(ctx.chat.id,img,{reply_markup:
      {
        inline_keyboard : [
          [
            {
              text : data.name,
              callback_data: 'ai'
            }
          ]
          ]
      }
    });
  });
});

bot.action("bocchi",(ctx) => {
  var url = "https://christ.cyclic.cloud/home/api/bocchi";
  axios.get(url).then(({data}) => {
    var img = data.url;
    bot.telegram.sendPhoto(ctx.chat.id,img,{reply_markup:
      {
        inline_keyboard : [
          [
            {
              text : data.name,
              callback_data: 'bocchi'
            }
          ]
          ]
      }
    });
  });
});

bot.action("bunny",(ctx) => {
  var url = "https://christ.cyclic.cloud/home/api/bunny";
  axios.get(url).then(({data}) => {
    var img = data.url;
    bot.telegram.sendPhoto(ctx.chat.id,img,{reply_markup:
      {
        inline_keyboard : [
          [
            {
              text : data.name,
              callback_data: 'bunny'
            }
          ]
          ]
      }
    });
  });
});

bot.action("ganyu",(ctx) => {
  var url = "https://christ.cyclic.cloud/home/api/ganyu";
  axios.get(url).then(({data}) => {
    var img = data.url;
    bot.telegram.sendPhoto(ctx.chat.id,img,{reply_markup:
      {
        inline_keyboard : [
          [
            {
              text : data.name,
              callback_data: 'ganyu'
            }
          ]
          ]
      }
    });
  });
});

bot.action("ghost",(ctx) => {
  var url = "https://christ.cyclic.cloud/home/api/ghost";
  axios.get(url).then(({data}) => {
    var img = data.url;
    bot.telegram.sendPhoto(ctx.chat.id,img,{reply_markup:
      {
        inline_keyboard : [
          [
            {
              text : data.name,
              callback_data: 'ghost'
            }
          ]
          ]
      }
    });
  });
});

bot.action("nahida",(ctx) => {
  var url = "https://christ.cyclic.cloud/home/api/nahida";
  axios.get(url).then(({data}) => {
    var img = data.url;
    bot.telegram.sendPhoto(ctx.chat.id,img,{reply_markup:
      {
        inline_keyboard : [
          [
            {
              text : data.name,
              callback_data: 'nahida'
            }
          ]
          ]
      }
    });
  });
});

bot.action("osakana",(ctx) => {
  var url = "https://christ.cyclic.cloud/home/api/osakana";
  axios.get(url).then(({data}) => {
    var img = data.url;
    bot.telegram.sendPhoto(ctx.chat.id,img,{reply_markup:
      {
        inline_keyboard : [
          [
            {
              text : data.name,
              callback_data: 'osakana'
            }
          ]
          ]
      }
    });
  });
});

bot.command("gempa",(ctx) => {
  var url = "https://christ.cyclic.cloud/home/api/gempa";
  axios.get(url).then(({data}) => {
    var waktu = data.waktu;
    var lintang = data.lintang;
    var bujur = data.bujur;
    var magnitudo = data.magnitudo;
    var kedalaman = data.kedalaman;
    var wilayah = data.wilayah;
    var map = data.map;
    var message = `Info Gempa Terkini\n\nWaktu : ${waktu} \nLintang : ${lintang} \nBujur : ${bujur} \nMagnitudo : ${magnitudo} Kedalaman : ${kedalaman} \nWilayah : ${wilayah}`;
    bot.telegram.sendPhoto(ctx.chat.id,map,{caption:message});
  });
});

bot.action('comming',(ctx) => {
  ctx.reply('Nantikan fitur-fitur selanjutnya');
});

bot.command('admins', (ctx) => {
  if (ctx.message.chat.type !== 'group' && ctx.message.chat.type !== 'supergroup') {
    ctx.reply('Perintah ini hanya bisa digunakan di grup atau supergroup.');
    return;
  }
  ctx.getChatAdministrators().then((admins) => {
    let adminList = 'Daftar admin grup:\n';
    admins.forEach((admin) => {
      const isAdmin = admin.status === 'administrator' || admin.status === 'creator';
      if (isAdmin) {
        adminList += `- ${admin.user.first_name} (@${admin.user.username})\n`;
      }
    });
    ctx.reply(adminList);
  }).catch((error) => {
    console.error(error);
    ctx.reply('Terjadi kesalahan saat mengambil data admin grup.');
  });
});


bot.command("delon",(ctx) => {
  if(ctx.from.username == admin){
    del = true;
    ctx.reply('Auto delete on');
  } else {
    ctx.reply('Kamu bukan admin!!');
  }
});

bot.command("deloff",(ctx) => {
  if(ctx.from.username == admin){
    del = false;
    ctx.reply('Auto delete off');
  } else {
    ctx.reply('Kamu bukan admin!!');
  }
});

bot.action('owner',async(ctx) => {
  var mess = `https://t.me/${owner}`;
  ctx.reply(mess);
});

bot.command('audio', async (ctx) => {
  const message = ctx.message.text;
  const youtubeUrl = message.split(' ')[1];

  if (ytdl.validateURL(youtubeUrl)) {
    try {
      const audioInfo = await ytdl.getInfo(youtubeUrl);
      const audioTitle = audioInfo.videoDetails.title;
      const audioStream = ytdl(youtubeUrl, { filter: 'audioonly' });
      await ctx.replyWithAudio({ source: audioStream, filename: audioTitle });
    } catch (error) {
      ctx.reply('Gagal mengunduh audio dari URL YouTube.');
    }
  } else {
    ctx.reply('Kirimkan perintah /audio dan URL YouTube yang valid.');
  }
});

bot.on('text', (ctx) => {
  const pesanPengirim = ctx.message.text.toLowerCase();
  let balasan = '';
  // Definisikan auto reply berdasarkan pesan pengirim
  switch (pesanPengirim) {
    case 'bot':
      balasan = 'Iya? Ada yang bisa saya bantu?';
      break;
    case 'Bot':
      balasan = 'Iya? Ada yang bisa saya bantu?';
      break;
    case 'hai':
      balasan = 'Halo! Selamat datang.';
      break;
    case 'Hai':
      balasan = 'Halo! Selamat datang.';
      break;
    case 'Selamat pagi':
      balasan = 'Selamat pagi! Semoga hari Anda menyenangkan.';
      break;
    case 'Selamat malam':
      balasan = 'Selamat malam! Semoga tidur nyenyak.';
      break;
    default:
      // Jika tidak ada auto reply yang cocok, tidak memberikan balasan
      return;
  }
  ctx.reply(balasan);
});

bot.on('message',(ctx) => {
  var data = ctx.from.first_name + ' : ' + ctx.message.text + '\n';
  console.log(data);
  fs.appendFileSync('./sesi/sesion.txt', data, { flag: 'a' });
});
bot.launch();