const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
  
    let actmessage = args.join(" ");
  
    message.channel.send(actmessage);
    message.delete().catch(O_o => {});
}

module.exports.help = {
    name: "say"
}