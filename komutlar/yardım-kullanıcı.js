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
    ` <a:mh:751683381036580924> Gif Gang Yetkili Yardım Menüsü; <a:mh:751683381036580924> \n
     g!**invites** İnvite kontrol.
     g!**davet-kanal-ayarla** Davet kanalını ayarlar.
     g!**davet-kanal-sıfırla** Davet kanalını sıfırlar.
     g!**davet-ekle** Kullanıcı'ya belirtilen miktar kadar davet ekler.
     g!**davet-sil** Kullanıcı'nın belirtilen miktar kadar davetini siler.
     g!**davet-sıfırla** Kullanıcı'nın davetini sıfırlar.`)
    
     message.channel.send({embed});
	 
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili-help'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili-yardım',
  description: '',
  usage: 'yetkili-yardım'
};