const util = include("/utilities.js");

exports.execute = (input, args) => {
  const time = Math.round(util.client.ping);
  util.send_msg(input.channel.id, `Pong! Took me ${time}ms to respond!`);
};
