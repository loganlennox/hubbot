const Discord = require("discord.js");

const util = include("/utilities.js");

const config = include("/config.json");

exports.execute = (input, args) => {
  if (input.mentions.everyone) return;

  let user = input.mentions.members.first();
  user = (user !== undefined) ? user.user : input.author;

  let embed = new Discord.RichEmbed()
    .setColor(config.baseColor)
    .setImage(user.displayAvatarURL);

  util.send_custom_msg(input.channel.id, embed);
};
