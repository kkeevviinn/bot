const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

global.info =
{
    "authorid" : "608362769032675348",
    "authorname" : "Aaron B."
}

global.channels =
{
    "announcements" : "647915798970630165",
    "update" : "647915799343923215",
    "logs" : "647915908366336030",
    "main" : "647915803382906890",
    "offtopic" : "647915805232857113",
    "bots" : "647915810437726259",
    //"reports" : "539499788517900313",
    //"support" : "471428670607589386",
    //"devc" : "500035199183093771", // dev chat
    //"devi" : "500035221572550676", // dev ideas
    "vip" : "647915819732303884",
    "leinfo" : "647915831682007091",
    //"lecommand" : "420777683325288448",
    "ftochat" : "647915837826662400",

    "lspdan" : "647915840192249867",
    "lspd" : "647915840867532801",
    "lspdfto" : "647915843014885406",
    "lspdhc" : "647915845238128640",

    "lssdan" : "647915848190918667",
    "lssd" : "647915849142763542",
    "lssdfto" : "647915853328941077",
    "lssdlc" : "647915854570192936",
    "lssdhc" : "647915855312715795",

    "sahpan" : "647915856591847434",
    "sahp" : "647915857888149506",
    "sahpfto" : "647915859783974913",
    "sahphc" : "647915862682107904",

    "lsfdan" : "647915864200446005",
    "lsfd" : "647915865437634562",
    "lsfdfto" : "647915866662371358",
    "lsfdhc" : "647915868658860087"
}

global.roles =
{
    "sahpdept" : "647915688929001485",
    "sahpfto" : "647915688513765406",
    "sahpsrank" : "539446875397292032",
    "sahphighc" : "647915674013925406",

    "lspddept" : "647915647463981061",
    "lspdfto" : "647915646923046964",
    "lspdsrank" : "647915646297833472",
    "lspdhighc" : "647915626588930060",

    "lssddept" : "647915672508301312",
    "lssdfto" : "647915668162871306",
    "lssdsrank" : "647915658356457492",
    "lssdhighc" : "647915649716322355",

    "lsfddept" : "647915706062471178",
    "lsfdfto" : "647915704804180007",
    "lsfdsrank" : "647915703978164244",
    "lsfdhighc" : "647915690388619294",

    "director" : "647915647463981061",
    "intadmin" : "501076418399043604",
    "leadadmin" : "647915602757025802",
    "senioradmin" : "647915603692355598",
    "admin" : "647915604564770826",
    "junioradmin" : "647915605193916469",
    "staff" : "647915605562753035"
}

bot.commands = new Discord.Collection();
bot.ConfigCommands = new Discord.Collection();

fs.readdir("./commands/Automated", (err, files) => {
    if (err) console.log("ERROR: [ " + err + " ].");
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (jsFile.length <= 0) {
        console.log("ERROR: No automated commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Automated/${f}`);
        console.log(`Command [ ${f} ] loaded! [Automated]`)
        bot.commands.set(props.help.name, props)
    })
});

fs.readdir("./commands/Department", (err, files) => {
    if (err) console.log("ERROR: [ " + err + " ].");
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (jsFile.length <= 0) {
        console.log("ERROR: No department commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Department/${f}`);
        console.log(`Command [ ${f} ] loaded! [Department]`)
        bot.commands.set(props.help.name, props)
    })
});

fs.readdir("./commands/Miscellaneous", (err, files) => {
    if (err) console.log("ERROR: [ " + err + " ].");
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (jsFile.length <= 0) {
        console.log("ERROR: No miscellaneous commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Miscellaneous/${f}`);
        console.log(`Command [ ${f} ] loaded! [Miscellaneous]`)
        bot.commands.set(props.help.name, props)
    })
});

fs.readdir("./commands/Moderation", (err, files) => {
    if (err) console.log("ERROR: [ " + err + " ].");
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (jsFile.length <= 0) {
        console.log("ERROR: No moderation commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Moderation/${f}`);
        console.log(`Command [ ${f} ] loaded! [Moderation]`)
        bot.commands.set(props.help.name, props)
    })
});

fs.readdir("./commands/Server", (err, files) => {
    if (err) console.log("ERROR: [ " + err + " ].");
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (jsFile.length <= 0) {
        console.log("ERROR: No server commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Server/${f}`);
        console.log(`Command [ ${f} ] loaded! [Server]`)
        bot.commands.set(props.help.name, props)
    })
});

fs.readdir("./commands/Informational", (err, files) => {
    if (err) console.log("ERROR: [ " + err + " ].");
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (jsFile.length <= 0) {
        console.log("ERROR: No server commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Informational/${f}`);
        console.log(`Command [ ${f} ] loaded! [Server]`)
        bot.commands.set(props.help.name, props)
    })
});

// Displays the message in console
bot.on("ready", async () => {

    bot.user.setActivity("jcrp.net", {type: "WATCHING"}); //
    // console.log('\x1b[92m', `${bot.user.username} is now online.\n ${bot.user.username} is now active on ${bot.guilds.size} guilds.`);
    console.log(`Bot online and currently serving in ${bot.channels.size} channels on ${bot.guilds.size} servers, for a total of ${bot.users.size} users.`)

    bot.user.setStatus('dnd') // Online, idle, invisible & dnd
});
// Bot Start
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix || "<@!498235770008502287> ";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if (!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);

    if(cmd === `hello`){
        return message.react("👍");
    }

    if (cmd === 'setbotstatus')
    {
        if (args[0] === 'test')
        {
            message.channel.send('test')
        }
        else
        {
            message.channel.send(message.author + ' error.')
        }
    }

    if(cmd === `<@!417197419546017792>`) {
        message.channel.send(`What? ${message.author}`)
    }

    if(cmd === `${prefix}banned`) {
        message.channel.send('If you, or somebody you know was banned, submit an appeal on <https://discourse.jcrpweb.com>. Support for bans will not be given.')
    }

    if(cmd === `${prefix}serverinvite`) {
        message.channel.send(`${bot.generateInvite}`)
    }

    if(cmd === `${prefix}civdiscord`) {
        let firstmention = message.mentions.users.first()
        message.delete().catch(O_o => {})
        if (firstmention) {
            message.channel.send(firstmention + ', here is a permanent invite to the civilian operations Discord: https://discord.gg/QAtCkjx')
        }else
        message.channel.send('Here is a permanent invite to the civilian operations Discord: https://discord.gg/QAtCkjx')
    }


// After verification
    if(messageArray === `?reg`){
        let postVeri = message.guild.channels.find(`name`, "jcrp-off_topic");
        return postVeri.channel.send("Welcome.");
    }
});

bot.on("error", console.error);

var rebootmsg1 = new Discord.RichEmbed()
    .setDescription("Restarting bot...")
    .setFooter("This process may take up to 1 minute.")
    .setColor("#F4613F")

var rebootmsg2 = new Discord.RichEmbed()
    .setDescription("Bot has restarted!")
    .setFooter(bot.commands.size + " errors encountered")
    .setColor("#417af4")

global.reboot = function resetBot(channel) {
    channel.send(rebootmsg1)
    .then(msg => bot.destroy())
    .then(() => bot.login(botconfig.token))
    .then(() => channel.send(rebootmsg2)
    .then(() => console.log(`  Ping: ${bot.ping}\n  Process restarted!`)));
}


bot.login(botconfig.token);
