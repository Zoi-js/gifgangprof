const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "?";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.RichEmbed()
    .setAuthor('Davet Sistemi', message.author.avatarURL,)
    .setTimestamp()
    .setFooter(` Gif Gang 🔱 `, bot.user.avatarURL)
    .setColor("f0ebf1")
    .setDescription("**Yetkin** bulunmamakta.")
    message.channel.send(embed);
    return;
  }

  let u = message.mentions.users.first();
let m = args.slice(1).join(" ")
  if (!u) {
    return message.channel.send(
      new Discord.RichEmbed()
    .setAuthor('Davet Sistemi', message.author.avatarURL,)
    .setTimestamp()
    .setFooter(` Gif Gang 🔱 `, bot.user.avatarURL)
    .setColor("f0ebf1")
    .setDescription(" <a:mh:751683381036580924> Bir **Kullanıcı** etiketleyin. <a:mh:751683381036580924> ")
    );
  }
    if (!m) {
    return message.channel.send(
      new Discord.RichEmbed()
      .setAuthor('Davet Sistemi', message.author.avatarURL,)
    .setTimestamp()
    .setFooter(` Gif Gang 🔱 `, bot.user.avatarURL)
    .setColor("f0ebf1")
    .setDescription(" <a:mh:751683381036580924> Bir **Sayı** giriniz. <a:mh:751683381036580924> ")
    );
  }
  const embed = new Discord.RichEmbed()
  .setAuthor('Davet Sistemi', message.author.avatarURL,)
    .setTimestamp()
    .setFooter(` Gif Gang 🔱 `, bot.user.avatarURL)
    .setColor("f0ebf1")
    .setDescription(`<a:mh:751683381036580924> ${u} Adlı Kullanıcı'dan **${m}** davet silindi. <a:mh:751683381036580924> `)
  message.channel.send(embed);

  db.add(`davet_${message.author.id}_${message.guild.id}`, -m);
};

module.exports.conf = {
  aliases: ["davetsil"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-sil",
  description: "davet-sil",
  usage: "davet-sil"
};
