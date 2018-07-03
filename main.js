const Discord = require("discord.js");

const util = require("./utilities.js");
const input = require("./input.js");

const config = require("./config.json");
const aloha = require("./res/aloha.json");

const client = new Discord.Client();

util.client = client;

// set activity and print message on bot startup
client.on("ready", () => {
  client.user.setActivity("%help");
  console.log("Roprogram is online!");
});

// send all messages to the input handler
client.on("message", (msg) => input.routeInput(msg));

// send welcome message to new members
client.on("guildMemberAdd", (member) => {
  const msg = aloha.hello[Math.floor(Math.random() * aloha.hello.length)];

  let embed = new Discord.RichEmbed()
    .setTitle(`:wave: ${msg}`)
    .setDescription(`Welcome to the server, ${member}`)
    .setColor(config.baseColor);

  util.send_custom_msg(config.homeChannel, embed, 15000);
});

// send goodbye message to members who leave the guild
client.on("guildMemberRemove", (member) => {
  const msg = aloha.bye[Math.floor(Math.random() * aloha.bye.length)];

  let embed = new Discord.RichEmbed()
    .setTitle(`:wave: Goodbye...`)
    .setDescription(`${msg}, ${member}`)
    .setColor(config.baseColor);

  util.send_custom_msg(config.homeChannel, embed, 15000);
});

// start the bot
client.login(config.token);
