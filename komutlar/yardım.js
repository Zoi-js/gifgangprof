const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (bot, message, args, tools) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "?";
  const embed = new Discord.RichEmbed()
	.setAuthor('Gif Gang Yardım', message.author.avatarURL,)
	.setURL(message.author.avatarURL)
	.setTitle('Gif Gang 🔱')
    .setTimestamp()
    .setFooter(` Gif Gang 🔱 `, bot.user.avatarURL)
    .setColor("f0ebf1")
    .addField(
      `Davet Bilgi; <a:mh:751683381036580924>`,
      `\`davet-kanal\`, \`davet-kanal-sıfırla\`, \`davet-ekle\`, \`davet-sıfırla\`, \`davet-sil\`, \`davetlerim\`, \`davet-oluştur\``
    )
	.addField(
      `Gif; <a:mh:751683381036580924>`,
      `\`man-gif\`, \`woman-gif\`, \`baby-gif\`, \`anime-gif\`, \`animal-gif\`, \`couple-gif\``
    )
    .addField(
      `Bot; <a:mh:751683381036580924>`,
      `\`info\`, \`davet\`, \`pp\``
    )
    .addField(
      `Moderasyon; <a:mh:751683381036580924>`,
      `\`ban\`, \`kick\`, \`kanal-kilit\`, \`unban\`, \`mute\`, \`takma-ad\`, \`yavaş-mod\`, \`temizle\``
    )
	.setThumbnail(bot.user.avatarURL)
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y"],
  permLevel: 0
};

exports.help = {
  name: "yardım"
};