const axios = require("axios");
const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const zeev = require("zeev-gempa");

const Token = "Token bot";//token bot kamu
const bot = new Telegraf(Token);
const owner = ["Lynch1201"]; //Username telegram kamu
const izin = [owner];

var toxic = ["Anjink","Memek","Kontol","Anjink","Jembut"];
var sapa = ["Hai","Halo","Hallo","hai","halo","hallo"];


bot.start((ctx) => ctx.reply('Selamat datang saya adalah bot.Silahkan ketik /menu untuk melihat menu.'));

bot.command('owner', ctx => {
    console.log(`User Message : ${ctx.message.text}`);
    var owner = `http://t.me/Lynch1201`;
    bot.telegram.sendMessage(ctx.chat.id, owner, {
    });
});


//============================================================//
bot.hears('Bot', (ctx, next) => {
    console.log(`User Message : ${ctx.message.text}`);
    bot.telegram.sendMessage(ctx.chat.id, 'Iya ada yang bisa saya bantu?');
});

bot.hears('P', (ctx, next) => {
    console.log(`User Message : ${ctx.message.text}`);
    bot.telegram.sendMessage(ctx.chat.id, 'Iya ada yang bisa saya bantu?');
});


bot.command('menu', ctx => {
    console.log(`User Message : ${ctx.message.text}`);
    let menuMess = `\n     M E N U  B O T     \n`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, menuMess, {
        reply_markup: {
            inline_keyboard: [
                [
                   {
                        text: "Info gempa",
                        callback_data: 'infogempa'
                    },
                    {
                        text: "Azey",
                        callback_data: 'azey'
                    }
                 ],[
                    {
                        text: "Ecchi",
                        callback_data: 'anime'
                    },
                    {
                        text: "Anime",
                        callback_data: 'anime'
                    }
                 ],[
                    {
                        text: "Loli",
                        callback_data: 'loli'
                    },
                    {
                        text: "Gawr Gura",
                        callback_data: 'gawr'
                    }
                ],[
                    {
                        text: "Kiwora",
                        callback_data: 'kiwora'
                    },
                    {
                        text: "Nsfw",
                        callback_data: 'nsfw'
                    }
                ],
            ]
        }
    });
});


bot.action('infogempa', ctx => {
    zeev.gempa().then(result => {
      console.log(result);
      var mess = `INFO GEMPA TERKINI\n\nWaktu : ${result.Waktu}\nLintang : ${result.Lintang}\nBujur : ${result.Bujur}\nMagnitudo : ${result.Magnitudo}\nKedalaman : ${result.Kedalaman}\nWilayah : ${result.Wilayah}\n\n${result.zeev}`;
      bot.telegram.sendMessage(ctx.chat.id, mess, {
      });
    });
});

//message
bot.on(message('sticker'), ctx => {
    console.log(`${ctx.message}`);
    bot.telegram.sendMessage(ctx.chat.id, 'Di larang mengirim stiker ke bot.\nStiker akan otomatis di hapus oleh bot.', {
    });
    ctx.deleteMessage();
});

bot.action('anime', ctx => {
  var rate;
  console.log(`${ctx.message}`);
  axios.get(`https://zeev-x.github.io/js/json/stars.json`)
  .then(response => {
    var rand = Math.floor(Math.random()*response.data.length);
    console.log(response.data[rand]);
    rate = response.data[rand].img;
    const message = rate;
    bot.telegram.sendPhoto(ctx.chat.id, message,{
    });
  });
});


bot.action('loli', ctx => {
  var rate;
  console.log(`${ctx.message}`);
  axios.get(`https://zeev-x.github.io/js/json/loli.json`)
  .then(response => {
    var rand = Math.floor(Math.random()*response.data.length);
    console.log(response.data[rand]);
    rate = response.data[rand].img;
    const message = rate;
    bot.telegram.sendPhoto(ctx.chat.id, message,{
    });
  });
});

bot.action('ecchi', ctx => {
  var rate;
  console.log(`${ctx.message}`);
  axios.get(`https://zeev-x.github.io/js/json/ecchi.json`)
  .then(response => {
    var rand = Math.floor(Math.random()*response.data.length);
    console.log(response.data[rand]);
    rate = response.data[rand].img;
    const message = rate;
    bot.telegram.sendPhoto(ctx.chat.id, message,{
    });
  });
});

bot.action('azey', ctx => {
  var rate;
  console.log(`${ctx.message}`);
  axios.get(`https://zeev-x.github.io/js/json/azey.json`)
  .then(response => {
    var rand = Math.floor(Math.random()*response.data.length);
    console.log(response.data[rand]);
    rate = response.data[rand].img;
    const message = rate;
    bot.telegram.sendPhoto(ctx.chat.id, message,{
    });
  });
});

//new 
bot.action('gawr', ctx => {
  var rate;
  console.log(`${ctx.message}`);
  axios.get(`https://zeev-x.github.io/js/json/gawr.json`)
  .then(response => {
    var rand = Math.floor(Math.random()*response.data.length);
    console.log(response.data[rand]);
    rate = response.data[rand].img;
    const message = rate;
    bot.telegram.sendPhoto(ctx.chat.id, message,{
    });
  });
});

bot.action('kiwora', ctx => {
  var usz = ctx.from.username;
  if(usz == izin){
  var rate;
  console.log(`${ctx.message}`);
  axios.get(`https://zeev-x.github.io/js/json/kiwora.json`)
  .then(response => {
    var rand = Math.floor(Math.random()*response.data.length);
    console.log(response.data[rand]);
    rate = response.data[rand].img;
    const message = rate;
    bot.telegram.sendPhoto(ctx.chat.id, message,{
    });
  });
  } else {
    bot.telegram.sendMessage(ctx.chat.id, `Maaf ${ctx.from.first_name} kamu memrlukan izin untuk melakukannya.`,{
    });
  }
});

bot.action('nsfw', ctx => {
  var usz = ctx.from.username;
  if(usz == izin){
  var rate;
  console.log(`${ctx.message}`);
  axios.get(`https://zeev-x.github.io/js/json/nsfw.json`)
  .then(response => {
    var rand = Math.floor(Math.random()*response.data.length);
    console.log(response.data[rand]);
    rate = response.data[rand].img;
    const message = rate;
    bot.telegram.sendPhoto(ctx.chat.id, message,{
    });
  });
  } else {
    bot.telegram.sendMessage(ctx.chat.id, `Maaf ${ctx.from.first_name} kamu memrlukan izin untuk melakukannya.`,{
    });
  }
});

bot.on('video', async (ctx) => {
  var own = ctx.from.username;
  if(own != owner){
  console.log(`User Message : ${ctx.message}`);
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, "Video di hapus demi kenyamanan server bot",{});
  } else {
    bot.telegram.sendMessage(ctx.chat.id, `Videonya bagus kak ${ctx.from.first_name}`, {});
  }
})

bot.hears(toxic, ctx => {
  console.log(`User Message : ${ctx.message.text}`);
  bot.telegram.sendMessage(ctx.chat.id, "Di larang toxic kak!!",{});
  ctx.deleteMessage();
});

bot.hears(sapa, ctx => {
  var own = ctx.from.username;
  if(own == owner){
  console.log(ctx.from);
  bot.telegram.sendMessage(ctx.chat.id, `${ctx.message.text} my lord`,{});
  } else {
    bot.telegram.sendMessage(ctx.chat.id, `${ctx.message.text} kak ${ctx.from.first_name}`,{});
  }
});


bot.on('message', async (ctx) => {
console.log(`User Message : ${ctx.message.text}`);
});

bot.launch();