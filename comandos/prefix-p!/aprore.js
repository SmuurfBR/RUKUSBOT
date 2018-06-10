var database = require("../../database.js")

exports.run = (client, message, args) => {

    let reason = args.slice(0).join(' ');

    var desenvolvedores = ["314460143909601280"]

    if(!desenvolvedores.includes(message.author.id)) return message.reply("**Sem permissão. :confused:**");
    if (reason.length < 1) return message.reply('**Diga a frase que deseja aprovar.**');

    database.Convs.findOne({
        "frase": message.content.toLowerCase().replace("r!aprore ", "")
    }, function(erro, documento) {

        if(documento){

            if(documento.aprove){

                documento.aprove = false
                documento.save();

                message.reply("**Frase desaprovada.**");

            } else {

            documento.aprove = true
            documento.save();

            message.reply("**Frase aprovada.**");

        }

        } else {
            message.reply("**Frase inexistente.**");
        }

    })

}
