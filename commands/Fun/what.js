module.exports = {
    cooldown: '10s',
    category: 'Fun',
    description: 'Lia saying what cutely.',
    callback: ({ message }) => {
        message.channel.send({
            files: ['https://cdn.discordapp.com/attachments/554993619329744896/895523736004993094/liawhat.mp4']
        }); 
        console.log("Running the command: what!")
    }
}