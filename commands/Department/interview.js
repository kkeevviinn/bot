const Discord = require('discord.js')

let config = require('../../botconfig.json')
let prefix = config.prefix

module.exports.run = async(bot, message, args) => {
    let applicant = message.guild.member(message.mentions.users.first()) || message.guild.members.get(message.guild.members.get(args[0]))
    let dept = args[1]
    
    let main_channel = message.guild.channels.find('name', 'jcrp-main')
    let sahp_channel = message.guild.channels.find('name', 'jcrp-sahp')
    let lssd_channel = message.guild.channels.find('name', 'jcrp-lssd')
    let lspd_channel = message.guild.channels.find('name', 'jcrp-lspd')
    let lsfd_channel = message.guild.channels.find('name', 'jcrp-lsfd')  
    let sacd_channel = message.guild.channels.find('name', 'jcrp-sacd')    

    if (!(message.member.roles.has('647915618699313202')/* LEO/FIRE SUPERVISOR/FTO */ || message.member.roles.has('647915617965309963'/* LEO/FIRE COMMAND STAFF */))) return message.reply("you are not allowed to use that command.")
    if (!applicant || applicant === null || applicant === undefined) return message.reply("I could not find that user.")
    if (!dept) return message.reply("you need to state a department.")

    if (dept.toUpperCase() == "SAHP") 
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
        .setDescription(applicant + " has passed their SAHP interview and has been given SAHP Training Academy tags. They'll be apart of the department soon!")
        .setFooter("SAHP Department FTO", "https://i.imgur.com/mVLhtCc.png")
        .setTimestamp()
        .setColor("#c2f1ff")

        sahp_channel.send(embed)

        applicant.addRole('647915744528564243') /* SAHP Training Academy */
        applicant.removeRole('647915750547521589') /* SAHP Interview */
    } else if (dept.toUpperCase() === "LSSD") 
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
        .setDescription(applicant + " has passed their LSSD interview and has been given LSSD Training Academy tags. They'll be apart of the department soon!")
        .setFooter("LSSD Department FTO", "https://i.imgur.com/tLIylue.png")
        .setTimestamp()
        .setColor("#c2f1ff")

        lssd_channel.send(embed)

        applicant.addRole('647915743417073704') /* LSSD Training Academy */
        applicant.removeRole('647915748769136660') /* LSSD Interview */
    } else if (dept.toUpperCase() === "LSPD") 
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
        .setDescription(applicant + " has passed their LSPD interview and has been given LSPD Training Academy tags. They'll be apart of the department soon!")
        .setFooter("LSPD Department FTO", "https://i.imgur.com/ft1nx3f.png")
        .setTimestamp()
        .setColor("#c2f1ff")

        lspd_channel.send(embed)

        applicant.addRole('647915748051648523') /* LSPD Training Academy */
        applicant.removeRole('647915748051648523') /* LSPD Interview */
        
    } else if (dept.toUpperCase() === "LSFD") 
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
        .setDescription(applicant + " has passed their LSFD interview and has been given LSFD Training Academy tags. They'll be apart of the department soon!")
        .setFooter("LSFD Department FTO", "https://i.imgur.com/HXYzusm.png")
        .setTimestamp()
        .setColor("#f6a8ff")

        lsfd_channel.send(embed)

        applicant.addRole('647915752158134286') /* LSFD Training Academy */
        applicant.removeRole('647915752158134286') /* LSFD Interviewy */

    } else if (dept.toUpperCase() === "SACD") 
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
        .setDescription(applicant + " has passed their SACD interview and has been given SACD Training Academy tags. They'll be apart of the department soon!")
        .setFooter("SACD Department FTO", "https://i.imgur.com/U5EHyKR.png")
        .setTimestamp()
        .setColor("#ff9c9d")

        sacd_channel.send(embed)

        applicant.addRole('647915752745074700') /* SACD Training Academy */
        applicant.removeRole('647915752745074700') /* SACD Interview */

    } else return message.reply("that is not a valid department.")

    message.delete().catch(O_o => {})

    

}

module.exports.help = {
    name: 'training'
}