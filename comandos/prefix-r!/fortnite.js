const Discord = require("discord.js");
const config = require("../botconfig.json");
const apikey = require("../keys.json");
const Fortnite = require("fortnite");
const ft = new Fortnite(apikey.fortnite);

module.exports.run = async (bot, message, args) => {
    message.delete();
    //!fortnite SmuurfBR pc
    let username = args[0];
    let platform = args[1] || "pc";

    let data = ft.getInfo(username, plataform).then(data => {

        let switchtats = data.lifetimestats;
        let kills = stats.find(s => s.stat == 'kills');
        let wins = stats.find(s => s.stat == 'wins')
        let kd = stats.find(s => s.stat == 'kd')
        let mPlayed = stats.find(s => s.stat == 'matchesPlayed')
        let tPlayed = stats.find(s => s.stat == 'timePlayed')
        let asTime = stats.find(s => s.stat == 'avgSurvivalTime')

        let embed = new Discord.RichEmbed
        .setTitle("Fortnite Stats")
        .setAuthor(data.username)
        .setColor(config.orange)
        .addField("Kills", kills.value, true)
        .addField("Wins", wins.value, true)
        .addField("K/D", kd.value, true)
        .addField("Partidas Jogadas", mPlayed.value, true)
        .addField("Tempo Jogado", tPlayed.value, true)
        .addField("Average Survival Time", asTime.value, true)

        message.channel.send(embed);


      }).catch(e => {
          console.log(e);
          message.channel.send("Não foi possivel achar o usuário no sistema");
      });




  }

  module.exports.help = {
      name: "fortnite"
  }
