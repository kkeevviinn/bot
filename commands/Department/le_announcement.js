const Discord = require('discord.js')
const config = require('../../botconfig.json')

module.exports.run = async(bot, message, args) => {
    let announcement = args.join(" ")
    if(!(message.channel.name === 'jcrp-law_enforcement_info' || message.channel.name === 'jcrp-law_enforcement_announcements' || message.guild.name === 'JusticeCommunityRP - Development'))
    {
        message.author.send("You need to use this command in channel `jcrp-law_enforcement_info`")
        message.author.send("Here's the message incase you forgot to save it: \n`" + announcement + "`")
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
            .setAuthor("Law Enforcement Announcement from " + message.author.username, message.author.avatarURL)
            .setDescription("\n" + announcement)
            .setFooter("Server Administration", 'https://i.imgur.com/AptoaoJ.png')
            .setTimestamp()
            .setColor("#c2f1ff")

            message.channel.send(embed)
        }
    }            
    message.delete().catch(O_o => {});
}

module.exports.help = {
    name: "le-announce"
}