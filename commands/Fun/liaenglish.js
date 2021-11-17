module.exports = {
    cooldown: '10s',
    category: 'Fun',
    description: 'Lia being good at English.',
    callback: ({ message }) => {
        message.channel.send({
            files: ['https://cdn.discordapp.com/attachments/536576760620253204/802174659642654740/SVID_20210122_175418_1.mp4']
        }); 
        console.log("Running the command: liaenglish!")
    }
}