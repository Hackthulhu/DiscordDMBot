const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const sql = require("sqlite");
sql.open("./score.sqlite");
const enmap = require('enmap');

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {

  if (message.author.bot) return; // Ignore bots.
  if (message.channel.type === "dm") return; // Ignore DM channels.

  if (!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length, message.content.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

//Table command
  if (command === "table"){
    if(args [0] === "help"){
      message.channel.send("The table function takes in a new JSON object representing a table for the DM to be able to randomize, see <URL> for JSON structure");
    } else {
      if (!message.attachments){
        message.channel.send("Please attach a JSON object representing your table see <URL> for structure");
        return;
      }
    }
  };
//Roll Command, Needs refactoring into a Roll function that can be called on other commands, but want to keep its results creation
  if (command === "roll"){
    if (args[0] === "help"){
      message.channel.send("outputs the result of a roll function, for example roll 2d8 gives you 2d8 roll 1d6+1d7 gives you the sum of a d6 and a d7");
    } else {
      var diceCodes = args[0].split("+");
      var result = 0;
      var msg = ""
      diceCodes.forEach(function(i){
        var die = i.split("d");
        msg += i + " Results: ("
        for (j=0; j < die[0]; j++){
          var subval = 0;
          subval = Math.floor(Math.random() * die[1]) + 1;
          if (j === die[0] - 1) {msg += subval} else {msg += subval +", "};
          result += subval;
        };
        msg += ") "
      })
      message.channel.send(msg + "Total: "+ result);
    }
  }



  if (command.startsWith("ping")) {
    message.channel.send("pong!");
  }

});

client.login(config.token);
