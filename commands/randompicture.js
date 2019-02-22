const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  try {
    let settings = client.getSettings(message.guild.id);

    require('request')({url: 'http://www.splashbase.co/api/v1/images/random?images_only=true', json: true}, (req, res, json) => {
      let embed = new Discord.RichEmbed()
      .setTitle('Random Picture')
      .setColor('#363942')
      .setImage(json.url);
      
      message.channel.send(embed);
    });
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['randomimage', 'randompic', 'randomimg'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'randompicture',
  category: 'Fun',
  description: 'Returns a random Picture',
  usage: 'randompicture'
};