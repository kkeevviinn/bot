const Discord = require('discord.js')
const config = require('../../botconfig.json')

module.exports.run = async(bot, message, args) => {
    let announcement = args.join(" ")
    if(!(message.member.roles.has('500808237038174247') || message.member.roles.has('539450962423709696') || message.guild.name === 'JusticeCommunityRP - Development'))
    {
        message.author.send("**You need the `Director or Lead Administrator` role to be able to use the **`" + config.prefix + module.exports.help.name + "` **command.**")
    }
    else
    {
        if(!(message.channel.name === 'jcrp-member_announcements' || message.guild.name === 'JusticeCommunityRP - Development'))
        {
            message.author.send("You need to use this command in channel `jcrp-member_announcements`")
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
                .setAuthor("Server Announcement from " + message.author.username, message.author.avatarURL)
                .setDescription("\n" + announcement)
                .setFooter("Server Management - Respond to this announcement in #jcrp-member_chat", 'https://i.imgur.com/AptoaoJ.png')
                .setTimestamp()
                .setColor("#c2f1ff")

                message.channel.send(embed)
            }
        }            
    }
    message.delete().catch(O_o => {});
}

module.exports.help = {
    name: "vm-announce"
}