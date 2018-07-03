const fs = require("fs");

const config = require("../config.json");

exports.handleCommand = (input) => {
  if (!exports.isCommand(input)) {
    return false;
  }

  const cmdName = input.toString().toLowerCase().substring(1).split(" ")[0];
  const command = require(`./${cmdName}/main.js`);

  command.execute(input.toString().toLowerCase().split(" "));

  return true;
};

exports.isCommand = (input) => {
  let isCommand = false;
  const cmd = input.toString().toLowerCase().substring(1).split(" ")[0];

  fs.readdirSync("./commands/").forEach(file => {
    if (file == cmd) {
      isCommand = true;
    }
  });

  return isCommand;
};
