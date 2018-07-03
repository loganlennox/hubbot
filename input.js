const commands = require("./commands/main.js");

const censor = require("./res/censor.json");

// determine what the input is and what actions should be taken
exports.routeInput = (msg) => {
  if (exports.isExplicit(msg)) {
    msg.delete()
      .then(m => console.log(`Deleted message from ${m.author.username}`))
      .catch(console.error);
    return;
  }

  if (commands.handleCommand(msg)) return;

  // 3 - Check if message is trigger
};

// determine if the input contains any of the specified explicit words
exports.isExplicit = (input) => {
  let re;

  for (let w of censor.badwords) {
    re = new RegExp(w, "gi");

    if (re.exec(input.toString()) != null) return true;
  }

  return false;
};
