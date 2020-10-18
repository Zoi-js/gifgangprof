//------------------------ 7/24 Online Tutma Kodu -----------------------//
//------------------------ 7/24 Online Tutma Kodu -----------------------//
//------------------------ 7/24 Online Tutma Kodu -----------------------//

const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(`7/24 Kodu Aktif Hale Getirildi!`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

//------------------------ 7/24 Online Tutma Kodu Son -----------------------//
//------------------------ 7/24 Online Tutma Kodu Son -----------------------//
//------------------------ 7/24 Online Tutma Kodu Son -----------------------//

const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');

const db = require('quick.db');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

  client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};







client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token)

//------------------------ Davet Sistemi -----------------------//
//------------------------ Davet Sistemi -----------------------//
//------------------------ Davet Sistemi -----------------------//
/////////////////////////////////////////////////////////////////////////////
client.on(`userUpdate`, (oldUser, newUser) => {

  let kişi = client.users.get(oldUser.id)
  let avatar = kişi.avatarURL.split('?')[0]
  let kanal = client.channels.find(ch => ch.id === '753967368824160294')/// Gifsiz Avatar Kanal İd
  let kanal1 = client.channels.find(ch => ch.id === '753966158469922876')/// Gifli Avatar Kanal İd
if(avatar.endsWith('.png')) {
  const emb = new Discord.RichEmbed()
    .setColor('f0ebf1',true)
  .setURL(kişi.avatarURL)
  .setTitle(`Fotoğraf İçin [Tıkla]`)
  .setColor('f0ebf1',true)
  .setImage(avatar)
    .setFooter(`Gif Gang 🔱 `, kişi.avatarURL)
  .setTimestamp()
  kanal.send(emb)
}
if(avatar.endsWith('.gif')) {
  const emb = new Discord.RichEmbed()
  .setURL(kişi.avatarURL)
  .setTitle(`Gif İçin [Tıkla]`)
  .setColor('f0ebf1',true)
  .setImage(avatar)
    .setFooter(`Gif Gang 🔱 `, kişi.avatarURL)
  .setTimestamp()
  kanal1.send(emb)
}
})
/////////////////////////////////////////////////////////////////////////////
const invites = {};

const wait = require("util").promisify(setTimeout);

client.on("ready", () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on("guildMemberRemove", async member => {
  let kanal = await db.fetch(`davetkanal_${member.guild.id}`);
  if (!kanal) return;
  let veri = await db.fetch(`rol1_${member.guild.id}`);
  let veri12 = await db.fetch(`roldavet1_${member.guild.id}`);
  let veri21 = await db.fetch(`roldavet2_${member.guild.id}`);
  let veri2 = await db.fetch(`rol2_${member.guild.id}`);
  let d = await db.fetch(`bunudavet_${member.id}`);
  const sa = client.users.get(d);
  const sasad = member.guild.members.get(d);
  let sayı2 = await db.fetch(`davet_${d}_${member.guild.id}`);
  db.add(`davet_${d}_${member.guild.id}`, -1);

  if (!d) {
    const aa = new Discord.RichEmbed()
    .setAuthor('Davet Sistemi', kişi.avatarURL,)
    .setTimestamp()
    .setFooter(` Gif Gang 🔱 `, kişi.avatarURL)
    .setColor("f0ebf1")
      .setDescription(
         `<a:mh:751683381036580924> ${member.user.tag} **left**. **İnvited by**; __Vanity URL.__`
      );
    client.channels
      .get(kanal)
      .send(
        `<a:mh:751683381036580924> ${member.user.tag} **left**. **İnvited by**; __Vanity URL.__`
      );
    return;
  } else {
    const aa = new Discord.RichEmbed()
    .setAuthor('Davet Sistemi', kişi.avatarURL,)
    .setTimestamp()
    .setFooter(` Gif Gang 🔱 `, kişi.avatarURL)
    .setColor("f0ebf1")
      .setDescription(
        `<a:mh:751683381036580924> ${member.user.tag} **left**. İnvited by; ${sa.tag}`
      );
    client.channels
      .get(kanal)
      .send(
        `<a:mh:751683381036580924> ${member.user.tag} **left**. İnvited by; ${sa.tag}`
      );

    if (!veri) return;

    if (sasad.roles.has(veri)) {
      if (sayı2 <= veri12) {
        sasad.removeRole(veri);
        return;
      }
    }
    if (sasad.roles.has(veri2)) {
      if (!veri2) return;
      if (sayı2 <= veri21) {
        sasad.removeRole(veri2);
        return;
      }
    }
  }
});

client.on("guildMemberAdd", async member => {
  member.guild.fetchInvites().then(async guildInvites => {
    let veri = await db.fetch(`rol1_${member.guild.id}`);
    let veri12 = await db.fetch(`roldavet1_${member.guild.id}`);
    let veri21 = await db.fetch(`roldavet2_${member.guild.id}`);
    let veri2 = await db.fetch(`rol2_${member.guild.id}`);
    let kanal = await db.fetch(`davetkanal_${member.guild.id}`);
    if (!kanal) return;
    const ei = invites[member.guild.id];

    invites[member.guild.id] = guildInvites;

    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const sasad = member.guild.members.get(invite.inviter.id);
    const davetçi = client.users.get(invite.inviter.id);

    db.add(`davet_${invite.inviter.id}_${member.guild.id}`, +1);
    db.set(`bunudavet_${member.id}`, invite.inviter.id);
    let sayı = await db.fetch(`davet_${invite.inviter.id}_${member.guild.id}`);

    let sayı2;
    if (!sayı) {
      sayı2 = 0;
    } else {
      sayı2 = await db.fetch(`davet_${invite.inviter.id}_${member.guild.id}`);
    }

    const aa = new Discord.RichEmbed()
    .setAuthor('Davet Sistemi', kişi.avatarURL,)
    .setTimestamp()
    .setFooter(` Gif Gang 🔱 `, kişi.avatarURL)
    .setColor("f0ebf1")
      .setDescription(
        `${member.user.tag} **joined**. İnvited by; ${davetçi.tag} (**${sayı2}** İnvites.)`
      );
    client.channels
      .get(kanal)
      .send(
        `${member.user.tag} **joined**. İnvited by; ${davetçi.tag} (**${sayı2}** İnvites.)`
      );
    if (!veri) return;

    if (!sasad.roles.has(veri)) {
      if (sayı2 => veri12) {
        sasad.addRole(veri);
        return;
      }
    } else {
      if (!veri2) return;
      if (sayı2 => veri21) {
        sasad.addRole(veri2);
        return;
      }
    }
  });
});
/////////////////////////////////////////////////////////////////////////////
client.on("message", m => {
  if (m.channel.id !== "753980199606943914") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753980213712388186") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753980280016207994") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753980297107996763") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753980363709349900") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753980394352935072") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753980765699833918") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753980781491126314") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753980899670097970") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753980921375358977") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753981533039231036") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753981546733633597") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753982248486830130") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753982265855442947") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753982358738173992") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753982380326518895") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753982467471442002") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753982481035821226") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753982654529142794") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753982684270821427") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753982749647437834") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753982761970303111") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753982877242228807") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753982891159060630") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753982947371122841") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753982984524398602") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753983055936487524") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "753983071367463003") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "754002776727486595") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

client.on("message", m => {
  if (m.channel.id !== "754002801775870073") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});
//////////////////////////////////////////////////////////////////