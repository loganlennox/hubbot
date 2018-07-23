const Discord = require("discord.js");

const util = include("/utilities.js");

const config = include("/config.json");

exports.execute = (input, args) => {
  const guild = input.member.guild;

  let embed = new Discord.RichEmbed()
    .setColor(config.baseColor)
    .setAuthor(guild.name, guild.iconURL)
    .setThumbnail(guild.iconURL)
    .addField("Server ID", guild.id)
    .addField("Created At", util.format_date(guild.createdAt))
    .addField("Role Count", guild.roles.array().length, true)
    .addField("Member Count", guild.memberCount, true)
    .setDescription(`Owned by ${guild.owner}`);

  util.send_custom_msg(input.channel.id, embed);
};
