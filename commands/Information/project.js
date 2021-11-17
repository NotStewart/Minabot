module.exports = {
    cooldown: '10s',
    aliases: ['projects'],
    category: 'Information',
    description: "Show's information about the plans for Minabot.",
    testOnly: true,
    callback: ({ message }) => {
        let link = "https://trello.com/b/9fhjrM87/minabot"
        console.log("Running the command: project!")
        return message.channel.send({ content: `You can find information about what Stewart is doing to Minabot here: ${link.toString()}`})
        
    }
}