module.exports = {
    guildOnly: true,
    cooldown: '10s',
    aliases: ['si'],
    category: 'Information',
    description: "Show's information about the server you requested.",
    callback: async ({ message, client }) => {
        const Discord = require("discord.js");
        let owner = await message.guild.fetchOwner() // only way to fetch owner now.
        var embed = new Discord.MessageEmbed()
        embed.setColor('ORANGE')
        .setTitle('Server Info')
        .setDescription(`${message.guild.toString()}'s information`)
        .addField("Owner", `The owner of this server is ${owner}`)
        .addField("Member Count", `The member count of this server is ${message.guild.memberCount.toString()} members`)
        .addField("Emote Count", `This server has ${message.guild.emojis.cache.size.toString()} emotes`)
        .addField("Roles Count", `This server has ${message.guild.roles.cache.size.toString()} roles`)
        .addField("Server Creation Date", `This server was created on ${new Date(message.guild.createdTimestamp).toLocaleDateString()}`)
        .setFooter(client.users.cache.get("244661945867698176").tag.toString())
        .setThumbnail(message.guild.iconURL({dynamic : true}))
        message.channel.send({embeds: [embed]})
        console.log("Running the command: serverinfo!")
    }
}