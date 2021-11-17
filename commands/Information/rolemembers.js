module.exports = {
    guildOnly: true,
    cooldown: '10s',
    aliases: ['rolecheck'],
    category: 'Information',
    description: "Show's information about user's who have a role.",
    callback: ({ message, args }) => {
        const Discord = require("discord.js");
                let roleCheck = ''
                var args1 = args[0]
                const role = args1
                if (!args1){
                    return message.channel.send({content: "You need to specify a role for me to choose!"})
                }
                const roleMembers = message.guild.members.cache.filter(m => {
                    if (role === 'everyone') roleCheck = m.roles.cache.get(message.guild.id)
                    else roleCheck = m.roles.cache.find(r => r.name.toLowerCase() === role.toLowerCase())
                    return roleCheck
                }).map(member => {
                    return member.user.tag
                })

                const Embed = new Discord.MessageEmbed()
                .setTitle(`${role.toString()} Members List`)
                .setDescription(`\`${roleMembers.join('\n').toString()}\``)
                .setColor(3426654)
                message.channel.send({embeds: [Embed]})
                console.log("Running the command: rolemembers!")
    }
}