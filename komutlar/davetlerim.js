const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args, tools) => {
  let kişi;
  if (message.mentions.members.first()) {
    kişi = message.mentions.members.first();
  } else {
    kişi = message.author;
  }

  let bilgi = await db.fetch(`davet_${kişi.id}_${message.guild.id}`);
  let sayı2;
  if (!bilgi) {
    sayı2 = 0;
  } else {
    sayı2 = await db.fetch(`davet_${kişi.id}_${message.guild.id}`);
  }
  let veri = await db.fetch(`rol1_${message.guild.id}`);
  let veri12 = await db.fetch(`roldavet1_${message.guild.id}`);
  let veri21 = await db.fetch(`roldavet2_${message.guild.id}`);
  let veri2 = await db.fetch(`rol2_${message.guild.id}`);
  if (!veri) {
    const embed = new Discord.RichEmbed()
		.setURL(message.author.avatarURL)
		.setTitle('Gif Gang 🗽')
	.setAuthor('Davet Sistemi', message.author.avatarURL,)
    .setTimestamp()
    .setFooter(` Gif Gang 🔱 `, message.author.avatarURL)
    .setColor("f0ebf1")
      .addField(` <a:mh:751683381036580924> Davetlerin Sahibi; <a:mh:751683381036580924> \n`, `\n     <@` + kişi.id + `>`, true)
      .addField(` <a:mh:751683381036580924> Toplam Daveti; <a:mh:751683381036580924> \n`, `**` +  sayı2 + `**`, true)
    message.channel.send(embed);
  }
  if (message.member.roles.has(veri2)) {
    const embed = new Discord.RichEmbed()
		.setURL(message.author.avatarURL)
		.setTitle('Gif Gang 🗽')
	.setAuthor('Davet Sistemi', message.author.avatarURL,)
    .setTimestamp()
    .setFooter(` Gif Gang 🔱 `, message.author.avatarURL)
    .setColor("f0ebf1")
      .addField(` <a:mh:751683381036580924> Davetlerin Sahibi; <a:mh:751683381036580924> \n`, `\n     <@` + kişi.id + `>`, true)
      .addField(` <a:mh:751683381036580924> Toplam Daveti; <a:mh:751683381036580924> \n`, `**` +  sayı2 + `**`, true);
    message.channel.send(embed);
    return;
  }
  if (!message.member.roles.has(veri)) {
    const embed = new Discord.RichEmbed()
	.setURL(message.author.avatarURL)
		.setTitle('Gif Gang 🗽')
	.setAuthor('Davet Sistemi', message.author.avatarURL,)
    .setTimestamp()
    .setFooter(` Gif Gang 🔱 `, message.author.avatarURL)
    .setColor("f0ebf1")
      .addField(` <a:mh:751683381036580924> Davetlerin Sahibi; <a:mh:751683381036580924> \n`, `\n     <@` + kişi.id + `>`)
      .addField(` <a:mh:751683381036580924> Toplam Daveti; <a:mh:751683381036580924> \n`, `**` +  sayı2 + `**`)
      .setDescription(
        `${message.guild.roles.get(veri).name} rolü için son ${-sayı2 -
          -veri12} davet!`
      );
    message.channel.send(embed);
    return;
  }
  if (message.member.roles.has(veri)) {
    if (!veri2) {
      const embed = new Discord.RichEmbed()
	  	.setURL(message.author.avatarURL)
		.setTitle('Gif Gang 🗽')
	.setAuthor('Davet Sistemi', message.author.avatarURL,)
    .setTimestamp()
    .setFooter(` Gif Gang 🔱 `, message.author.avatarURL)
    .setColor("f0ebf1")
        .addField(` <a:mh:751683381036580924> Davetlerin Sahibi; <a:mh:751683381036580924> \n`, `\n     <@` + kişi.id + `>`,)
        .addField(` <a:mh:751683381036580924> Toplam Daveti; <a:mh:751683381036580924> \n`, `**` +  sayı2 + `**`);
      message.channel.send(embed);
      return;
    }
    if (veri2) {
      const embed = new Discord.RichEmbed()
	  	.setURL(message.author.avatarURL)
		.setTitle('Gif Gang 🗽')
	.setAuthor('Davet Sistemi', message.author.avatarURL,)
    .setTimestamp()
    .setFooter(` Gif Gang 🔱 `, message.author.avatarURL)
    .setColor("f0ebf1")
        .addField(` <a:mh:751683381036580924> Davetlerin Sahibi; <a:mh:751683381036580924> \n`, `\n     <@` + kişi.id + `>`)
        .addField(` <a:mh:751683381036580924> Toplam Daveti; <a:mh:751683381036580924> \n`, `**` +  sayı2 + `**`)
        .setDescription(
          `${message.guild.roles.get(veri2).name} rolü için son ${-sayı2 -
            -veri21} davet!`
        );
      message.channel.send(embed);
      return;
    }
  }
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["invites", "davetlerim"],
  permLevel: 0
};

exports.help = {
  name: "davetler"
};
