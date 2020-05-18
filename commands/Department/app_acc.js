const Discord = require('discord.js')

let config = require('../../botconfig.json')

module.exports.run = async(bot, message, args) => {
    let applicant = message.guild.member(message.mentions.users.first()) || message.guild.members.get(message.guild.members.get(args[0]))
    let dept = args[1]

    if (!(message.member.roles.has('647915618699313202') || message.member.roles.has('647915617965309963'))) return message.reply("you are not allowed to use that command.")
    if (!applicant) return message.reply("I could not find that user.")
    if (!dept) return message.reply("you need to state a department.")

    if (dept.toUpperCase() === "SAHP")
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
        .setDescription(applicant + ", thank you for applying for the San Andreas Highway Patrol. We would like to inform you that your application has been accepted! To receive your training and interview message a member of the community with the SAHP - FTO role and show proof of your application acceptance. After, you will be able to proceed with your interview and training. If you have any further questions feel free to message an FTO on the discord or forums!")
        .setFooter("SAHP Department FTO", "https://i.imgur.com/mVLhtCc.png")
        .setTimestamp()
        .setColor("#c2f1ff")

        message.channel.send(embed)

        applicant.addRole('539653596908748810')
    } else if (dept.toUpperCase() === "LSSD")
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
        .setDescription(applicant + ", thank you for applying for the Los Santos Sheriff's Department. We would like to inform you that your application has been accepted! To receive your training and interview message a member of the community with the LSSD - FTO role and show proof of your application acceptance. After, you will be able to proceed with your interview and training. If you have any further questions feel free to message an FTO on the discord or forums!")
        .setFooter("LSSD Department FTO", "https://i.imgur.com/tLIylue.png")
        .setTimestamp()
        .setColor("#c2f1ff")

        message.channel.send(embed)

        applicant.addRole('539653565686218762')
    } else if (dept.toUpperCase() === "LSPD")
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
        .setDescription(applicant + ", thank you for applying for the Los Santos Police Department. We would like to inform you that your application has been accepted! To receive your training and interview message a member of the community with the LSPD - FTO role and show proof of your application acceptance. After, you will be able to proceed with your interview and training. If you have any further questions feel free to message an FTO on the discord or forums!")
        .setFooter("LSPD Department FTO", "https://i.imgur.com/ft1nx3f.png")
        .setTimestamp()
        .setColor("#c2f1ff")

        message.channel.send(embed)

        applicant.addRole('539653409243004938')
    } else if (dept.toUpperCase() === "LSFD")
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
        .setDescription(applicant + ", thank you for applying for the Los Santos Fire Department. We would like to inform you that your application has been accepted! To receive your training and interview message a member of the community with the LSFD - FTO role and show proof of your application acceptance. After, you will be able to proceed with your interview and training. If you have any further questions feel free to message an FTO on the discord or forums!")
        .setFooter("LSFD Department FTO", "https://i.imgur.com/HXYzusm.png")
        .setTimestamp()
        .setColor("#f6a8ff")

        message.channel.send(embed)

        applicant.addRole('539653626105167873')
    } else if (dept.toUpperCase() === "SACD")
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
        .setDescription(applicant + ", thank you for applying for the San Andreas Communications Department. We would like to inform you that your application has been accepted! To receive your training and interview message a member of the community with the SACD - FTO role and show proof of your application acceptance. After, you will be able to proceed with your interview and training. If you have any further questions feel free to message an FTO on the discord or forums!")
        .setFooter("SACD Department FTO", "https://i.imgur.com/U5EHyKR.png")
        .setTimestamp()
        .setColor("#ff9c9d")

        message.channel.send(embed)

        applicant.addRole('539653706228957184')
    } else return message.reply("that is not a valid department.")

    message.delete().catch(O_o => {})
}

module.exports.help = {
    name: 'appacc'
}
