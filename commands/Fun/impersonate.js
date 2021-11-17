const Discord = require("discord.js");

module.exports = {
    guildOnly: true,
    cooldown: '1m',
    category: 'Fun',
    minArgs: 2,
    expectedArgs: '<@USER or 244661945867698176> <text you want them to say>',
    SyntaxError: 'Please use "{PREFIX}reputation {ARGUMENTS}',
    description: "Sends a message as another user.",
    callback: async({ message, client, args }) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!member) return message.reply(`Couldn't find this user!`)

        message.channel.createWebhook(member.user.username, {
            avatar: member.user.displayAvatarURL({ dynamic: true })
        }).then(webhook => {
            webhook.send({content: args.slice(1).join(' ')})
            setTimeout(() => {
                webhook.delete()
            }, 3000)
        })
        console.log("Running the command: impersonate!")
    }
}