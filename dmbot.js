const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const sql = require("sqlite");
sql.open("./score.sqlite");

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
if (message.author.bot) return; // Ignore bots.
if (message.channel.type === "dm") return; // Ignore DM channels.
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login(config.token);
