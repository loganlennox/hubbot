const util = include("/utilities.js");

exports.execute = (input, args) => {
  let time = Math.round((Date.now() - input.createdTimestamp) / 1000);

  util.send_msg(input.channel.id, `Pong! Took me ${time}ms to respond!`);
};
