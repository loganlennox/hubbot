const Discord = require("discord.js")

const config = require("./config.json")

exports.client = null;

exports.send_msg = (channelID, message, time = 0) => {
  let embed = new Discord.RichEmbed()
    .setColor(config.baseColor)
    .setDescription(message);

  exports.client.channels.get(channelID).send(embed)
    .then((m) => (time > 0) ? m.delete(time) : null)
    .catch(console.error);
};

exports.send_custom_msg = (channelID, embed, time = 0) => {
  exports.client.channels.get(channelID).send(embed)
    .then((m) => (time > 0) ? m.delete(time) : null)
    .catch(console.error);
};
