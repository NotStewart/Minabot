module.exports = {
    guildOnly: true,
    cooldown: '1s',
    minArgs: '1',
    expectedArgs: "<Target User's @/ID> [Reason]",
    permissions: ["KICK_MEMBERS"],
    category: 'Mod',
    description: "Kick's a member",
    callback: ({ message, client, args }) => {
            var user = message.mentions.users.first() || client.users.cache.find(user => user.id === args[1]);
            var args1 = args[0]
            var reason = args1

            if(!reason) reason = "No reason provided";
            // Check if an user mention exists in this message
            if (!user){
                message.channel.send({content: 'Please specify a user to kick!'})
            }    
            if (user) {
                var userTarget = message.guild.members.cache.get(user.id)
                if (!message.guild.members.cache.get("768398477657899069").permissions.has(Permissions.FLAGS.BAN_MEMBERS)) { 
                    return message.channel.send({content: "I don't seem to have permissions to do that."})
                }
                if (!userTarget) return message.channel.send({content: "I can't seem to find that user."})
                if (userTarget.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
                    return message.channel.send({content: "You can't kick another mod!"})}
                userTarget.kick()
                .catch(error => message.channel.send({content: `Could not kick user because of ${error.toString()}`}))
                console.log("Running the command: kick!")
            }
    }
}