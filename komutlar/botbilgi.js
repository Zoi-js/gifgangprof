const Discord = require('discord.js');
const moment = require('moment')
require("moment-duration-format");


exports.run = (client, message, params) => {

    const duration = moment
    .duration(client.uptime)
    .format("D [gün], H [saat], m [dakika], s [saniye]"); 

    const embed = new Discord.RichEmbed()

    .setColor('f0ebf1',true)
    .setAuthor('Gif Gang', message.author.avatarURL,)
	.setURL('https://discord.gg/partner')
	.setTitle('Gif Gang Temsili Sunucusu İçin Tıkla.!')
    .addField('**The amount of RAM used**', `<a:mh:751683381036580924> ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
    .addField('**Total amount of RAM**', `<a:mh:751683381036580924> 32130 MB`, true)
    .addField('**Total Servers**', `<a:mh:751683381036580924> ${client.guilds.size}`, true)
	.addField('**Uptime day**', `<a:mh:751683381036580924> ${duration}`)
    .addField('**Info**', `<a:mh:751683381036580924> Serving to __${client.guilds.size}__ server and __${client.users.size}__ users.`)
    .setTimestamp()
    .setFooter(`Gif Gang 🔱 `, message.author.avatarURL)

    message.channel.send(embed)
}

exports.conf = {
    guildOnly : true,
    enabled : true,
    aliases : ['ping', 'info', 'i'],
    permLevel : 0
}

  exports.help = {
    name : 'ping'
  }
 