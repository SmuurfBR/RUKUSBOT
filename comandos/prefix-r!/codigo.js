const botconfig = require("../../config.json")
const Discord = require("discord.js")
const bot = new Discord.Client({disableEveryone: true});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

 if(message.content == 'r!codigo') {

    message.channel.sendMessage('Código do bot feito por Márcio#1636');
}

});
