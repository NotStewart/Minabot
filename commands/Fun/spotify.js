const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'spotify',
    cooldown: '5s',
    aliases: ['sp'],
    category: 'Information',
    description: 'Checks spotify statuses.',
    testOnly: true,
    callback: async ({ message, args, cmd, client }) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author
        let userid = user.id
        if (!user.displayName) {
            user.displayName = client.users.cache.get(userid).tag
        }
        if (user.presence.status === 'offline') {
            return message.channel.send({content: "I can't get your data if you're offline!"})
        }
        user.presence.activities.forEach((activity) => {
            if (activity.type === 'LISTENING' && activity.name === 'Spotify' && activity.assets !== null) {
                let trackIMG = `https://i.scdn.co/image/${activity.assets.largeImage.slice(8)}`;

                let trackName = activity.details;
                /*if (!activity.details) {
                    return message.channel.send("You're not listening to anything!")
                } need to fix. currently checks if they're offline and will catch but will just simply not output anything if they have no activity*/
                let trackAuthor = activity.state;
                let trackAlbum = activity.assets.largeText;

                trackAuthor = trackAuthor.replace(/;/g, ",")

                const spotembed = new MessageEmbed()
                .setAuthor(user.displayName, 'https://cdn.discordapp.com/emojis/408668371039682560.png')
                .setColor("GREEN")
                .setThumbnail(trackIMG)
                .addField('Author', `\`\`\`json\n${trackAuthor.toString()}\n\`\`\``, true)
                .addField('Song', `\`\`\`json\n${trackName.toString()}\n\`\`\``, true)
                .addField('Album', `\`\`\`json\n${trackAlbum.toString()}\n\`\`\``, true)
                message.channel.send({embeds: [spotembed]});
            } 
        } )
        console.log("Running the command: spotify!")
    }
}