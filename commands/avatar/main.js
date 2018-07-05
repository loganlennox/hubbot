const util = include("/utilities.js");

exports.execute = (input, args) => {
  if (input.mentions.everyone) return;

  let user = input.mentions.members.first();
  user = (user !== undefined) ? user.user : input.author;

  const avatarid = `${user.id}/${user.avatar}.png?size=1024`;
  const avatarurl = "https://cdn.discordapp.com/avatars/" + avatarid;

  util.send_raw_msg(input.channel.id, avatarurl);
};
