const Discord = require('discord.js');
exports.run = (client, message, args) => {
    return message.channel.send
    
    
    
    
    
    ("**Kayıt Beklemeye Geçip Bekleyiniz En Yakın\nZamanda Yetkililer Sizinle İlgilenicek**\n<@&@🏆 | Kurucu> ")








};

;
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt','kayit'],
  permLevel: "0"
};

exports.help = {
  name: "kayıt",
  description: "kayıt komutu berk abi",
  usage: "kayıt"
};