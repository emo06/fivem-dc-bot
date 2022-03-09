const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  const Athenâx = new Discord.MessageEmbed()

  .setTitle('Yardım Menüsü') //başlığınız.

  .setColor('GREEN') // Embed Rengi

  .addField('Yardım Komutu','Komut Açıklaması') //Yardım Komutlarınız

  .setThumbnail(client.user.avatarURL())

  .addField('.ip','sw nin ipsini yazar')

  .addField('.destek','destek beklemeye geçip bekleyiniz')

  .addField('Yardım Komutu','Komut Açıklaması')

  .addField('Yardım Komutu','Komut Açıklaması')

  .addField('Yardım Komutu','Komut Açıklaması')

  .addField('Yardım Komutu','Komut Açıklaması') //Daha Fazla Komut Eklemek İçin .addField Satırlarını Çoğaltın

  .addField('Yardım Komutu','Komut Açıklaması')

  .setFooter('ALTYAZINIZ')

  message.channel.send(Athenâx)

 

};

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ['help', 'YARDIM', 'HELP', 'HELPS'],

  permLevel: 0,

};

exports.help = {

  name: 'yardım',

  usage: "!yardım"

};