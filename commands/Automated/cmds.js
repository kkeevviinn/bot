const Discord = require("discord.js");
const config  = require("../../botconfig.json");

module.exports.run = async (bot, message) => {
    let botembed = new Discord.RichEmbed()
        .setDescription(`JusticeCommunityRP Bot`)
        .addField("Prefix", '`' + config.prefix + '`')
        .setColor("#00fff2")
        .addField("General", "**report** - Rapportera en medlem till våra staffs. Hur du gör: `;report [@user] [anledning]`. \n **botinfo** - returns information about FaxBot \n")
        .addField("Misc", "**ping** - returns the bots ping \n **uptime** - Returns the bots uptime \n")
        .addField("Moderation", "**clear** - raderar den summa medelanden specifierade \n **ban** - Banlys en medlem \n **kick** - sparka en medlem \n **tempmute** - mute a user temporary \n **addrole** - give a role to a user \n **removerole** - remove a role from a user \n **say** - make the bot say a message \n")
        .addField("Notice", "This bot is still in development by myself, there will be bugs and if there is then use <#471428670607589386> to report them.")

    message.channel.send(botembed);
}

module.exports.help = {
    name: "cmds"
}