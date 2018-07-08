const fs = require("fs");

const util = include("/utilities.js");

const config = include("/config.json");

// if the given input is a command, attempt to execute it
exports.handleCommand = (input) => {
  if (input.toString().charAt(0) !== config.cmdPrefix) return false;

  const cmd = input.toString().substring(1).split(" ");

  if (!util.file_exists(abs_path("/commands/"), cmd[0])) return false;

  include(`/commands/${cmd[0].toLowerCase()}/main.js`).execute(input, cmd);

  return true;
};

