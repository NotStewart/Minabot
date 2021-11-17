module.exports = {
    aliases: ['hs'],
    cooldown: '10s',
    category: 'Fun',
    description: 'Yeri saying Holy Shit.',
    callback: ({ message }) => {
        message.channel.send({
            files: ['https://cdn.discordapp.com/attachments/615298438195838980/797358972130558002/holy_shit.mp4']
        }); 
        console.log("Running the command: holyshit!")
    }
}