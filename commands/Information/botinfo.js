module.exports = {
    cooldown: '10s',
    aliases: ['bi'],
    category: 'Information',
    description: "Show's information about the bot.",
    callback: ({ message, client, PREFIX }) => {
        const Discord = require("discord.js");
        const ms = require(`ms`);
        const botuptime = ms(client.uptime)
                if(!PREFIX) {
                    PREFIX = "m!"
                }

                var embed = new Discord.MessageEmbed() /*reestablishing Embed variable for different case*/
                    embed.setColor('BLUE') /*embed.setColor here to reestablish embed as subject of editing*/
                    .setTitle('Bot Info')
                    .addField("Uptime:", botuptime.toString())
                    .addField("Servers:", client.guilds.cache.size.toString() +" (with " + client.channels.cache.size.toString() + " channels)")
                    .addField("Verified Status:", `Mina is a verified bot of Discord!`)
                    .addField("Help command:", PREFIX.toString() + "!help") /*more fields*/
                    .setFooter(client.users.cache.get("244661945867698176").tag.toString()) /*footer for the embed*/
                    .setThumbnail(client.user.avatarURL({dynamic : true})) /*avatarURL allows for GIF avatars*/
                    message.channel.send({embeds: [embed]})
                    console.log("Running the command: botinfo!")
    }
}