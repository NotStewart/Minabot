module.exports = {
    ownerOnly: true,
    guildOnly: true,
    cooldown: '10s',
    aliases: ['ts'],
    category: 'Information',
    description: "Show's Stew information about this server.",
    callback: ({ message }) => {
        message.channel.send({content: `This server's name is: ${message.guild.name.toString()}`})
        message.channel.send({content: `This server's ID is ${message.guild.id.toString()}`})
        console.log("Running the command: thisserver!")
    }
}