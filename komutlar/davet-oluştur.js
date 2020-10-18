const Discord = require(`discord.js`)

exports.run = async (bot, message, args) => {
  try {
    let invite = await message.channel.createInvite({
      maxAge: args.age * 60,
      maxUses: args.uses
    });
      const sunucubilgi = new Discord.RichEmbed()
	  .setAuthor('Davet Sistemi', message.author.avatarURL,)
    .setTimestamp()
	.setURL(`https://discord.gg/${invite.code}`)
	.setTitle('Oluşturulan Davet İçin Tıkla.!')
    .setFooter(` Gif Gang 🔱 `, message.author.avatarURL)
    .setColor("f0ebf1")
    return message.channel.sendEmbed(sunucubilgi).catch(e => {
return
    });
  }
  catch (e) {
return
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['davetoluştur'],
  permLevel: 0
};

exports.help = {
  name: 'davet-oluştur',
  description: 'davet-oluştur',
  usage: 'davet-oluştur'
};