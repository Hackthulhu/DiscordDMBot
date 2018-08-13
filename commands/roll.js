exports.run = (client, message, args) => {

  if (args[0] === "help"){
    message.channel.send("outputs the result of a roll function, for example roll 2d8 gives you 2d8 roll 1d6+1d7 gives you the sum of a d6 and a d7");}
  else {
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
