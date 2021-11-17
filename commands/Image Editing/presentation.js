const Discord = require('discord.js');
const DIG = require('discord-image-generation');

module.exports = {
    guildOnly: true,
    cooldown: '30s',
    category: 'Image Editing',
    description: "Create a presentation with your wanted text.",
    callback: async({ message, args }) => {
        let text = args.join(" ");
        if(!args.length) return message.channel.send(`Usage: presentation <text>`)
        let image = await new DIG.LisaPresentation().getImage(text)
        let attach = new Discord.MessageAttachment(image, 'presentation.png');;
        message.channel.send({files: [attach]}) // maybe files: ['./image1.png', './image2.jpg'] }
        console.log("Running the command: presentation!")
    }
}