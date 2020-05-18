const Discord = require('discord.js')
const config = require('../../botconfig.json')
const prefix = config.prefix

module.exports.run = async(bot, message, args) => {
    let user_s = message.author;
    let user_t = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]) // target
    let main_channel = message.guild.channels.find('name', 'jcrp-main')
    if (message.member.roles.has('647915602757025802') || message.member.roles.has('647915601964040211') || message.guild.name === 'JusticeCommunityRP - Development')
    {
        if (user_t)
        {
            let embed = new Discord.RichEmbed()
            .setAuthor("General Announcement", message.author.avatarURL)
            .setDescription(":tada::tada::tada:\n\nThank you " + user_t + " you have been assigned Junior Administrator by Director " + user_s.username + "\n\nWe appreciate all the hard work you have been putting in on the server and we believe that you deserve this staff position. \n\n:tada::tada::tada:")
            .setFooter("Server Directorate - " + user_s.username, 'https://i.imgur.com/AptoaoJ.png')
            .setTimestamp()
            .setColor("#c2f1ff")

            if (message.guild.name !== 'JusticeCommunityRP - Development')
            {
                user_t.addRole('539450716629106698') /*Staff Team*/
                user_t.addRole('539450777882591247') /*Staff Team*/
            }

            main_channel.send(embed)
        }
        else
        {
            message.channel.send(user_s + ", incorrect usage. `" + prefix + module.exports.help.name + " user`. I could not find that user.")
        }
    }  
    else
    {
        message.channel.send(user_s + ", you do not have permission to use that command.")
    }

    message.delete().catch(O_o => {})
}

module.exports.help = {
    name: 'jadmin'
}