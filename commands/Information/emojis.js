const { MessageEmbed } = require("discord.js");

module.exports = {
    ownerOnly: false,
    cooldown: '30s',
    aliases: ['emoji'],
    category: 'Information',
    description: "Shows the emojis of the current server.",
    callback: async({ client, message, args }) => {
        let Emojis = "";
        let EmojisAnimated = "";
        let EmojiCount = 0;
        let Animated = 0;
        let OverallEmojis = 0;
    
        function Emoji(id) {
          return client.emojis.cache.get(id).toString();
        }
        message.guild.emojis.cache.forEach((emoji) => {
          OverallEmojis++;
          if (emoji.animated) {
            Animated++;
            EmojisAnimated += Emoji(emoji.id);
          } else {
            EmojiCount++;
            Emojis += Emoji(emoji.id);
          }
        });
        let animatedembed = new MessageEmbed()
          .setTitle(`Animated Emojis in ${message.guild.name.toString()} | Emojis [${OverallEmojis.toString()}] `)
          .setDescription(
            `**Animated [${Animated.toString()}]**:\n${EmojisAnimated.toString()}\n\n`
          )
          .setColor('RANDOM');
    
        if (animatedembed.length > 2000) {
           message.channel.send({content: `I'm sorry but my limit is 2000 characters only! Animated emojis can't be shown!`});
        } else {
          message.channel.send({embeds: [animatedembed]});
        }
        let standardembed = new MessageEmbed()
            .setTitle(`Standard Emojis in ${message.guild.name.toString()} | Emojis [${OverallEmojis.toString()}] `)
            .setDescription(
            `**Standard [${EmojiCount.toString()}]**:\n${Emojis.toString()}`
             )
            .setColor('RANDOM');
        if (standardembed.length > 2000) {
             message.channel.send({content: `I'm sorry but my limit is 2000 characters only! Standard emojis can't be shown!`});
             } else {
             message.channel.send({embeds: [standardembed]});
            }
            console.log("Running the command: emojis!")
      },
}