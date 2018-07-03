const commands = require("./commands/main.js");

const censor = require("./res/censor.json");

exports.routeInput = (msg) => {
  if (exports.isExplicit(msg)) {
    msg.delete()
      .then(m => console.log(`Deleted message from ${m.author.username}`))
      .catch(console.error);
    return;
  }

  if (commands.handleCommand(msg)) {
    return;
  }


  // 3 - Check if message is trigger

  console.log(`"${msg}" is a normal message.`);
};

exports.isExplicit = (input) => {
  for (let w of censor.badwords) {
    let re = new RegExp(w, "gi");

    if (re.exec(input.toString()) != null) {
      return true;
    }
  }

  return false;
};
