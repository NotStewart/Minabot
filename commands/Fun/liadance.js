module.exports = {
    cooldown: '10s',
    category: 'Fun',
    description: 'Lia being good at dancing.',
    callback: ({ message }) => {
        gif = "https://gfycat.com/exaltedquestionablebighorn"
        message.channel.send({content: gif.toString()})
        console.log("Running the command: liadance!")
    }
}