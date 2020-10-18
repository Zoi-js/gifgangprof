const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  
  const embed = new Discord.RichEmbed()
	.setAuthor('Davet', message.author.avatarURL,)
	.setURL('https://discord.com/oauth2/authorize?client_id=748958799917744270&scope=bot&permissions=8')
	.setTitle('[Tıkla]')
    .setTimestamp()
    .setFooter(` Gif Gang 🔱 `, message.author.avatarURL)
    .setColor("f0ebf1")
  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet'],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "davet",
  description: "davet",
  usage: "davet"
};
