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

  let u = message.mentions.users.first();
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

  const embed = new Discord.RichEmbed()
    .setAuthor('Davet Sistemi', message.author.avatarURL,)
    .setTimestamp()
    .setFooter(` Gif Gang 🔱 `, bot.user.avatarURL)
    .setColor("f0ebf1")
    .setDescription(`${u} Adlı şahsın davetlerinin sıfırlanmasını onaylıyor musunuz?`)
  .setFooter(bot.user.username, bot.user.avatarURL)
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 999990000
    });
    reactions.on("end", () => sentEmbed.edit("İşlem iptal oldu."));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(new Discord.RichEmbed().setColor('f0ebf1').setAuthor('Davet Sistemi', message.author.avatarURL,).setDescription(`İşlem onaylandı. ${u} Adlı Kullanıcı'nın davetleri sıfırlandı.`).setTimestamp().setFooter(` Gif Gang 🔱 `, bot.user.avatarURL)).then(m => m.delete(5000));

        db.delete(`davet_${message.author.id}_${message.guild.id}`);
      }
    });
  });
};

module.exports.conf = {
  aliases: ["davetsıfırla"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-sıfırla",
  description: "davet-sıfırla",
  usage: "davet-sıfırla"
};
