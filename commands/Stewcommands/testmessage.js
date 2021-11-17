const { MessageEmbed } = require('discord.js');

module.exports = {
    ownerOnly: true,
    name: 'testmessage', 
    description: "Send a message to the owner of every guild Minabot is in.",
    category: "Stew commands",
    aliases: ['tm'], 
    callback: async ({ client, text }) => {
        client.users.cache.get("244661945867698176").send({content: text})
        console.log("Running the command: testmessage!")
    }
    
}