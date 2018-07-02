const Discord = require("discord.js");

const config = require("./config.json");

const util = require("./utilities.js");
const input = require("./input.js");
const aloha = require("./aloha.js");

const client = new Discord.Client();

util.client = client;

client.on("ready", () => {
  client.user.setActivity("%help");
  console.log("Roprogram is online!");
});

client.on("message", (msg) => input.routeInput(msg));

client.on("guildMemberAdd", (member) => {
  let embed = new Discord.RichEmbed()
    .setTitle(":wave: :wave:")
    .setDescription(aloha.hellotxt(member))
    .setTimestamp()
    .setColor(config.baseColor);
  util.send_custom_msg(config.homeChannel, embed, 15000);
});

client.on("guildMemberRemove", (member) => {
  let embed = new Discord.RichEmbed()
    .setTitle(":wave: :wave:")
    .setDescription(aloha.goodbyetxt(member))
    .setTimestamp()
    .setColor(config.baseColor);
  util.send_custom_msg(config.homeChannel, embed, 15000);
});

client.login(config.token);
