const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    message.channel.send(new Discord.Attachment('https://im5.ezgif.com/tmp/ezgif-5-4468d259ce0a.gif'));
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'nou',
  category: 'Fun',
  description: 'Returns a No U gif',
  usage: 'nou'
};
