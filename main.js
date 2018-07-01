const Discord = require("discord.js")

const config = require("./config.json")
const util = require("./utilities.js")

const client = new Discord.Client();

util.client = client;

client.on("ready", () => {
  client.user.setActivity("%help")
  console.log("Roprogram is online!");
});

client.on("guildMemberAdd", (member) => {
  util.send_msg(config.homeChannel, `Hello there, ${member}`, 15000);
});

client.on("guildMemberRemove", (member) => {
  util.send_msg(config.homeChannel, `Goodbye, ${member}`, 15000);
});

client.login(config.token);
