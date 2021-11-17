module.exports = {
    guildOnly: true,
    cooldown: '1s',
    minArgs: '1',
    expectedArgs: "<Target User's @/ID> [Reason]",
    permissions: ["BAN_MEMBERS"],
    category: 'Mod',
    description: "Ban's a user",
    callback: ({ message, client, args }) => {
            var user = message.mentions.users.first() || client.users.cache.find(user => user.id === args[1]);
            var reason = args[1]
            if(!reason) reason = "No reason provided";
             if (!user){
                message.channel.send({content: 'Please specify a user to ban!'})
            }    
            if (user) {
                var userTarget = message.guild.members.cache.get(user.id)
                if (!message.guild.members.cache.get("768398477657899069").permissions.has(Permissions.FLAGS.BAN_MEMBERS)) { 
                    return message.channel.send({content: "I don't seem to have permissions to do that."})
                }
                if (!userTarget) return message.channel.send({content: "I can't seem to find that user."})
                if (userTarget.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
                    return message.channel.send({content: "You can't ban another mod!"})}
                userTarget.ban({ reason: 'reason'})
                message.channel.send({content: `"${user.username.toString()}" has been banned`})
                console.log("Running the command: Ban!")
            }

    }
}