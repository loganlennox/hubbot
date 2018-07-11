const util = include("/utilities.js");

exports.execute = (input, args) => {
  if (args.length == 1 ||
      !util.file_exists(abs_path(`/commands/${args[0].toLowerCase()}/`), `${args[1]}.js`)) {
    util.send_err_msg(input.channel.id, "Insufficient number of arguments provided.", 10000);
    input.delete().catch(console.error);
    return;
  }

  include(`/commands/${args[0].toLowerCase()}/${args[1]}.js`).execute(input, args);
};
