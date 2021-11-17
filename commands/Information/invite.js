module.exports = {
    guildOnly: true,
    cooldown: '10s',
    category: 'Information',
    description: "Show's Minabot's invite",
    callback: ({ message, client }) => {
        const Discord = require("discord.js");
        const inviteembed = new Discord.MessageEmbed()
        .setTitle(`Hello! I'm Mina bot!`)
        .setColor('BLACK')
        .setDescription('Click the link above to invite me!')
        .addField("Dev Server", "https://discord.gg/vGvKyfj")
        .setURL('https://discord.com/api/oauth2/authorize?client_id=768398477657899069&permissions=8&scope=bot')
        .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
        .setFooter(client.users.cache.get("244661945867698176").tag.toString())
         message.channel.send({embeds: [inviteembed]})
         console.log("Running the command: invite!")
    }
}