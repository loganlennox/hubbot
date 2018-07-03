const fs = require("fs");

const config = require("../config.json");

exports.handleCommand = (input) => {
  const cmd = input.toString().toLowerCase().substring(1).split(" ");

  if (!fs.readdirSync("./commands/").filter(f => f == cmd[0]).length > 0)
    return false;

  const command = require(`./${cmd[0]}/main.js`);

  command.execute(cmd);

  return true;
};

