module.exports = {
    cooldown: '10s',
    aliases: ['ss'],
    category: 'Information',
    description: "Show's Stew's status.",
    testOnly: true,
    callback: ({ message, client }) => {
        var stew = client.users.cache.get("244661945867698176")
                message.channel.send({content: "Stewart's status is " + stew.presence.status.toString()})
                console.log("Running the command: stewstatus!")
    }
}