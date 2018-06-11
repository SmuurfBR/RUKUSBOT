const Discord = require('discord.js');
const botconfig = require('../../botconfig.json');
const Fortnite = require("fortnite");
const Fortnite = new Client(keys.fortnite);
const ftnApi = new Fortnite(botconfig.ftnApi);
const currentSeason = "4";

module.exports.run = async (bot, message, args) =>{
  let username = args[0];
  let platform = args[1] || "pc";
  let mode = "life";
  if(args[2]){
    if (args[2].toLowerCase() == "all" || args[2].toLowerCase() == "season") {
      mode = args[2];
    }else{
      return message.channel.send("Erro. Use a syntax correta: `r!fortnite <epic-username> [plataforma pc/xbl/psn] {mode all/season}`.\n\Para lifetime stats use `r!fbr <epic-username> [plataforma pc/xbl/psn]`");
    }
  }

  if(`r!username`)
    return message.channel.send("Nome de usúario não fornecido. Use a syntax correta: `r!fortnite <epic-username> [plataforma pc/xbl/psn] {mode all/season}`.\n\Para lifetime stats use `r!fbr <epic-username> [plataforma pc/xbl/psn]`");

  let data = ftnApi.user(username, platform).then(data => {
    let stats = data.stats;
    if(mode == 'life'){
      let lifetime = stats.lifetime;
        let lifeScore = lifetime[6]['Score'];
        let lifeMatches = lifetime[7]['Matches Played'];
        let lifeWins = lifetime[8]['Wins'];
        let lifeWinPercent = lifetime[9]['Win%'];
        let lifeKills = lifetime[10]['Kills'];
        let lifeKd = lifetime[11]['K/d'];

      let lifeEmbed = new Discord.RichEmbed()
        .setTitle("## FORTNITE LIFETIME STATS ##")
        .setThumbnail("https://blog.lifetime.com/imagecache/Blog/Generic%20Lifetime%20Banner%20Blog.png")
        .setDescription(`Lifetime stats de ${data.username}`)
        .setColor("#42b6f4")
        .addField("Wins", lifeWins, true)
        .addField("Kills", lifeKills, true)
        .addField("K/D", lifeKd, true)
        .addField("Partidas Jogadas", lifeMatches, true)
        .addField("Score", lifeScore, true)
        .addField("Porcentagem De Vitória", lifeWinPercent, true);
      message.channel.send(lifeEmbed);
    }

    if(mode.toLowerCase() == 'all'){
      let solo = stats.solo;
        let soloScore = solo.score;
        let soloMatches = solo.matches;
        let soloWins = solo.wins;
        let soloKills = solo.kills;
        let soloKd = solo.kd;

      let soloEmbed = new Discord.RichEmbed()
        .setTitle("## FORTNITE SOLO STATS ##")
        .setThumbnail("https://s3.amazonaws.com/media.atp/42511_solof.png")
        .setDescription(`Solo stats de ${data.username}`)
        .setColor("#42b6f4")
        .addField("Wins", soloWins, true)
        .addField("Kills", soloKills, true)
        .addField("K/D", soloKd, true)
        .addField("Partidas Jogadas", soloMatches, true)
        .addField("Score", soloScore, true);
      message.channel.send(soloEmbed);

      let duo = stats.duo;
        let duoScore = duo.score;
        let duoMatches = duo.matches;
        let duoWins = duo.wins;
        let duoKills = duo.kills;
        let duoKd = duo.kd;

      let duoEmbed = new Discord.RichEmbed()
        .setTitle("## FORTNITE DUO STATS ##")
        .setThumbnail("http://www.dualski.com/wp-content/uploads/2015/08/Duo.png")
        .setDescription(`Duo stats de ${data.username}`)
        .setColor("#42b6f4")
        .addField("Wins", duoWins, true)
        .addField("Kills", duoKills, true)
        .addField("K/D", duoKd, true)
        .addField("Partidas Jogadas", duoMatches, true)
        .addField("Score", duoScore, true);
      message.channel.send(duoEmbed);

      let squad = stats.squad;
        let squadScore = squad.score;
        let squadMatches = squad.matches;
        let squadWins = squad.wins;
        let squadKills = squad.kills;
        let squadKd = squad.kd;

      let squadEmbed = new Discord.RichEmbed()
        .setTitle("## FORTNITE SQUAD STATS ##")
        .setThumbnail("https://images.joinsquad.com/Logos/squadlogo_black_hires.png")
        .setDescription(`Squad stats de ${data.username}`)
        .setColor("#42b6f4")
        .addField("Wins", squadWins, true)
        .addField("Kills", squadKills, true)
        .addField("K/D", squadKd, true)
        .addField("Partidas Jogadas", squadMatches, true)
        .addField("Score", squadScore, true);
      message.channel.send(squadEmbed);
    }

    if(mode.toLowerCase() == 'season'){
      let currentSolo = stats.current_solo;
        let currentSoloScore = currentSolo.score;
        let currentSoloMatches = currentSolo.matches;
        let currentSoloWins = currentSolo.wins;
        let currentSoloKills = currentSolo.kills;
        let currentSoloKd = currentSolo.kd;

      let currentSoloEmbed = new Discord.RichEmbed()
        .setTitle(`## FORTNITE SEASON ${currentSeason} SOLO STATS ##`)
        .setThumbnail("https://s3.amazonaws.com/media.atp/42511_solof.png")
        .setDescription(`Season ${currentSeason} Solo stats de ${data.username}`)
        .setColor("#42b6f4")
        .addField("Wins", currentSoloWins, true)
        .addField("Kills", currentSoloKills, true)
        .addField("K/D", currentSoloKd, true)
        .addField("Partidas Jogadas", currentSoloMatches, true)
        .addField("Score", currentSoloScore, true);
      message.channel.send(currentSoloEmbed);

      let currentDuo = stats.current_duo;
        let currentDuoScore = currentDuo.score;
        let currentDuoMatches = currentDuo.matches;
        let currentDuoWins = currentDuo.wins;
        let currentDuoKills = currentDuo.kills;
        let currentDuoKd = currentDuo.kd;

      let currentDuoEmbed = new Discord.RichEmbed()
        .setTitle(`## FORTNITE SEASON ${currentSeason} DUO STATS ##`)
        .setThumbnail("http://www.dualski.com/wp-content/uploads/2015/08/Duo.png")
        .setDescription(`Season ${currentSeason} Duo stats de ${data.username}`)
        .setColor("#42b6f4")
        .addField("Wins", currentDuoWins, true)
        .addField("Kills", currentDuoKills, true)
        .addField("K/D", currentDuoKd, true)
        .addField("Partidas Jogadas", currentDuoMatches, true)
        .addField("Score", currentDuoScore, true);
      message.channel.send(currentDuoEmbed);

      let currentSquad = stats.current_duo;
        let currentSquadScore = currentSquad.score;
        let currentSquadMatches = currentSquad.matches;
        let currentSquadWins = currentSquad.wins;
        let currentSquadKills = currentSquad.kills;
        let currentSquadKd = currentSquad.kd;

      let currentSquadEmbed = new Discord.RichEmbed()
        .setTitle(`## FORTNITE SEASON ${currentSeason} SQUAD STATS ##`)
        .setThumbnail("https://images.joinsquad.com/Logos/squadlogo_black_hires.png")
        .setDescription(`Season ${currentSeason} Squad stats de ${data.username}`)
        .setColor("#42b6f4")
        .addField("Wins", currentSquadWins, true)
        .addField("Kills", currentSquadKills, true)
        .addField("K/D", currentSquadKd, true)
        .addField("Partidas Jogadas", currentSquadMatches, true)
        .addField("Score", currentSquadScore, true);
      message.channel.send(currentSquadEmbed);
    }
  }).catch(e => {
    console.log(e);
    message.channel.send("Erro. Usúario não encontrado, Verifique se você esta usando a syntax correta: `r!fortnite <epic-username> [platforma pc/xbl/psn] {mode all/season}`.\n\Para lifetime stats use `r!fortnite <epic-username> [platforma pc/xbl/psn]`");
  })
}

module.exports.help = {
  name: "fortnite"
}
