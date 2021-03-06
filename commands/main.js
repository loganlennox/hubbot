const fs = require("fs");
const util = include("/utilities.js");
const config = include("/config.json");

const hasSub = (cmd) => util.file_exists(abs_path(`/commands/${cmd[0]}/sub/`),
  `${cmd[1]}.js`);

exports.handleCommand = (input) => {
  const cmd = input.toString().substring(1).split(" ");

  if (!util.file_exists(abs_path("/commands/"), cmd[0])) return false;

  if (util.file_exists(abs_path(`/commands/${cmd[0]}/`), "sub")) {
    if (cmd.length == 1 || !hasSub(cmd)) {
      util.send_err_msg(input.channel.id, "Insufficient or invalid arguments.");
      return false;
    }


    if (include(`/commands/${cmd[0]}/main.js`).execute(input, cmd)) {
      include(`/commands/${cmd[0]}/sub/${cmd[1]}.js`).execute(input, cmd);
      return true;
    } else {
      return false;
    }
  }

  include(`/commands/${cmd[0]}/main.js`).execute(input, cmd);
  return true;
};

