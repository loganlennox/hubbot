const censor = require("./res/censor.json");

exports.routeInput = (msg) => {
 if (exports.isExplicit(msg)) {
   // Delete message
   return;
 }

  // 2 - Check if message is command

  // 3 - Check if message is trigger

  console.log(`"${msg}" is a normal message.`);
};

exports.isExplicit = (input) => {
  for (let w of censor.badwords) {
    let re = new RegExp(w, "gi");

    if (re.exec(input) != null) {
      return true;
    }
  }

  return false;
};
