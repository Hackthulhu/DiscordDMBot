const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let question = args.slice(0).join(" ");
  if (args.length === 0){
    return message.reply('**Invalid Format:** `'+config.prefex+'Poll <Question>`')
  }
  const embed = new Discord.RichEmbed()
    .setTitle("A Poll Has Been Started!")
    .setColor("#5599ff")
    .setDescription(`${question}`)
    .setFooter(`Poll Started By: ${message.author.username}`, `${message.author.avatarURL}`)

  message.channel.send({embed})
  message.react('👍')
  .then(() => message.react('👎'))
  .then(() => message.react('🤷'))
  .catch(() => console.error('Emoji failed to react.'));

}
