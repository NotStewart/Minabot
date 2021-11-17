module.exports = {
    cooldown: '10s',
    category: 'Fun',
    description: 'ITZY Grooving!',
    callback: ({ message, client}) => {
        message.channel.send({ content: `${client.emojis.cache.find(emoji => emoji.name === "ayejigroove")}`})
        message.channel.send({ content: `${client.emojis.cache.find(emoji => emoji.name === "aliagroove")}`})
        message.channel.send({ content: `${client.emojis.cache.find(emoji => emoji.name === "achaerygroove")}`})
        message.channel.send({ content: `${client.emojis.cache.find(emoji => emoji.name === "ayunagroove")}`}) 
        console.log("Running the command: groove!")
    }
}