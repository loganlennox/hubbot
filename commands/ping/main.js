const util = include("/utilities.js");

exports.execute = (input, args) => {
  util.send_msg(input.channel.id, `Pong! Took me ${util.client.ping}ms to respond!`);
};
