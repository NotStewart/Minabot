const DiscordJS = require('discord.js')
const Discord = require('discord.js')
const WOKCommands = require('wokcommands')
const path = require('path')
const config = require('./config')

const { Intents } = Discord


const client = new DiscordJS.Client({
    // Use recommended partials for the built-in help menu
    partials: ['MESSAGE', 'REACTION'],
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    ]
})


client.on('ready', () => {
    // The client object is required as the first argument.
    // The second argument is the options object.
    // All properties of this object are optional.
    client.user.setActivity(`갯마을 차차차 with ${client.users.cache.size} Hyejin fans. | m!help`, {type: "WATCHING"}) // STREAMING, WATCHING, CUSTOM_STATUS, PLAYING, COMPETING

    const dbOptions = {    // These are the default values
            keepAlive: true,     
        }

    const wok = new WOKCommands(client, {
        // The name of the local folder for your command files
        commandsDir: path.join(__dirname, 'commands'),

        dbOptions,

        mongoUri: 'mongodb://localhost:27017/minabot',
        
        // The name of the local folder for your feature files
        featuresDir: path.join(__dirname, 'features'),
        
        // The name of the local file for your message text and translations
        // Omitting this will use the built-in message path
        messagesPath: path.join(__dirname, 'messages.json'),
        
        // If WOKCommands warning should be shown or not, default true
        showWarns: true,
        
        // How many seconds to keep error messages before deleting them
        // -1 means do not delete, defaults to -1
        del: -1,
        
        // What language your bot should use
        // Must be supported in your messages.json file
        defaultLangauge: "english",
        
        // If your commands should not be ran by a bot, default false
        ignoreBots: true,

        // What server/guild IDs are used for testing only commands & features
        // Can be a single string if there is only 1 ID
        testServers: ['291083136832372737', '554977512426438668', '668038543439953943'],

        botOwners: ['244661945867698176'],
        
        // What built-in commands should be disabled.
        // Note that you can overwrite a command as well by using
        // the same name as the command file name.
        disabledDefaultCommands: [
            // 'help',
            // 'command',
            // 'language',
            // 'prefix',
            // 'requiredrole'
        ],


        
    })
    
    wok.on('databaseConnected', async (connection, state) => {
        const model = connection.models[`wokcommands-languages`]

        const results = await model.countDocuments()
        console.log(results)
    })


        // Here are some additional methods that you can chain
        // onto the contrustor call. These will eventually be
        // merged into the above object, but for now you can
        // use them:

        .setCategorySettings([
            {
                name: 'Fun',
                emoji: '🎮'
            },
            {
                name: 'Image Editing',
                emoji: '📷'
            },
            {
                name: 'Tix',
                emoji: '💸'
            },
            {
                name: 'Information',
                emoji: '📝'
            },
            {
                name: 'Stew commands',
                emoji: '⚠️'
            },
            {
                name: 'Bio',
                emoji: '🚪'
            },
            {
                name: 'Voice',
                emoji: '🎤'
            },
            {
                name: "Mod",
                emoji: "🔨"
            }
        ])
        // The default is !
        .setDefaultPrefix('m!')
        
        // Used for the color of embeds sent by WOKCommands
        .setColor(0xff0000)
})

client.on('guildCreate', async guild =>{
    const Discord = require("discord.js")
    const channelId = '800183880626733076'
    const logchannel = client.channels.cache.get(channelId) //This Gets That Channel
    const sowner = guild.owner //This Gets The Guild Owner
    if(!logchannel) return //If the channel is invalid it returns
    const joinembed = new Discord.MessageEmbed()
        .setTitle('I Joined A Guild!')
        .setDescription(`**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}\n**Owner:** ${sowner.tag}`)
        .setTimestamp()
        .setColor('BLUE')
        .setFooter(`I'm In ${client.guilds.cache.size} Guilds Now!`)
    logchannel.send({embeds: [joinembed]})
    let chan1 = guild.channels.cache.first()
    let chan = client.channels.cache.get(chan1)

    const xdembed = new Discord.MessageEmbed()
    .setColor('PURPLE')
    .setURL('https://trello.com/b/9fhjrM87/minabot')
    .setAuthor(`\u200b`, client.user.displayAvatarURL())
    .setDescription(`Hello! I am Minabot, I was designed by Stewart. I am designed for multiple features, with multiple more on the way. Currently I can handle some moderation tasks and offer some fun commands for your users. Utilize m!invite to join the dev server and you can talk with my creator for any questions or suggestions!`)
    .setFooter(`https://trello.com/b/9fhjrM87/minabot | m!help`)
    .setTimestamp()

    if(!chan) {
        guild.owner.send({embeds: [xdembed]})
    }  else if(chan) {
        chan.send({embeds: [xdembed]})
    }
})

client.on('guildDelete', guild =>{
    const channelId = '800183880626733076'
    const logchannel = client.channels.cache.get(channelId) //This Gets That Channel
    const serverowner = "Not sure, I was kicked :(" //This Gets The Guild Owner

    if(!logchannel) return  //If the channel is invalid it returns
    const leaveembed = new Discord.MessageEmbed()
        .setTitle('I Left A Guild!')
        .setDescription(`**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}\n**Owner:** ${serverowner.tag}`)
        .setTimestamp()
        .setColor('RED')
        .setFooter(`I'm In ${client.guilds.cache.size} Guilds Now!`)
    logchannel.send({embeds: [leaveembed]})
})

client.on(`guildMemberAdd`, (member) => {
    // greeter
    var minacord = client.guilds.cache.get("554977512426438668")
    var stewcord = client.guilds.cache.get("291083136832372737")
    var kdlcord = client.guilds.cache.get("647969045282422819")
    var eucord = client.guilds.cache.get("873224620642283600")
    var kvlcord = client.guilds.cache.get("703115210646487050")
        if (member.guild.id == stewcord.id){
            var logging = client.channels.cache.get("293632169908371466")
            var stewmembercount = stewcord.memberCount
            var stewwelcome = client.channels.cache.get("525086571167219712")
            var stewnewrole = member.guild.roles.cache.find(role => role.id === "725949333370830848")
            var stewcordembed = new Discord.MessageEmbed()
            .setTitle(`Someone new has joined the server!`)
            .setColor(`YELLOW`)
            .addField("Welcome " + member.displayName + ` to the Stew Crew!`, `Enjoy your stay!`)
            .setThumbnail(member.guild.iconURL({dynamic : true}))
            .setFooter(`Member #${stewmembercount}`)
            stewwelcome.send({embed: [stewcordembed]})
            
            logging.send({content:`${member} has joined the server!`})
            member.roles.add(stewnewrole)
            console.log("Someone joined Stewcord")
        }
        if (member.guild.id == minacord.id){
            console.log("Someone joined minacord")   
        }
        if (member.guild.id == minacord.id){
            var minalogging = client.channels.cache.get("559859840504299530")
            var minamembercount = minacord.memberCount
            var minawelcome = client.channels.cache.get("554978997201666068")
            var minanewrole = member.guild.roles.cache.find(role => role.id === "559863182563344386")
            var minaembed = new Discord.MessageEmbed()
            .setTitle(`Someone new has joined the server!`)
            .setColor(`RANDOM`)
            .addField("Welcome " + member.displayName + ` to Mina's Homebodies!`, `Enjoy your stay!`)
            .setThumbnail(member.guild.iconURL({dynamic : true}))
            .setFooter(`Member #${minamembercount}`)
            minawelcome.send({embeds: [minaembed]})
 
            minalogging.send({content: `${member} has joined the server!`})
            member.roles.add(minanewrole)
        }
        if (member.guild.id == kdlcord.id){
            var kdlmembercount = kdlcord.memberCount
            var kdllogging = client.channels.cache.get("678941923540467713")
            var kdlwelcome = client.channels.cache.get("647969045282422823")
            var kdlnewrole = member.guild.roles.cache.find(role => role.id === "711140824767004683")
            var kdlembed = new Discord.MessageEmbed()
            .setTitle(`Someone new has joined the Kpop Discord League!`)
            .setColor(`RED`)
            .addField("Welcome " + member.displayName + " to the Kpop Discord League", `Enjoy your stay!`)
            .setThumbnail(member.guild.iconURL({dynamic : true}))
            .setFooter(`Member #${kdlmembercount}`)
 
            kdlwelcome.send({embeds: [kdlembed]})
 
            kdllogging.send({content: `${member} has joined the server!`})
            member.roles.add(kdlnewrole)
        }
        if (member.guild.id == eucord.id){
            var eumembercount = eucord.memberCount
            var eulogging = client.channels.cache.get("873224621141393421")
            var euwelcome = client.channels.cache.get("873224621728604241")
            var eunewrole = member.guild.roles.cache.find(role => role.id === "873224620642283602")
            var euembed = new Discord.MessageEmbed()
            .setTitle(`Someone new has joined the EU Kpop Discord League!`)
            .setColor(`BLUE`)
            .addField("Welcome " + member.displayName + " to the EU Kpop Discord League", `Enjoy your stay!`)
            .setThumbnail(member.guild.iconURL({dynamic : true}))
            .setFooter(`Member #${eumembercount}`)
 
            euwelcome.send({embeds: [euembed]})
 
            eulogging.send({content: `${member} has joined the server!`})
            member.roles.add(eunewrole)
        }
        if (member.guild.id == kvlcord.id){
            var kvlmembercount = kvlcord.memberCount
            var kvllogging = client.channels.cache.get("703115211615240194")
            var kvlwelcome = client.channels.cache.get("703115211778818197")
            var kvlnewrole = member.guild.roles.cache.find(role => role.id === "711139532451479592")
            var kvlembed = new Discord.MessageEmbed()
            .setTitle(`Someone new has joined the Kpop Valorant league!`)
            .setColor(`GREEN`)
            .addField("Welcome " + member.displayName + " to the Kpop Valorant League", `Enjoy your stay!`)
            .setThumbnail(member.guild.iconURL({dynamic : true}))
            .setFooter(`Member #${kvlmembercount}`)
 
            kvlwelcome.send({embeds: [kvlembed]})
 
            kvllogging.send({content: `${member} has joined the server!`})
            member.roles.add(kvlnewrole)
        }
    })

    client.on(`guildMemberRemove`, (member) => {
        // leaver
        var minacord = client.guilds.cache.get("554977512426438668")
        var stewcord = client.guilds.cache.get("291083136832372737")
        var kdlcord = client.guilds.cache.get("647969045282422819")
            if (member.guild.id == stewcord.id){
                var logging = client.channels.cache.get("293632169908371466")
                logging.send({content: `${member.displayName} has left the server!`})
            }
            if (member.guild.id == minacord.id){
                var minalogging = client.channels.cache.get("559859840504299530")
                minalogging.send({content: `${member.displayName} has left the server!`})
            }
            if (member.guild.id == kdlcord.id){
                var kdllogging = client.channels.cache.get("678941923540467713")
                kdllogging.send({content: `${member.displayName} has left the server!`})
            }
    })

client.on("messageCreate", message => { /*Message listener*/
    const Discord = require("discord.js")
    var checkmark = `✅`
    var stewids = "244661945867698176"
    let isBotOwner = message.author.id == stewids
    var args = message.content

    if(message.content.toLowerCase().includes("stew sus") || message.content.toLowerCase() == "stewsus" || message.content.toLowerCase() == "stew is sus" || message.content.toLowerCase() == "stewartsus" || message.content.toLowerCase() == "stewart sus" || message.content.toLowerCase() == "stewart is sus" ) { 
        message.channel.send({content: "No he's not."})}

      if(message.content.toLowerCase().includes("m!embed")) {
          message.channel.send({content: "Not happening."})
      }


   
    var person = message.mentions.users.first() || client.users.cache.find(user => user.id === args[1]) || message.author
    var mchannel = message.mentions.channels.first() || client.channels.cache.find(channel => channel.id === args[1]) || message.channel
    //Detect when the bot has been pinged and dm's me. 
    // This if statement includes formatting for mobile & PC
    if(message.content.toLowerCase().includes("<@!768398477657899069>") || message.content.toLowerCase().includes("<@768398477657899069>")) {
        console.log("ping sent for @")
        var ref = "http://discordapp.com/channels/" + message.guild.id + "/" + message.channel.id + "/" + message.id
        var pingembed = new Discord.MessageEmbed()
        .setTitle("I've been pinged!")
        .setColor('RED')
        .addField("Message: ", message.content)
        .addField("Author: ", message.author.username + message.author.discriminator + " (" + message.author.id + ")")
        .addField("Link: ", ref)
        if(message.channel.type != "dm") {
            pingembed.addField("Server: ", message.guild.name)
        } else {
            pingembed.addField("Server:", "In dm's")
            message.guild.members.cache.get
        }
        
        client.users.cache.get("244661945867698176").send({embeds: [pingembed]})
    } 

    if(message.content.toLowerCase().includes("stewart") || message.content.toLowerCase().includes("stew")) { /*detects when my name is said*/
        if(message.content.toLowerCase().includes("pensivestew") || message.content.toLowerCase().includes("stolenfromstew")){
            return
        }
        if(message.author.id == "762711264002179092") {
            return
        }
        if(message.author.id == "793435588593975316"){
            return
        }
        if(message.author.id == "768398477657899069"){
            return
        }
        console.log("stew/stewart was mentioned")
        var mentionembed = new Discord.MessageEmbed()
        var ref = "http://discordapp.com/channels/" + message.guild.id + "/" + message.channel.id + "/" + message.id
        mentionembed.setTitle("Someone mentioned me.")
        .setColor('PURPLE')
        .addField("Message: ", `Text: ${message.content}`)
        .addField("Author: ", message.author.username + "#" + message.author.discriminator + " (" + message.author.id + ")")
        .addField("Link: ", ref)
        if(message.channel.type != "dm") {
            mentionembed.addField("Server: ", message.guild.name)
        }else {
            mentionembed.addField("Server: ", "In dm's")
        }

        if (mentionembed.length > 1023) {
            return console.log("Embed too big")
        }

        client.users.cache.get("244661945867698176").send({embeds: [mentionembed]})
    }

    if(message.content.toLowerCase().includes("minabot") || message.content.toLowerCase().includes("mina bot")) { /*detects when minabot is said*/
        console.log("minabot was mentioned")
        if (message.author.id == "768398477657899069") {
            return console.log("Mina mentioned herself.")
        }
        var botembed = new Discord.MessageEmbed()
        var ref = "http://discordapp.com/channels/" + message.guild.id + "/" + message.channel.id + "/" + message.id
        botembed.setTitle("Someone mentioned minabot.")
        .setColor('BLUE')
        .addField("Message: ", `Text: ${message.content}`)
        .addField("Author: ", message.author.username + message.author.discriminator + " (" + message.author.id + ")")
        .addField("Link: ", ref)
        if(message.channel.type != "dm") {
            botembed.addField("Server: ", message.guild.name)
        }else {
            botembed.addField("Server: ", "In dm's")
        }
        if (botembed.length > 1023) {
            return console.log("Embed too big")
        }

        client.users.cache.get("244661945867698176").send({embeds: [botembed]})
    }
    if(message.channel.type == "dm") { /*forwards me all dms*/
        if(isBotOwner) return
        else
        if (message.author.id == "807250096659234827" || "768398477657899069") return
        if(!message.content) {
            message.content = "No text submitted. Probably an image."
        }
        pingembed = new Discord.MessageEmbed()
        .setTitle("I've been dmed!")
        .setColor("GREEN")
        .addField("Message: ", `text ${message.content}`)
        .addField("Author: ", message.author.username + message.author.discriminator + " (" + message.author.id + ")")
        if (pingembed.length > 1023) {
            return console.log("Embed too big")
        }
        return client.users.cache.get("244661945867698176").send({embeds: [pingembed]})
    }

    if(message.content.toLowerCase().includes('m!poll')) {
        if(message.channel.type == "dm") { 
            return message.channel.send("This command does not work in dms!")
        }
        const noemoji = client.emojis.cache.find(emoji => emoji.name === "aminano")
        const yesemoji = client.emojis.cache.find(emoji => emoji.name === "aminanod")
        var polledmessage = message
        
        const addReactions = (message) => {
            polledmessage.react(yesemoji)

            setTimeout(() => {
                polledmessage.react(noemoji)
            }, 750)

        }


        const fetched = message.channel.messages.fetch({ limit : 1 })
        if (fetched) {
            addReactions(fetched)
        }


    }

},)

setInterval(() => {
    const pfps = [
        "https://cdn.discordapp.com/attachments/554993619329744896/895181624633872394/minari32.jpg", // image url or your desired image(s) path
        "https://cdn.discordapp.com/attachments/554993619329744896/895181622339584010/minari19.jpg",
        "https://cdn.discordapp.com/attachments/554993619329744896/895181616622739476/minari13.jpg",
        "https://cdn.discordapp.com/attachments/554993619329744896/895181614764666910/minari22.jpg",
        "https://cdn.discordapp.com/attachments/554993619329744896/895181614244564992/minari29.jpg",
        "https://cdn.discordapp.com/attachments/554993619329744896/895181615033114654/minari37.png",
        "https://cdn.discordapp.com/attachments/554993619329744896/895181612256473089/minari42.jpg",
        "https://cdn.discordapp.com/attachments/554993619329744896/895181613510590504/minari36.jpg",
        "https://cdn.discordapp.com/attachments/554993619329744896/895182113643589642/lia.jpg",
        "https://cdn.discordapp.com/attachments/764251740844457985/886265703395647558/241563691_403529491164521_4846106941611945396_n.jpg",
        "https://i.imgur.com/44B1IMb.png",
        "https://i.imgur.com/4jNqpOU.png",
        "https://i.imgur.com/K5LMeJz.png",
        "https://i.imgur.com/RnPCAkW.png",
        "https://i.imgur.com/fNML8Vk.png",
        "https://i.imgur.com/tBFGNgP.png",
        "https://i.imgur.com/CyxPyXd.png",
        "https://i.imgur.com/r3L2tEW.png",
    ]

    let final = pfps[Math.floor(Math.random() * pfps.length)] // randomizing pfps
    console.log("Picking a new Discord Picture!")
    console.log(final)

    client.user.setAvatar(final) // setting randomized pfp
}, 7200000) // every 2 hours, it sets a new one

client.login(config.token)