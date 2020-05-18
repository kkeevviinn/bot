const Discord = require('discord.js')
const config = require('../../botconfig.json')

module.exports.run = async(bot, message, args) => {
    let announcement = args.join(" ")
    if(!(message.member.roles.has('647915647463981061') || message.member.roles.has('647915602757025802')))
    {
        message.author.send("**You need the `Director or Lead Administrator` role to be able to use the **`" + config.prefix + module.exports.help.name + "` **command.**")
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
            .setFooter(message.guild.name + " | discourse.jcrpweb.com", 'https://i.imgur.com/AptoaoJ.png')
            .setTimestamp()
            .setColor("#9ae7ff")

            message.channel.send(embed)
        }
    }
    message.delete().catch(O_o => {});
}

module.exports.help = {
    name: "announcea"
}