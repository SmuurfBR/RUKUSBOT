var database = require("../../database.js")

exports.run = (client, message, args) => {

    let user = message.mentions.users.first();
    let razaod = args.slice(1).join(' ');

    database.Users.findOne({
        "_id": message.author.id
    }, function(erro, documento) {

        if (documento) {

            if (message.mentions.users.size < 1) return message.reply("**Mencione alguem para doar dinheiro!**");
            if (message.mentions.users.first().id == message.author.id) return message.reply("**Você não pode doar para você mesmo!**");
            if (message.mentions.users.first().bot) return message.reply("**Você não pode doar para um bot!**");
            if (!razaod.length < 1) {
                if (parseInt(args[1]) > 0) {
                if (args[1] < documento.coins) {

                    database.Users.findOne({
                        "_id": message.mentions.users.first().id
                    }, function(errou, docs) {

                        if (docs) {

                            setTimeout(() => {
                            docs.coins += parseInt(args[1])
                            docs.save();
                            }, 5000);
                            documento.coins -= parseInt(args[1])
                            documento.save();
                            message.reply("**Doado com sucesso. Aguarde alguns segundos até que o dinheiro chegue até o outro usuário. :money_with_wings:**");

                        } else {
                            var pessoa = new database.Users({
                                _id: message.mentions.users.first().id,
                                level: 0,
                                xp: 0,
                                coins: 0,
                                rep: 0,
                                comum: 0,
                                raro: 0,
                                epico: 0,
                                lendario: 0,
                                background: "https://i.imgur.com/J3GPYFM.jpg",
                                ban: false,
                                frase: "Nenhuma"
                            })
                        
                          pessoa.save()
                        }

                    })

                } else {
                    message.reply("**Você não tem esse dinheiro!**")
                }
            } else {
                message.reply("**Não pode ser menor que 0!**");
            }
            } else {
                message.reply("**Diga quanto vai doar!**");
            }

        } else {
            var pessoa = new database.Users({
                _id: message.author.id,
                level: 0,
                xp: 0,
                coins: 0,
                rep: 0,
                comum: 0,
                raro: 0,
                epico: 0,
                lendario: 0,
                background: "https://i.imgur.com/J3GPYFM.jpg",
                ban: false,
                frase: "Nenhuma"
            })
        
          pessoa.save()
        }
    })

}