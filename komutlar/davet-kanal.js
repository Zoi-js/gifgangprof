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
    .setDescription(" <a:mh:751683381036580924> **Yetkin** bulunmamakta. <a:mh:751683381036580924> ");

    message.channel.send(embed);
    return;
  }

  let kanal = message.mentions.channels.first();

  if (!kanal) {
    return message.channel.send(
      new Discord.RichEmbed()
      .setAuthor('Davet Sistemi', message.author.avatarURL,)
    .setTimestamp()
    .setFooter(` Gif Gang 🔱 `, bot.user.avatarURL)
    .setColor("f0ebf1")
    .setDescription(" <a:mh:751683381036580924> Bir **kanal** belirtin. <a:mh:751683381036580924> ")
    );
  }
  const embed = new Discord.RichEmbed()
  .setAuthor('Davet Sistemi', message.author.avatarURL,)
    .setTimestamp()
    .setFooter(` Gif Gang 🔱 `, bot.user.avatarURL)
    .setColor("f0ebf1")
    .setDescription(` <a:mh:751683381036580924> Davet kanalı ${kanal} olarak **ayarlandı**. <a:mh:751683381036580924> `);
  message.channel.send(embed);

  db.set(`davetkanal_${message.guild.id}`, kanal.id);
};

module.exports.conf = {
  aliases: ["davet-kanal-ayarla"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-kanal",
  description: "davet-kanal",
  usage: "davet-kanal"
};
