global.base_dir = __dirname;
global.abs_path = (path) => base_dir + path;
global.include = (file) => require(abs_path("/" + file));

const Discord = require("discord.js");

const util = include("/utilities.js");
const input = include("/input.js");

const config = include("/config.json");
const aloha = include("/res/aloha.json");

const client = new Discord.Client();

util.client = client;

// set activity and print message on bot startup
client.on("ready", () => {
  client.user.setActivity("%help");
  console.log("HubBot is online!");
});

// send all messages to the input handler
client.on("message", (msg) => input.routeInput(msg));

// send welcome message to new members
client.on("guildMemberAdd", (member) => {
});

// send goodbye message to members who leave the guild
client.on("guildMemberRemove", (member) => {

});

// start the bot
client.login(config.token);
