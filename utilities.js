const fs = require("fs");

const Discord = require("discord.js")

const config = include("/config.json")

exports.client = null;

exports.format_date = (date) => {
  const year = date.getFullYear();

  let month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;

  let day = date.getDate().toString();
  day = day.length > 1 ? day : "0" + day;

  return `${month}-${day}-${year}`;
};

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

exports.send_err_msg = (channelID, message, time = 0) => {
  let embed = new Discord.RichEmbed()
    .setColor(config.errColor)
    .setTitle("Error")
    .setDescription(message);

  exports.client.channels.get(channelID).send(embed)
    .then((m) => (time > 0) ? m.delete(time) : null)
    .catch(console.error);
};

exports.file_exists = (dir, file) => {
  return fs.readdirSync(dir).filter(f => f.toLowerCase() == file.toLowerCase()).length > 0;
};

exports.is_admin = (member) => member.hasPermission("ADMINISTRATOR");
