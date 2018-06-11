const botconfig = require("../../config.json")
const Discord = require("discord.js")
const bot = new Discord.Client({disableEveryone: true});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
 if(message.content == 'r!codigo') {

    message.channel.sendMessage('Código do bot feito por Márcio#1636');
}

});
