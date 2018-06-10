exports.run = (client, message, args)  => {

    let reason = args.slice(0).join(' ');
    var desenvolvedores = ["314460143909601280"]

  if (message.author.bot) return message.reply("**Bots não podem usar esse comando!**")
  if (!desenvolvedores.includes(message.author.id) & !message.member.hasPermission(["MANAGE_MESSAGES"]))
  return message.reply("**Você não tem permissão para limpar o chat!**");
  if (reason.length < 1) return message.reply('**Diga a quantidade de mensagens que devo apagar!**');
  message.channel.bulkDelete(`${parseInt(args[0])}`)
    setTimeout(function() {
        message.channel.sendMessage(`**:wastebasket: Removido ${args[0]} mensagens por <@${message.author.id}> !**`).then((value) => {
            setTimeout(() => {
                value.delete();
            }, 5000);
        });
    }, 2000)
}
