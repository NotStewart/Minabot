module.exports = {
    cooldown: '10s',
    category: 'Information',
    description: "Show's information about the bot's multiple testers",
    callback: ({ message, client }) => {
        const Discord = require("discord.js");
        var embed = new Discord.MessageEmbed()
                embed.setColor('PURPLE')
                .setTitle('Testers Information')
                .addField("With lots of help from:", `${client.users.cache.get("358975513852772364")}, ${client.users.cache.get("100392731431436288")}, ${client.users.cache.get("178397432953044993")}, ${client.users.cache.get("462041896940863498")}, and ${client.users.cache.get("494355857694261268")}`)
                .setFooter(client.users.cache.get("244661945867698176").tag.toString())
                .setThumbnail(client.user.avatarURL({dynamic : true}))
                message.channel.send({embeds: [embed]})
                console.log("Running the command: testers!")
    }
}