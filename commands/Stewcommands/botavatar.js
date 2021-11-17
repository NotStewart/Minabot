const { MessageEmbed } = require('discord.js');
module.exports = {
    ownerOnly: true,
    name: 'botavatar', 
    description: "Change the bot's avatar",
    category: "Stew commands", 
    callback: ({ client }) => {
    
        client.user.setAvatar('./minari38.png');
        console.log("Running the command: botavatar!")
    }
    
}