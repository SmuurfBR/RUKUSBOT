const Discord = require('discord.js');
const botconfig = require('../../botconfig.json');
const Client = require("fortnite");
const Fortnite = new Client(keys.fortnite);
const ftnApi = new Fortnite(botconfig.ftnApi);
const currentSeason = "4";

module.exports.run = async (bot, message, args) =>{
  
  if(cmd === `${prefix}botinfo`){

    return message.channel.send("Código do bot feito por Márcio#1636") ;
  }

module.exports.help = {
  name: "codigo"
}
