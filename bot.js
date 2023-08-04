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
Untuk mengunduh audio dari youtube bisa langsung send link nya
`;
  ctx.reply(pesanPercakapan);
});

bot.command('menu',(ctx) => {
  var mess = `Untuk list menu yang ${ctx.botInfo.first_name} miliki
  
/admins - Melihat daftar admin grup
/gempa - Informasi tentang gempa terkini
/deloff - Menonaktifkan auto delete bot [khusus admin bot]
/delon - Mengaktifkan auto delete bot [khusus admin bot]
Untuk mengunduh audio dari youtube bisa langsung send link nya

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

async function fetchDataFromAPI(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data dari API:', error);
    return null;
  }
}

// Fungsi untuk mengambil data video dari API eksternal
async function fetchVideoFromAPI(url) {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    return response.data;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data video dari API:', error);
    return null;
  }
}

// Fungsi untuk mengirim video sebagai pesan menggunakan bot Telegram
async function sendVideoToUser(ctx, videoData) {
  const videoName = `video_${Date.now()}.mp4`;

  // Simpan data video sementara sebagai file video
  fs.writeFileSync(videoName, videoData);

  // Kirimkan video sebagai pesan menggunakan bot Telegram
  await ctx.replyWithVideo({ source: videoName });

  // Hapus file video setelah dikirim
  fs.unlinkSync(videoName);
}

// Mendengarkan perintah dari pengguna yang dimulai dengan 'https://youtu.be/'

bot.on('text', async (ctx) => {
  const messageText = ctx.message.text;
  const chatId = ctx.message.chat.id;

  if (ytdl.validateURL(messageText)) {
    try {
      const audioInfo = await ytdl.getInfo(messageText);
      const audioFormat = ytdl.chooseFormat(audioInfo.formats, { quality: 'highestaudio' });
      const audioTitle = audioInfo.videoDetails.title;
      const audioFileName = `${audioTitle}.mp3`;

      ctx.reply('Sedang mengunduh audio...');

      ctx.telegram.sendAudio(chatId, { source: ytdl(messageText, { format: audioFormat }) }, { filename: audioFileName })
        .then(() => ctx.reply('Audio berhasil diunduh!'));
    } catch (error) {
      console.error('Error downloading audio:', error.message);
      ctx.reply('Terjadi kesalahan saat mengunduh audio.');
    }
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

bot.on('message',(ctx) => {
  var name = ctx.from.first_name;
  var mess = ctx.message.text;
  console.log(name + ' : ' + mess);
  console.log(ctx.message);
  if(del == true && ctx.from.username != admin){
    ctx.deleteMessage();
  }
});
bot.launch();