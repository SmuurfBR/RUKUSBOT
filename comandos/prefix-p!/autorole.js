var database = require("../../database.js")

exports.run = (client, message, args) => {


    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');
    let razaot = args.slice(2).join(' ');
    let razaoq = args.slice(3).join(' ');
    let user = message.mentions.roles.first();

    var desenvolvedores = ["314460143909601280"]

    if (!desenvolvedores.includes(message.author.id) & !message.member.hasPermission(["MANAGE_ROLES_OR_PERMISSIONS"]))
    return message.reply("**Você não tem permissão para setar um autorole!**")

    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {

        if (documento) {

            if (!razaou.length < 1) {

                if (message.content.startsWith("r!autorole set")) {

                    if (message.mentions.roles.size < 1) return message.reply("**Mencione o cargo que deseja setar auto-role!**");
                    if(message.mentions.roles.first().position >= message.guild.members.get(client.user.id).highestRole.position){
                        message.reply("**Não tenho permissão para dar esse cargo. :confused:**");
                    } else {
                    documento.autoroleid = message.mentions.roles.first().id
                    documento.autorole = true
                    documento.save();

                    message.reply("**Autorole setado com sucesso.**");
                    }
                }

                if (message.content.startsWith("r!autorole remove")) {
                        if (!documento.autorole) {
                            message.reply("**Não há um autorole definido neste servidor!**");
                        } else {
                            documento.autoroleid = "Nenhum"
                            documento.autorole = false
                            documento.save()
                            message.reply("**Autorole removido com sucesso!**");
                    }
                }

                if (message.content.startsWith("r!autorole info")) {

                    if (!documento.autorole) {
                        message.channel.sendMessage({
                            "embed": {
                              "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ Rukus ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```\nr!autorole set <menção do cargo>\nr!autorole remove```",
                              "color": 55512,
                              "timestamp": new Date(),
                              "footer": {
                                "icon_url": message.author.displayAvatarURL,
                                "text": message.author.username
                              },
                              "thumbnail": {
                                "url": "https://i.imgur.com/zojjwCf.png"
                              }
                            }
                          });
                    } else {
                        message.channel.sendMessage({
                            "embed": {
                                "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ Rukus ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Cargo:** <@&" + documento.autoroleid + ">\nㅤ\n**Como usar:**\n```\nr!autorole set <menção do cargo>\nr!autorole remove```",
                                "color": 55512,
                                "timestamp": new Date(),
                                "footer": {
                                  "icon_url": message.author.displayAvatarURL,
                                  "text": message.author.username
                                },
                                "thumbnail": {
                                    "url": "https://i.imgur.com/zojjwCf.png"
                                }
                            }
                        });
                    }

                }

            } else {
                message.reply({
                    "embed": {
                      "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ Rukus ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```\nr!autorole set <menção do cargo>\nr!autorole remove\nr!autorole info```",
                      "color": 55512,
                      "timestamp": new Date(),
                      "footer": {
                        "icon_url": message.author.displayAvatarURL,
                        "text": message.author.username
                      },
                      "thumbnail": {
                        "url": "https://i.imgur.com/zojjwCf.png"
                      }
                    }
                  });
            }

        } else {

            var servidor = new database.Guilds({
                _id: message.guild.id,
                welcome: false,
                welcomechannel: "Nenhum",
                welcomemsg: "Nenhuma",
                byebye: false,
                byebyechannel: "Nenhum",
                byebyemsg: "Nenhuma",
                autorole: false,
                autoroleid: "Nenhum",
                leveis: true,
                coins: true,
                desc: "Use r!config desc <descrição do servidor> para setar uma descrição.",
                box: true,
                caixa: false,
                caixatipo: "Comum",
                links: false,
                invites: false,
                roleshop: false,
            })
            servidor.save()
            message.reply("**Use o comando novamente!**");

        }

    })

}
