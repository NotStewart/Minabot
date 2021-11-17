const { MessageEmbed } = require('discord.js');
module.exports = {
    ownerOnly: true,
    name: 'createInv', 
    description: "Create an invite for any guild that your bot is in.",
    category: "Stew commands",
    expectedArgs: 'Guild ID.',
    minArgs: 1,
    maxArgs: 1,
    SyntaxError: 'Please use "{PREFIX}createinvite {ARGUMENTS}"',
    aliases: ['ci'], 
    callback: async ({ message, client, args }) => {
    

        if(!args[0]) return message.channel.send({content: 'You must provide me with a guild id!'})

        let guild = message.client.guilds.cache.get(args[0]);

        if(!guild) return message.channel.send({content: 'You must provide me with a guild id that I am already in!'})

        /*let inv; 
        inv = await guild.channels.cache.first().createInvite()

            const embed = new MessageEmbed()
              .setColor('#2F3136')
              .setDescription(`✅ | Here is your invite to ${guild.name}: ${inv.url}`)

            message.channel.send(embed)*/
        message.channel.send({content: 'Need to fix invite creation'})
    }
    
}