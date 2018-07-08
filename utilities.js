const fs = require("fs");

const Discord = require("discord.js")

const config = include("/config.json")

exports.client = null;

exports.send_raw_msg = (channelID, message, time = 0) => {
  exports.client.channels.get(channelID).send(message)
    .then((m) => (time > 0) ? m.delete(time) : null)
    .catch(console.error);
};

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

exports.file_exists = (dir, file) => {
  return fs.readdirSync(dir).filter(f => f.toLowerCase() == file.toLowerCase()).length > 0;
};
