module.exports = {
    cooldown: '10s',
    category: 'Fun',
    description: 'Ningning having a gamer moment',
    callback: ({ message }) => {
        message.channel.send({
            files: ['https://cdn.discordapp.com/attachments/554993619329744896/895522305155952660/ningninggamermoment.mp4']
        });
        console.log("Running the command: wtf!")
    }
}