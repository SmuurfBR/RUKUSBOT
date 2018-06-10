var database = require("../../database.js")

exports.run = (client, message, args) => {

    let reason = args.slice(0).join(' ');

    var desenvolvedores = ["314460143909601280"]

    if(!desenvolvedores.includes(message.author.id)) return message.reply("**Sem permissão. :confused:**");
    if (reason.length < 1) return message.reply('**Diga a frase que deseja deletar.**');

    database.Convs.findOne({
        "frase": message.content.toLowerCase().replace("r!remore ", "")
    }, function(erro, documento) {

        if(documento){

            database.Convs.deleteOne({
                "frase": message.content.toLowerCase().replace("r!remore ", "")
            }, function(erro, documento) {})

            message.reply("**Frase removida.**");

        } else {
            message.reply("**Frase inexistente.**");
        }

    })

}
