exports.run = (client, message, args) => {

        let reason = args.slice(0).join(' ');

        var desenvolvedores = ["314460143909601280"]

        if(!desenvolvedores.includes(message.author.id)) return message.reply("**Sem permissão. :confused:**");
        if (reason.length < 1) return message.reply('**Diga o comando que devo reiniciar!**');

        delete require.cache[require.resolve(`./${args[0]}.js`)];

        message.channel.sendMessage("**:gear: " + message.author + " Comando " + args[0] + " reiniciado!**");

}
