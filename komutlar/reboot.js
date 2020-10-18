const Discord = require("discord.js");
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json");

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== ayarlar.id)
    return message.channel.send(new Discord.RichEmbed().setColor('f0ebf1').setAuthor('Gif Gang', message.author.avatarURL,).setDescription(`<a:1337hyr:753746571237261383> **Geliştiricim** değilsin bu komutu kullanamazsın.`).setTimestamp().setFooter('© Gif Gang')).then(m => m.delete(10000));

  message.channel.sendMessage(new Discord.RichEmbed().setColor('f0ebf1').setAuthor('Gif Gang', message.author.avatarURL,).setDescription(`<a:1337evt:753746571916607579> **Başarılı**, Gif Gang Bot Yeniden Başlatıldı..`).setTimestamp().setFooter('© Gif Gang')).then(m => m.delete(5000));
  message.delete(60).then(msg => {
    console.log(`✅ | Bot Yeniden Başlatıldı...`);

    process.exit(0);
  });
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r", "reboot", "yenile", "yeniden başlat"],
  permLevel: 0
};

module.exports.help = {
  name: "reboot",
  description: "",
  usage: "reboot"
};
