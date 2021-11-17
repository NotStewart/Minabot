module.exports = {
    cooldown: '10s',
    aliases: ['creator'],
    category: 'Information',
    description: "Show's information about the bot's author.",
    callback: ({ message, client }) => {
        const Discord = require("discord.js");
        var embed = new Discord.MessageEmbed()
                embed.setColor('PURPLE')
                .setTitle('Author Information')
                .addField("Tag", client.users.cache.get("244661945867698176").tag)
                .addField("With lots of help from:", client.users.cache.get("358975513852772364").tag)
                .setFooter(client.users.cache.get("244661945867698176").tag)
                .setThumbnail(client.users.cache.get("244661945867698176").displayAvatarURL({dynamic : true}))
                message.channel.send({embeds: [embed]})
                console.log("Running the command: author!")
    }
}