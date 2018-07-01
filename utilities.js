const Discord = require("discord.js")

exports.client = null;

exports.send_msg = (channelID, message, time = 0) => {
  let embed = new Discord.RichEmbed()
    .setColor([67, 173, 161])
    .setDescription(message);

  exports.client.channels.get(channelID).send(embed)
    .then((m) => (time > 0) ? m.delete(time) : null);
};

