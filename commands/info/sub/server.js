const Discord = require("discord.js");

const util = include("/utilities.js");

const config = include("/config.json");

exports.execute = (input, args, opts) => {
  const guild = input.member.guild;

  let embed = new Discord.RichEmbed()
    .setColor(config.baseColor)
    .setAuthor(guild.name, guild.iconURL)
    .setThumbnail(guild.iconURL)
    .addField("Server ID", guild.id)
    .addField("Created At", util.format_date(guild.createdAt))
    .addField("Member Count", guild.memberCount, true)
    .addField("Role Count", guild.roles.array().length, true)
    .setDescription(`Owned by ${guild.owner}`);

  util.send_custom_msg(input.channel.id, embed);
};
