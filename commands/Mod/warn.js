module.exports = {
    guildOnly: true,
    cooldown: '1s',
    permissions: ["KICK_MEMBERS"],
    category: 'Mod',
    description: "Sends a warning to a user.",
    callback: ({ message, client, args }) => {
        const Discord = require("discord.js");

        var user = message.mentions.users.first() || client.users.cache.find(user => user.id === args[1]);
        var args1 = args[0]
        if (!user){
            message.channel.send({content: 'Please specify a user to warn!'})
        }    
        if (user) {
            if(!args1) {
                args1 = "No text written."
            }

            warningembed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("Warning Message!")
            .addField("What you were warned for", args1.toString())
            .addField("Where the warning came from", message.guild.name.toString())
            .setFooter(client.users.cache.get("244661945867698176").tag.toString())

            client.users.cache.get(user.id).send({embeds: [warningembed]})
            message.channel.send({content: "Warning sent!"})
            console.log("Running the command: warn!")
        }
    
    }
}