module.exports = {
    cooldown: '10s',
    category: 'Fun',
    description: 'Ryujin calling you a clown.',
    callback: ({ message }) => {
        message.channel.send({content: `https://cdn.discordapp.com/attachments/536576760620253204/843621841208737814/unknown.png`})
        console.log("Running the command: ryujinclown!")
    }
}