module.exports = {
    guildOnly: true,
    cooldown: '1s',
    minArgs: '1',
    expectedArgs: "on or off",
    permissions: ["ADMINISTRATOR"],
    category: 'Mod',
    description: "Locks all channels to prevent a raid. Permissions will need to be revisited when you're done!",
    callback: ({ message, args }) => {

                 const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
                if(!message.guild.members.cache.get("768398477657899069").permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) {
                    return message.channel.send({content: "I seem to be missing the permissions to do that!"})
                }
                if(!message.guild.members.cache.get("768398477657899069").permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
                    return message.channel.send({content: "I seem to be missing the permissions to do that!"})
                }
                if (args[0] === 'on') {
                    channels.forEach(channel => {
                        if((channel.name).length > 15) {
                            return
                        }
                        channel.updateOverwrite(message.guild.roles.everyone, {
                            SEND_MESSAGES: false
                        }).then(() => {
                            channel.setName(channel.name += `🔒`)
                        })
                    })
                    return message.channel.send({content: 'I have locked all the channels, good luck!'});
                } else if (args[1] === 'off') {
                    channels.forEach(channel => {
                        channel.updateOverwrite(message.guild.roles.everyone, {
                            SEND_MESSAGES: true
                        }).then(() => {
                                channel.setName(channel.name.replace('🔒', ''))
                            }
                        )
                    })
                    return message.channel.send({content: 'All clear! I unlocked all the channels. If you had custom permissions, you need to check them!'})
        }
        console.log("Running the command: raidlock!")
    }
}