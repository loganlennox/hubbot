const Discord = require("discord.js");

const util = include("/utilities.js");

const config = include("/config.json");

exports.execute = (input, args) => {
  if (input.mentions.everyone) return;

  let user = input.mentions.members.first();
  user = (user !== undefined) ? user : input.member;

  const username = `${user.user.username}#${user.user.discriminator}`;
  const stat = user.presence.status;
  const id = user.id;
  const joined = new Date(user.user.createdTimestamp);
  const joined_server = new Date(user.joinedTimestamp);
  const highest_role = user.highestRole;
  const avatar = user.user.displayAvatarURL;

  let embed = new Discord.RichEmbed()
    .setColor(config.baseColor)
    .setAuthor(username, avatar)
    .setThumbnail(avatar)
    .addField("User ID", id)
    .addField("Joined Discord", util.format_date(joined), true)
    .addField("Joined Server", util.format_date(joined_server), true)
    .addField("Highest Role", highest_role)
    .setDescription(`${user} is **${stat}**`);

  util.send_custom_msg(input.channel.id, embed);
};
