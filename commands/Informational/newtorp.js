const Discord = require('discord.js')
const config = require('../../botconfig.json')

module.exports.run = async(bot, message, args) => {
    let announcement = args.join(" ")
    if(!(message.member.roles.has('647915647463981061') || message.member.roles.has('647915602757025802') || message.guild.name === 'JusticeCommunityRP - Development'))
    {
        message.author.send("**You need the `Lead Administrator` or `Director` role to be able to use the **`" + config.prefix + module.exports.help.name + "` **command.**")
    }
    else
    {
        if(!(message.channel.name === 'jcrp-information' || message.guild.name === 'JusticeCommunityRP - Development'))
        {
            try {
                await message.author.send("You need to use this command in channel `jcrp-information`")
                // await message.author.send("Here's the message incase you forgot to save it: \n`" + announcement + "`")
            } catch(error) {
                console.log("Tried DMing user [ " + message.author.username + " ], failed - DMs are disabled.")
            }
            
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
                .setAuthor("New to Roleplay? Click here.")
                .setDescription("\n" + announcement)
                .setFooter("Justice Community Roleplay | jcrp.net", 'https://i.imgur.com/ODI3OLT.png')
                .setTimestamp()
                .setColor("#9AE7FF")

                message.channel.send(embed)
            }
        }            
    }
    message.delete().catch(O_o => {});
}

module.exports.help = {
    name: "newtorp"
}