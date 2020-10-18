const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
    const embed = new Discord.RichEmbed()
	.setAuthor('Avatar', message.author.avatarURL,)
    .setTimestamp()
    .setFooter(`Gif Gang 🔱 `, message.author.avatarURL)
    .setColor("f0ebf1")
	.setThumbnail(message.author.avatarURL)
    .setDescription(
    ` <a:mh:751683381036580924> Gif Gang Yardım Menüsü; <a:mh:751683381036580924> \n
     g!**man-gif** Rastgele erkek gifi arar.
     g!**woman-gif** Rastgele kadın gifi arar.
     g!**couple-gif** Rastgele sevgili gifi arar.
     g!**baby-gif** Rastgele bebek gifi arar.
     g!**animal-gif** Rastgele hayvan gifi arar.!

	 <a:mh:751683381036580924> Gif Gang Kullanıcı Yardım Menüsü; <a:mh:751683381036580924> \n
     g!**avatar** Etiketlediğiniz kişinin avatarını gösterir.
     g!**kullanıcı-bilgi** Etiketlediğiniz kişinin profilini gösterir.
     g!**info** Botun ve Sunucu'nun istatistiğini gösterir.`)
    
     message.channel.send({embed});
	 
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı-yardım'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı-yardım',
  description: '',
  usage: 'yardım'
};