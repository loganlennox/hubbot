const Discord = require("discord.js")

const config = require("./config.json")

const client = new Discord.Client();

client.on("ready", () => {
  console.log("Roprogram is online!");
});

client.login(config.token);
