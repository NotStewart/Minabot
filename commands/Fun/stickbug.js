const { MessageAttachment } = require('discord.js'),
fetch = require('node-fetch')

module.exports = {
    guildOnly: true,
    cooldown: '1m',
    category: 'Fun',
    description: "Stickbug's a user's avatar.",
    callback: async({ message, client, args }) => {
        let user = message.mentions.users.first() || message.author;
        if (!user) return message.channel.send({content: "I can't seem to find that user!"})
        let avatar = user.avatarURL({
            format: 'png',
            dynamic: false,
            size: 1024
        })

        message.channel.send({content: 'Loading...'})
        .then(msg => {
            setTimeout (() => msg.delete(), 30000)
          })
          .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
                        try {
                    const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=stickbug&url=${avatar}`));
                    const vid = (await res.json()).message;

                    const attachment = new MessageAttachment(vid, `${user.tag}-stickbug.mp4`);
                    message.channel.send({files: [attachment]}); // may have to do {files: []}

                } catch (err) {
                    console.log(err)
                }
                console.log("Running the command: stickbug!")    
    }
}