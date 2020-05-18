const Discord = require('discord.js')

let config = require('../../botconfig.json')

module.exports.run = async(bot, message, args) => {
    let donator = message.guild.member(message.mentions.users.first()) || message.guild.members.get(message.guild.members.get(args[0]))
    let donor = args[1]
    let vip_channel = message.guild.channels.find('name', 'jcrp-vip')   

    if (!(message.member.roles.has('539450716629106698'))) return message.reply("you are not allowed to use that command.")
    if (!donator) return message.reply("I could not find that user.")
    if (!donor) return message.reply("you need to state a department.")
    
    if (donor.toUpperCase() === "VIP1")
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("Thank you for your donation! [VIP1]")
        .setDescription(donator + ", thank you for your contribution to the community! Without donators like yourself, this server would not be where it is today. Thank you, and enjoy your perks!")
        .setFooter(message.guild.name + " | discourse.jcrpweb.com", 'https://i.imgur.com/AptoaoJ.png')
        .setTimestamp()
        .setColor("#c2f1ff")

        vip_channel.send(embed)

        donator.addRole('539465090278096911')
    } else if (donor.toUpperCase() === "VIP2")
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("Thank you for your donation! [VIP2]")
        .setDescription(donator + ", thank you for your contribution to the community! Without donators like yourself, this server would not be where it is today. Thank you, and enjoy your perks!")
        .setFooter(message.guild.name + " | discourse.jcrpweb.com", 'https://i.imgur.com/AptoaoJ.png')
        .setTimestamp()
        .setColor("#c2f1ff")

        vip_channel.send(embed)

        donator.addRole('539465091154968618')
    } else if (donor.toUpperCase() === "VIP3")
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("Thank you for your donation! [VIP3]")
        .setDescription(donator + ", thank you for your contribution to the community! Without donators like yourself, this server would not be where it is today. Thank you, and enjoy your perks!")
        .setFooter(message.guild.name + " | discourse.jcrpweb.com", 'https://i.imgur.com/AptoaoJ.png')
        .setTimestamp()
        .setColor("#c2f1ff")

        vip_channel.send(embed)

        donator.addRole('539480386351136778')
    } else if (donor.toUpperCase() === "DLC1")
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("Thank you for your donation! [DLC1]")
        .setDescription(donator + ", thank you for your contribution to the community! Without donators like yourself, this server would not be where it is today. Thank you, and enjoy your perks!")
        .setFooter(message.guild.name + " | discourse.jcrpweb.com", 'https://i.imgur.com/AptoaoJ.png')
        .setTimestamp()
        .setColor("#c2f1ff")

        vip_channel.send(embed)

        donator.addRole('539463570639945738')
    } else if (donor.toUpperCase() === "DLC2")
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("Thank you for your donation! [DLC2]")
        .setDescription(donator + ", thank you for your contribution to the community! Without donators like yourself, this server would not be where it is today. Thank you, and enjoy your perks!")
        .setFooter(message.guild.name + " | discourse.jcrpweb.com", 'https://i.imgur.com/AptoaoJ.png')
        .setTimestamp()
        .setColor("#c2f1ff")

        vip_channel.send(embed)

        donator.addRole('539463571738984449')
    } else if (donor.toUpperCase() === "DLC3")
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("Thank you for your donation! [DLC3]")
        .setDescription(donator + ", thank you for your contribution to the community! Without donators like yourself, this server would not be where it is today. Thank you, and enjoy your perks!")
        .setFooter(message.guild.name + " | discourse.jcrpweb.com", 'https://i.imgur.com/AptoaoJ.png')
        .setTimestamp()
        .setColor("#c2f1ff")

        vip_channel.send(embed)

        donator.addRole('539463572397490176')
    } else return message.reply("that is not a valid department.")

    message.delete().catch(O_o => {})
}

module.exports.help = {
    name: "dproof"
}