const Discord = require('discord.js')
const config = require('../../botconfig.json')

module.exports.run = async(bot, message, args) => {
    let announcement = args.join(" ")
    if(!(message.channel.name === 'jcrp-lsfd_announcements' || message.guild.name === 'JusticeCommunityRP - Development'))
    {
        message.author.send("You need to use this command in channel `jcrp-lsfd_announcements`")
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
            .setAuthor("Los Santos Fire Department Announcement from " + message.author.username, message.author.avatarURL)
            .setDescription("\n" + announcement)
            .setFooter("Los Santos Fire Department - Administration", 'https://i.imgur.com/HXYzusm.png')
            .setTimestamp()
            .setColor("#f6a8ff")

            message.channel.send(embed)
        }
    }
    message.delete().catch(O_o => {});
}

module.exports.help = {
    name: "lsfd-announce"
}