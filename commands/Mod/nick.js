module.exports = {
    guildOnly: true,
    aliases: ['nickname'],
    cooldown: '1s',
    minArgs: '2',
    expectedArgs: "<Target User's @/ID> [New Nickname]",
    permissions: ["KICK_MEMBERS"],
    category: 'Mod',
    description: "Change's a user's nickname",
    callback: ({ message, client, args }) => {
        var target = client.users.cache.find(user => user.id === args[0]) || message.mentions.users.first() || message.author
        var targetid = message.guild.members.cache.get(target.id)


        if(!message.guild.members.cache.get("768398477657899069").permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
                return message.channel.send({content: "I don't have permission to do that!"})
            }

        if (targetid.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
            return message.channel.send({content: "You can't target other mods with this!"})
        }
        if (targetid == message.guild.ownerID) {
            return message.channel.send({content: `You can't target the owner of the server with this!`})
        }

        args.shift() // removing the nickname id
        const nickname = args[0]

        targetid.setNickname(nickname)

        message.channel.send({content: `You set their nickname to "${nickname.toString()}".`})
        console.log("Running the command: nick!")
        
    }
}