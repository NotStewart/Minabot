const Discord = require('discord.js');
const DIG = require('discord-image-generation');

module.exports = {
    guildOnly: true,
    cooldown: '30s',
    category: 'Image Editing',
    description: "Create an edit of someone's avatar becoming trash!",
    callback: async({ message, client, args }) => {
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
        let avatar = user.displayAvatarURL({size: 1024, dynamic: false, format: 'png' });
        let img = await new DIG.Trash().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, 'trash.png');;
        message.channel.send({files: [attach]})
        console.log("Running the command: trash!")
    }
}