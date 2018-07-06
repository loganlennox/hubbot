const fs = require("fs");

const config = include("/config.json");

// if the given input is a command, attempt to execute it
exports.handleCommand = (input) => {
  const cmd = input.toString().substring(1).split(" ");

  if (!fs.readdirSync(abs_path("/commands/")).filter(f => f == cmd[0].toLowerCase()).length > 0)
    return false;

  const command = include(`/commands/${cmd[0].toLowerCase()}/main.js`);

  command.execute(input, cmd);

  return true;
};

