const Discord = require("discord.js")
const botconfig = require("../../config.json")

bot.on("message", async message => {
  if(message.author.bot) return;
  if(messagae.channel.type === "dm") return;

  let prefix = botconfig.prefix
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}botinfo`){

    return message.channel.send("Código do bot feito por Márcio#1636") ;
  }
