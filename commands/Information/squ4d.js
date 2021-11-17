module.exports = {
    guildOnly: true,
    cooldown: '10s',
    category: 'Information',
    description: "Show's the link to SQU4D's server",
    callback: ({ message }) => {
        message.channel.send({content: "You can find the invite to Squ4dcord here! https://discord.gg/9TxZ6mbyw8 "})
        console.log("Running the command: squ4d!")
    }
}