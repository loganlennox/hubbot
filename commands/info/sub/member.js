const Discord = require("discord.js");

const util = include("/utilities.js");

const config = include("/config.json");

const format_userdata = (atrbs) => {
  let output = "";

  for (let d of atrbs) output += `:small_orange_diamond: **${d[0]}:** ${d[1]}\n`;

  return output;
};

exports.execute = (input, args, opts) => {
  if (input.mentions.everyone) return;

  let user = input.mentions.members.first();
  user = (user !== undefined) ? user : input.member;

  const username = `${user.user.username}#${user.user.discriminator}`;

  const attributes = [
    ["User ID", user.id],
    ["Join Date", util.format_date(user.joinedAt)],
    ["Account Created", util.format_date(user.user.createdAt)],
    ["Color", user.displayHexColor],
    ["Playing", user.presence.game ? user.presence.game.name : "nothing"],
    ["Status", user.presence.status],
    ["Role Count", user.roles.array().length],
    ["Highest Role", user.highestRole.name],
  ];

  let embed = new Discord.RichEmbed()
    .setColor(config.baseColor)
    .setAuthor(username, user.user.displayAvatarURL)
    .setThumbnail(user.user.displayAvatarURL)
    .setDescription(format_userdata(attributes));

  util.send_custom_msg(input.channel.id, embed);
};
