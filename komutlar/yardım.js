const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Komutlarım`)
.setDescription(`
» \`${prefix}komut\`: **Açıklama**
» \`${prefix}komut\`: **Açıklama**
» \`${prefix}komut\`: **Açıklama**
» \`${prefix}komut\`: **Açıklama**
» \`${prefix}komut\`: **Açıklama**
» \`${prefix}komut\`: **Açıklama**
» \`${prefix}komut\`: **Açıklama**
» \`${prefix}komut\`: **Açıklama**
» \`${prefix}komut\`: **Açıklama**
» \`${prefix}komut\`: **Açıklama**
» \`${prefix}komut\`: **Açıklama**
» \`${prefix}komut\`: **Açıklama**
» \`${prefix}komut\`: **Açıklama**
» \`${prefix}komut\`: **Açıklama**
» \`${prefix}komut\`: **Açıklama**






`)


.setThumbnail(message.author.avatarURL({dynamic: true}))
.setTimestamp()
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'yardım kodu.',
  usage: 'yardım'
};