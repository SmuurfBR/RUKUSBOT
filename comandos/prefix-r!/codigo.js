const Discord = require('discord.js'); 
const bot = new Discord.Client();

bot.on('message', (message) => {

if(message.content == 'r!codigo') {

    message.channel.sendMessage('Código do bot feito por Márcio#1636 e seus amiguinhos!');
}
});
