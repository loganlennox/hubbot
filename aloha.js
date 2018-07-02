const aloha = require("./res/aloha.json");

exports.hellotxt = (n) => {
  msg = aloha.hellotxt[Math.floor(Math.random() * aloha.hellotxt.length)];
  return `${msg}, ${n}`;
};

exports.goodbyetxt = (n) => {
  msg = aloha.goodbyetxt[Math.floor(Math.random() * aloha.goodbyetxt.length)];
  return `${msg}, ${n}`;
};
