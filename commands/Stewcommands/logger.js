module.exports = {
    ownerOnly: true,
    cooldown: '1s',
    category: 'Stew commands',
    description: "Logs into console.",
    callback: ({ message }) => {
        console.log(message)
        message.channel.send({content: "Message has been logged."})
        console.log("Running the command: logger!")
    }
}