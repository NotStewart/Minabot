const { MessageEmbed } = require('discord.js');

module.exports = {
    ownerOnly: true,
    name: 'ownermessage', 
    description: "Send a message to the owner of every guild Minabot is in.",
    category: "Stew commands",
    aliases: ['om'], 
    callback: async ({ client, text }) => {
        client.guilds.cache.forEach(e => {
            e.owner.send({content: text.toString()})
          });
          console.log("Running the command: ownermessage!")
    }
    
}