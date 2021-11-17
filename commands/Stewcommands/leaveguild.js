const { MessageEmbed } = require('discord.js');

module.exports = {
    ownerOnly: true,
    name: 'leaveGuild', 
    description: "Makes it so Minabot leaves the guild.",
    category: "Stew commands",
    aliases: ['lg'], 
    callback: async ({ message, args }) => {
        if(message.author.id !== '244661945867698176') return;

        if(!args[0]) return message.channel.send({content: 'You must provide me with a guild id!'})

        let guild = message.client.guilds.cache.get(args[0]);

        if(!guild) return message.channel.send({content: 'You must provide me with a guild id that I am already in!'})

        guild.leave()

        const embed = new MessageEmbed()
          .setColor('#2F3136')
          .setDescription(`✅ | I have left \`${guild.name.toString()}\``)

          await message.channel.send({embeds: [embed]})
          console.log("Running the command: leaveguild!")
    }
    
}