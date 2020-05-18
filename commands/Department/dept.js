const Discord = require('discord.js')

let config = require('../../botconfig.json')
let prefix = config.prefix

module.exports.run = async(bot, message, args) => {
    let applicant = message.guild.member(message.mentions.users.first()) || message.guild.members.get(message.guild.members.get(args[0]))
    let dept = args[1]
    
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
        .setDescription(applicant + " has passed their SAHP training and has been given SAHP department roles. Give them a warm welcome!")
        .setFooter("SAHP Department FTO", "https://i.imgur.com/mVLhtCc.png")
        .setTimestamp()
        .setColor("#c2f1ff")

        sahp_channel.send(embed)

        applicant.addRole('647915619538305046') /* Law Enforcement */
        applicant.addRole('647915620268113922') /* First Responders */
        applicant.addRole('647915685804245018') /* SAHP Officer */
        applicant.addRole('647915688929001485') /* San Andreas Highway Patrol */

        applicant.removeRole('647915744528564243') /* SAHP Training Academy */
    } else if (dept.toUpperCase() === "LSSD") 
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
        .setDescription(applicant + " has passed their LSSD training and has been given LSSD department roles. Give them a warm welcome!")
        .setFooter("LSSD Department FTO", "https://i.imgur.com/tLIylue.png")
        .setTimestamp()
        .setColor("#c2f1ff")

        lssd_channel.send(embed)

        applicant.addRole('647915619538305046') /* Law Enforcement */
        applicant.addRole('647915620268113922') /* First Responders */
        applicant.addRole('647915663582822400') /* LSSD Probationary Deputy */
        applicant.addRole('647915672508301312') /* Los Santos Sheriff's Department */

        applicant.removeRole('647915743417073704') /* LSSD Training Academy */
    } else if (dept.toUpperCase() === "LSPD") 
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
        .setDescription(applicant + " has passed their LSPD training and has been given LSPD department roles. Give them a warm welcome!")
        .setFooter("LSPD Department FTO", "https://i.imgur.com/ft1nx3f.png")
        .setTimestamp()
        .setColor("#c2f1ff")

        lspd_channel.send(embed)

        applicant.addRole('647915619538305046') /* Law Enforcement */
        applicant.addRole('647915620268113922') /* First Responders */
        applicant.addRole('647915644452470806') /* LSPD Officer */
        applicant.addRole('647915647463981061') /* Los Santos Police Department */

        applicant.removeRole('647915742150393877') /* LSPD Training Academy */
        
    } else if (dept.toUpperCase() === "LSFD") 
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
        .setDescription(applicant + " has passed their LSFD training and has been given LSFD department roles. Give them a warm welcome!")
        .setFooter("LSFD Department FTO", "https://i.imgur.com/HXYzusm.png")
        .setTimestamp()
        .setColor("#f6a8ff")

        lsfd_channel.send(embed)

        applicant.addRole('647915620268113922') /* First Responders */
        applicant.addRole('647915700438171660') /* LSFD Firefighter*/
        applicant.addRole('647915706062471178') /* Los Santos Fire Department */

        applicant.removeRole('647915745325613062') /* LSFD Training Academy */

    } else if (dept.toUpperCase() === "SACD") 
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
        .setDescription(applicant + " has passed their SACD training and has been given SACD department roles. Give them a warm welcome!")
        .setFooter("SACD Department FTO", "https://i.imgur.com/U5EHyKR.png")
        .setTimestamp()
        .setColor("#ff9c9d")

        sacd_channel.send(embed)

        applicant.addRole('647915620268113922') /* First Responders */
        applicant.addRole('647915717420777473') /* SACD  Probationary Dispatch Operator*/
        applicant.addRole('647915720281423892') /* San Andreas Communications Department */

        applicant.removeRole('647915745816084489') /* SACD Training Academy */

    } else return message.reply("that is not a valid department.")

    message.delete().catch(O_o => {})

    

}

module.exports.help = {
    name: 'dept'
}