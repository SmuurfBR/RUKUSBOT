const os = require('os-utils');

exports.run = (client, message, args) => {

    var SmuurfBR = client.guilds.get("454464947607306260").members.get("315263840268976128").user.tag

    String.prototype.toHHMMSS = function () {
      var sec_num = parseInt(this, 10);
      var hours   = Math.floor(sec_num / 3600);
      var days   = Math.floor(hours / 24);
      var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      var seconds = sec_num - (hours * 3600) - (minutes * 60);
      if (hours   < 10) {hours   = "0"+hours;}
      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}
      var time    = "- **" + hours+'** horas\n- **'+minutes+'** minutos\n- **'+seconds+'** segundos';
          days > 1 ? time = days+" dias " : time = time
      return time;
  };

    message.channel.sendMessage({
        "embed": {
          "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ Rukus ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\nOlá, sou **Rukus**, um bot simples para discord, aqui estão algumas informações sobre mim:\nㅤ",
          "color": 55512,
          "timestamp": new Date(),
          "footer": {
            "icon_url": message.author.displayAvatarURL,
            "text": message.author.username
          },
          "thumbnail": {
            "url": "https://i.imgur.com/zojjwCf.png"
          },
          "fields": [
            {
              "name": ":bust_in_silhouette: Dono:",
              "value": `- **${SmuurfBR}**`,
              "inline": true
            },
            {
              "name": ":tools: Ajudantes:",
              "value": `- **EM BREVE**\n- **EM BREVE**\n- **EM BREVE**`,
              "inline": true
            },
            {
              "name": ":trident: Status:",
              "value": `- **${Number(client.guilds.size).toLocaleString()}** guilds\n- **${Number(client.channels.size).toLocaleString()}** channels\n- **${Number(client.users.size).toLocaleString()}** users\n- **${Number(client.emojis.size).toLocaleString()}** emojis`,
              "inline": true
            },
            {
              "name": ":tools:  Links:",
              "value": "- **[Bot](https://discordapp.com/oauth2/authorize?client_id=314460143909601280&scope=bot&permissions=2146958591)**\n- **[Servidor](https://discord.gg/q53DCqe)**",
              "inline": true
            },
            {
              "name": ":clock1: Uptime:",
              "value": `${os.processUptime().toString().toHHMMSS()}`,
              "inline": true
            },
            {
              "name": ":books: Info:",
              "value": `- **11.3.0** discord.js\n- **8.9.4** node.js\n- **${(Date.now() - message.createdTimestamp)}** ms`,
              "inline": true
            }
          ]
        }
      });

}
