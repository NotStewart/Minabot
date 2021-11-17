module.exports = {
    guildOnly: true,
    cooldown: '10s',
    aliases: ['ui'],
    category: 'Information',
    description: "Show's Stew's status.",
    callback: ({ message, client, args }) => {
                const Discord = require("discord.js");
                var args1 = args[0]
         
                const uiuser = client.users.cache.find(user => user.id === args1) || message.mentions.users.first() ||  message.member.user;
                const member = message.guild.members.cache.get(uiuser.id)

                var embed = new Discord.MessageEmbed()
                embed.setColor('BLUE')
                .setTitle('User Info')
                .addField("Nickname", member.nickname || 'None')
                .addField("Username", uiuser.username)
                .addField("ID", uiuser.id.toString())   
                .addField("Joined this server on", new Date(member.joinedTimestamp).toLocaleDateString())
                .addField("Joined Discord on", new Date(uiuser.createdTimestamp).toLocaleDateString())
                .setFooter(client.users.cache.get("244661945867698176").tag.toString())
                .setThumbnail(uiuser.displayAvatarURL({dynamic : true}))
                message.channel.send({embeds: [embed]})
                console.log("Running the command: userinfo!")
    }
}