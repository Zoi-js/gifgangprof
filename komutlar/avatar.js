const Discord = require('discord.js');

exports.run = (client, message, args) => {
    
    let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    
    const avatar = new Discord.RichEmbed()
	.setURL(user.avatarURL)
	.setTitle ('Fotoğrafı İndirmek İçin Tıkla.!')
        .setImage(user.avatarURL)
        .setTimestamp()
    .setFooter(`Gif Gang 🔱 `, message.author.avatarURL,)
    .setColor("f0ebf1")
    message.channel.sendEmbed(avatar)
    
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["pp"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'avatar',
  category: 'kullanıcı',
  description: 'Belirtilen Kişinin veya Komutu Yazan Kişinin Avatarını Atar.',
  usage: '+avatar <@kişi-etiket> veya +avatar'
};