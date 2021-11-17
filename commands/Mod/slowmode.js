module.exports = {
    guildOnly: true,
    cooldown: '1s',
    expectedArgs: "[0 turns off slowmode] OR [time in seconds for slowmode]",
    permissions: ["KICK_MEMBERS"],
    category: 'Mod',
    description: "Turns on a slowmode in the channel you use the command in.",
    callback: ({ message, args }) => {
            if(!message.guild.members.cache.get("768398477657899069").permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
                return message.channel.send({content: "I seem to be missing the permissions to do that!"})
            }
            if(!message.guild.members.cache.get("768398477657899069").permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
                return message.channel.send({content: "I seem to be missing the permissions to do that!"})
            }

            if(!args[0]) {
                args[0] = "0"
            }
            message.channel.setRateLimitPerUser({content: args[0].toString()})
            console.log("Running the command: slowmode!")
    }
}