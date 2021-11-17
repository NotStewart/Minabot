module.exports = {
    ownerOnly: true,
    cooldown: '1s',
    category: 'Stew commands',
    description: "Shows the RAM that Minabot is using.",
    callback: ({ message, client }) => {
                    const Discord = require("discord.js");
                    const ramdt = (`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB Ram`);
                    const ramembed = new Discord.MessageEmbed()
                    .setTitle('Ram Usage')
                    .setColor('RANDOM')
                    .setDescription(ramdt.toString())
                    .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
                    .setFooter(client.users.cache.get("244661945867698176").tag.toString())
                    message.channel.send({embeds: [ramembed]})
                    console.log("Running the command: ram!")
    }
}