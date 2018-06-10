exports.run = (client, message, args) => {

  let paginas = ["- **r!autorole**\n- **r!welcome**\n- **r!byebye**\n- **r!clear**\n- **r!info**", "- **r!help**\n- **r!config**\n- **r!profile**\n- **r!rep**\n- **r!daily**", "- **r!serverinfo**\n- **r!moneytop**\n- **r!ping**\n- **r!memory**\n- **r!doar**", "- **r!getbox**\n- **r!box**\n- **r!filter**\n- **r!gif**\n- **r!avatar**", "- **r!setbackground**\n- **r!roleshop**\n- **r!traduzir**\n- **r!coins**\n- **r!reverse**", "- **r!cat**"];
  let pagina = 1;

  message.reply("**Comandos enviados em sua DM! :envelope_with_arrow:**");
  message.author.sendMessage({
      "embed": {
          "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ Rukus ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Aqui está uma lista de meus comandos:**\nㅤ\n**Prefix:** `r!`",
          "color": 55512,
          "timestamp": new Date(),
          "footer": {
              "icon_url": message.author.displayAvatarURL,
              "text": message.author.username
          },
          "thumbnail": {
              "url": "https://i.imgur.com/zojjwCf.png"
          },
          "fields": [{
              "name": `:bookmark: Pag. ${pagina}/${paginas.length}:`,
              "value": paginas[pagina - 1]
          }]
      }
  }).then(help => {

      setTimeout(() => {
          help.react('⬅');
      }, 500);
      setTimeout(() => {
          help.react('➡');
      }, 1000);

      const collector = help.createReactionCollector((r, u) => (r.emoji.name === '⬅' || r.emoji.name === '➡') && u.id !== client.user.id);

      collector.on('collect', r => {
          switch(r.emoji.name) {

          case '⬅':

              if(pagina == 1) {
                pagina = paginas.length
                help.edit({
                    "embed": {
                        "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ Rukus ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Aqui está uma lista de meus comandos:**\nㅤ\n**Prefix:** `r!`",
                        "color": 55512,
                        "timestamp": new Date(),
                        "footer": {
                            "icon_url": message.author.displayAvatarURL,
                            "text": message.author.username
                        },
                        "thumbnail": {
                            "url": "https://i.imgur.com/zojjwCf.png"
                        },
                        "fields": [{
                            "name": `:bookmark: Pag. ${pagina}/${paginas.length}:`,
                            "value": paginas[pagina - 1]
                        }]
                    }
                });
                r.users.filter(u => r.remove(u.id !== client.user.id));
              } else {
                  pagina = pagina - 1
                  help.edit({
                      "embed": {
                          "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ Rukus ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Aqui está uma lista de meus comandos:**\nㅤ\n**Prefix:** `r!`",
                          "color": 55512,
                          "timestamp": new Date(),
                          "footer": {
                              "icon_url": message.author.displayAvatarURL,
                              "text": message.author.username
                          },
                          "thumbnail": {
                              "url": "https://i.imgur.com/zojjwCf.png"
                          },
                          "fields": [{
                              "name": `:bookmark: Pag. ${pagina}/${paginas.length}:`,
                              "value": paginas[pagina - 1]
                          }]
                      }
                  });
                  r.users.filter(u => r.remove(u.id !== client.user.id));
              }

              break;

          case '➡':

              if(pagina + 1 > paginas.length) {
                pagina = 1
                help.edit({
                    "embed": {
                        "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ Rukus ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Aqui está uma lista de meus comandos:**\nㅤ\n**Prefix:** `r!`",
                        "color": 55512,
                        "timestamp": new Date(),
                        "footer": {
                            "icon_url": message.author.displayAvatarURL,
                            "text": message.author.username
                        },
                        "thumbnail": {
                            "url": "https://i.imgur.com/zojjwCf.png"
                        },
                        "fields": [{
                            "name": `:bookmark: Pag. ${pagina}/${paginas.length}:`,
                            "value": paginas[pagina - 1]
                        }]
                    }
                });
                r.users.filter(u => r.remove(u.id !== client.user.id));
              } else {
                  pagina = pagina + 1
                  help.edit({
                      "embed": {
                          "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ Rukus ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Aqui está uma lista de meus comandos:**\nㅤ\n**Prefix:** `r!`",
                          "color": 55512,
                          "timestamp": new Date(),
                          "footer": {
                              "icon_url": message.author.displayAvatarURL,
                              "text": message.author.username
                          },
                          "thumbnail": {
                              "url": "https://i.imgur.com/zojjwCf.png"
                          },
                          "fields": [{
                              "name": `:bookmark: Pag. ${pagina}/${paginas.length}:`,
                              "value": paginas[pagina - 1]
                          }]
                      }
                  });
                  r.users.filter(u => r.remove(u.id !== client.user.id));
              }

              break;

          }
      })

      setTimeout(() => {
          help.delete();
      }, 1 * 60 * 1000);

  })

}
