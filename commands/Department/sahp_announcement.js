const Discord = require('discord.js')
const config = require('../../botconfig.json')

module.exports.run = async(bot, message, args) => {
    let announcement = args.join(" ")
    if(!(message.channel.name === 'jcrp-sahp_announcements' || message.guild.name === 'JusticeCommunityRP - Development'))
    {
        message.author.send("You need to use this command in channel `jcrp-sahp_announcements`")
    }
    else
    {
        if (!args[0]) // checking if args[0] is _only_ given
        {
            message.author.send("Invalid amount of arguments used in command `" + config.prefix + module.exports.help.name + "`.")
        }
        else
        {
            let embed = new Discord.RichEmbed()
            .setAuthor("San Andreas Highway Patrol Announcement from " + message.author.username, message.author.avatarURL)
            .setDescription("\n" + announcement)
            .setFooter("San Andreas Highway Patrol - Administration", 'https://i.imgur.com/32GKJrY.png')
            .setTimestamp()
            .setColor("#f7fd92")

            message.channel.send(embed)
        }
    }
    message.delete().catch(O_o => {});
}

module.exports.help = {
    name: "sahp-announce"
}