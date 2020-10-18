const Discord = require('discord.js')
const db = require("quick.db")
const ms = require('parse-ms');
const fs = require('fs');
let yazı = JSON.parse(fs.readFileSync("./database.json", "utf8"));
exports.run = async (bot , message, args) => {

  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.RichEmbed().setColor('f0ebf1').setAuthor('Ban Sistemi', message.author.avatarURL,).setDescription(' <a:mh:751683381036580924> Ban komutunu sadece **Yönetici** yetkisi olanlar kullanabilir. <a:mh:751683381036580924> ').setTimestamp().setFooter(` Gif Gang 🔱 `, bot.user.avatarURL)).then(msg => msg.delete(9000))
    
  let kullanıcı = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
   
  let sebep = args.slice(1).join(' ');
   
  let sChannel = message.guild.channels.get('')
   
  if(!kullanıcı) return message.reply(new Discord.RichEmbed().setColor('f0ebf1').setAuthor('Ban Sistemi', message.author.avatarURL,).setDescription("<a:mh:751683381036580924> Bir **Kullanıcı** etiketleyin. <a:mh:751683381036580924> ").setTimestamp().setFooter(` Gif Gang 🔱 `, bot.user.avatarURL)).then(msg => msg.delete(9000))
   
  if(kullanıcı.hasPermission("ADMINISTRATOR")) return message.reply(new Discord.RichEmbed().setColor('f0ebf1').setAuthor('Ban Sistemi', message.author.avatarURL,).setDescription(' <a:mh:751683381036580924> **Yönetici** birisini banlayamazsın. <a:mh:751683381036580924> ').setTimestamp().setFooter(` Gif Gang 🔱 `, bot.user.avatarURL)).then(msg => msg.delete(9000))
    
  if(message.author.id === kullanıcı.user.id) return message.reply(new Discord.RichEmbed().setColor('f0ebf1').setAuthor('Ban Sistemi', message.author.avatarURL,).setDescription(' <a:mh:751683381036580924> **Kendini** banlayamazsın. <a:mh:751683381036580924> ').setTimestamp().setFooter(` Gif Gang 🔱 `, bot.user.avatarURL)).then(msg => msg.delete(9000))
   
  if(!sebep) return message.reply(new Discord.RichEmbed().setColor('f0ebf1').setAuthor('Ban Sistemi', message.author.avatarURL,).setDescription(' <a:mh:751683381036580924> Bir **Sebep** belirt. <a:mh:751683381036580924> ').setTimestamp().setFooter(` Gif Gang 🔱 `, bot.user.avatarURL)).then(msg => msg.delete(9000))
   
   if (!yazı[message.author.id]) yazı[message.author.id] = {
        kisi:message.author.id,
     banlar:{
       sayı:0,
       bantarihi:0
     },
     kayıtlar:{
        erkek: 0,
        kız: 0,
        sahte:0,
     },
      muteler:{
        sesmutesi:0,
        chatmute:0,
        karantina:0,
      },
      yetenekler:{
        beatboxer:0,
        vip:0,
        vokal:0,
        yazar:0,
        yazılım:0,
        youteber:0,
        ins:0,
        ressam:0,
        voceactor:0,
        dj:0,
        sevgilimvar:0,
        meltal:0,
      },
     cezalar:{
        esmutesi:0,
        chatmute:0,
        karantina:0,
      },
        isim:0,
      };
  
   await yazı[message.author.id].banlar.sayı++;
     
  
  //db.add(`BanSayısı_${message.author.id}`,1)        
   
 // let sayı = await db.fetch(`BanSayısı_${message.author.id}`)
   
 
  
  let sayı = await yazı[message.author.id].banlar.sayı

   let banlimiti = 3

let banaralıgı = 600000

  var tarih = Date.now() 

  if(sayı === 1){
  yazı[message.author.id].banlar.bantarihi=tarih;
  // db.set(`Banmatarihi_${message.author.id}`,tarih)   
    
  }
  let userInfo = yazı[message.author.id]
   
  let ilkbantarihi =  await yazı[message.author.id].banlar.bantarihi
   
if(sayı>banlimiti && tarih-ilkbantarihi <=banaralıgı) {

var süre = ms((ilkbantarihi+banaralıgı)-tarih)

 if(süre.minutes !== 0){
   
     message.channel.send(new Discord.RichEmbed().setColor('f0ebf1').setAuthor('Ban Sistemi', message.author.avatarURL,).setDescription(" <a:mh:751683381036580924> Ban atabilemek için **"+süre.minutes+" Dakika** beklemelisin. <a:mh:751683381036580924> ").setTimestamp().setFooter(` Gif Gang 🔱 `, bot.user.avatarURL)).then(m => m.delete(5000));
     
   fs.writeFile("./database.json", JSON.stringify(yazı), (x) => {
        if (x) console.error(x)
      });
   
   return
   }
   if(süre.seconds !== 0){
     message.channel.send(new Discord.RichEmbed().setColor('f0ebf1').setAuthor('Ban Sistemi', message.author.avatarURL,).setDescription(" <a:mh:751683381036580924> Ban atabilemek için **"+süre.seconds+" Saniye** beklemelisin. <a:mh:751683381036580924> ").setTimestamp().setFooter(` Gif Gang 🔱 `, bot.user.avatarURL)).then(m => m.delete(5000));
        fs.writeFile("./database.json", JSON.stringify(yazı), (x) => {
        if (x) console.error(x)
      });
     return
   }
     fs.writeFile("./database.json", JSON.stringify(yazı), (x) => {
        if (x) console.error(x)
      });
  return
}
  
  if(tarih-ilkbantarihi >=banaralıgı){
  
     yazı[message.author.id].banlar.sayı=0
   // db.set(`BanSayısı_${message.author.id}`,0)
      yazı[message.author.id].banlar.bantarihi=0
   // db.set(`Banmatarihi_${message.author.id}`,0) 
    
      let embed1 = new Discord.RichEmbed()
    .setTitle('Ban Sistemi')
      .setTimestamp()
      .setFooter(` Gif Gang 🔱 `, bot.user.avatarURL)
    .setColor("f0ebf1")
    .setDescription(" <a:mh:751683381036580924> "+kullanıcı.user+", "+message.guild.name+" sunucusundan **"+sebep+"** sebebiyle yasaklandınız. <a:mh:751683381036580924> ")
   
      kullanıcı.send(embed1)

     let embed3 = new Discord.RichEmbed()
      .setAuthor('Ban Sistemi', message.author.avatarURL,)
.setTimestamp()
    .setFooter(` Gif Gang 🔱 `, bot.user.avatarURL)
    .setColor("f0ebf1")
  .addField(` <a:mh:751683381036580924> **Ban Bilgi;** <a:mh:751683381036580924> `, `**Banlayan Yetkili;** ${message.author}  (ID'si; **${message.author.id}**) \n **Banlanan Kullanıcı;** ${kullanıcı.user.tag}  (ID'si **${kullanıcı.id}**)\n **Ban Sebebi;** ${sebep} `)
  .setImage('https://cdn.discordapp.com/attachments/733640065200160768/737282660250157122/tenor_4.gif')
        setTimeout(() => {
      message.guild.member(kullanıcı).ban(`${message.author.tag} | ${sebep}`).catch(err => message.reply(new Discord.RichEmbed().setColor('f0ebf1').setAuthor('Ban Sistemi', message.author.avatarURL,).setDescription(" <a:mh:751683381036580924> **Yetkim** bulunmamakta. <a:mh:751683381036580924> ").setTimestamp().setFooter(` Gif Gang 🔱 `, bot.user.avatarURL)).then(m => m.delete(5000)))  
        },500)
          message.react('a:1337evt:753746571916607579')
      

    message.channel.send(embed3).then(m => m.delete(15000));
     yazı[message.author.id].banlar.sayı++
   //   db.add(`BanSayısı_${message.author.id}`,1)        
//db.set(`Banmatarihi_${message.author.id}`,tarih)   
     yazı[message.author.id].banlar.bantarihi=tarih
    fs.writeFile("./database.json", JSON.stringify(yazı), (x) => {
        if (x) console.error(x)
      });
    return
 }
  
   let embed1 = new Discord.RichEmbed()
   .setTitle('Ban Sistemi')
   .setTimestamp()
   .setFooter(` Gif Gang 🔱 `, bot.user.avatarURL)
 .setColor("f0ebf1")
 .setDescription(" <a:mh:751683381036580924> "+kullanıcı.user+", "+message.guild.name+" sunucusundan **"+sebep+"** sebebiyle yasaklandınız. <a:mh:751683381036580924> ")
   kullanıcı.send(embed1)
  

   setTimeout(() => {
  message.guild.member(kullanıcı).ban(`${message.author.tag} | ${sebep}`).catch(err => message.reply(new Discord.RichEmbed().setColor('f0ebf1').setAuthor('Ban Sistemi', message.author.avatarURL,).setDescription(" <a:mh:751683381036580924> **Yetkim** bulunmamakta. <a:mh:751683381036580924> ").setFooter(` Gif Gang 🔱 `, bot.user.avatarURL)).then(m => m.delete(5000)))  
   },500)
     message.react('✅')
     let embed3 = new Discord.RichEmbed()
.setAuthor('Ban Sistemi', message.author.avatarURL,)
.setFooter(` Gif Gang 🔱 `, bot.user.avatarURL)
.setTimestamp()
.setColor('f0ebf1')
.addField(` <a:mh:751683381036580924> **Ban Bilgi;** <a:mh:751683381036580924> `, `**Banlayan Yetkili;** ${message.author}  (ID'si; **${message.author.id}**) \n **Banlanan Kullanıcı;** ${kullanıcı.user.tag}  (ID'si **${kullanıcı.id}**)\n **Ban Sebebi;** ${sebep} `)
  .setImage('https://cdn.discordapp.com/attachments/733640065200160768/737282660250157122/tenor_4.gif')

    message.channel.send(embed3).then(m => m.delete(15000));

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'Kullanıcıyı sunucudan yasaklar.',
  usage: 'ban'
};