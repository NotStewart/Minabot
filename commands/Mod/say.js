module.exports = {
    guildOnly: true,
    cooldown: '1s',
    minArgs: '2',
    expectedArgs: "<Target Channel @> [Text]",
    permissions: ["KICK_MEMBERS"],
    category: 'Mod',
    description: "Say something in another channel",
    callback: ({ message, args}) => {

        if(!message.mentions.channels.first()) return message.channel.send({content: "What channel do you want this sent in?"})
        if(!args[1]) return message.channel.send({content: "What do you want me to say?"})
        if(message.attachments.size > 0) {
            return message.channel.send({content: "I can't send attachments!"})
        }
        
        args.shift()
        text = args.join(" ")
            message.mentions.channels.first().send({content: text.toString()})
            message.channel.send({content: "Sent!"}) 
            console.log("Running the command: say!")
    }
}