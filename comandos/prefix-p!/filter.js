var database = require("../../database.js")

exports.run = (client, message, args) => {

    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');

    var desenvolvedores = ["314460143909601280"]

    if (!desenvolvedores.includes(message.author.id) & !message.member.hasPermission(["MANAGE_GUILD"]))
    return message.reply("**Você não tem permissão para adicionar filtros!**");

    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {

        if (documento) {

            if (!razaou.length < 1) {

                if (message.content.startsWith("r!filter link")) {
                    if(documento.links){
                        documento.links = false
                        documento.save()
                        message.reply("**:warning: Filtro de links desativado.**");
                    } else {
                        documento.links = true
                        documento.save()
                        message.reply("**:warning: Filtro de links ativado.**");
                    }
                }

                if (message.content.startsWith("r!filter invite")) {
                    if(documento.invites){
                        documento.invites = false
                        documento.save()
                        message.reply("**:warning: Filtro de invites desativado.**");
                    } else {
                        documento.invites = true
                        documento.save()
                        message.reply("**:warning: Filtro de invites ativado.**");
                    }
                }

            } else {
                message.reply({
                    "embed": {
                      "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ Rukus ❄**ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```\nr!filter link\nr!filter invite```\n:incoming_envelope: Usuário com permissao **GERENCIAR MENSAGENS** ou cargo **athli**, conseguem enviar links e invites.\nㅤ",
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
