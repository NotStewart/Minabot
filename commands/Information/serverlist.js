module.exports = {
    ownerOnly: true,
    cooldown: '10s',
    aliases: ['sl'],
    category: 'Information',
    description: "Show's Stew information about the servers Minabot is in..",
    callback: ({ message, client }) => {
        var servername = client.guilds.cache.map(guild => guild.name)
        message.channel.send({content: servername.join(` \n`)}); /*\n seems to sort vertically*/
        console.log("Running the command: serverlist!")
    }
}