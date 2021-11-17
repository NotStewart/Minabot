const Discord = require("discord.js");
const Schema = require(`../../schemas/reputation-schema.js`);

module.exports = {
    name: 'penguins',
    category: 'Bio',
    aliases: ['p'],
    description: 'Lets you collect penguins every 24 hours!',
    permissions: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'EMBED_LINKS'],
    cooldown: '24h',
    testOnly: true,
    
	callback: async ({ message, client, args}) => {
        let member = message.author

		Schema.findOne({ User: member.id }, async (err, data) => {
			await Schema.findOneAndUpdate({
				User: member.id,
			}, {
                $inc: {
                    'Penguins': 4
                }, 
            }, {
                upsert: true
            }).exec()
		})
        
        let repdata = await Schema.findOne ({ User: member.id }) ;
        if (!repdata) {
            return message.reply({embeds: 
                [new Discord.MessageEmbed()
                    .setTitle(`${member.username.toString()}`)
                    .addField("Penguins", `0 (+4)`)
                    .setColor("PURPLE")
                    .setFooter(`Happy penguin collection!`)
                    .setThumbnail(member.displayAvatarURL({ dynamic: true }))
                ]}
            )
        }
        if (!repdata.Penguins) {
            return message.reply({embeds: 
                [new Discord.MessageEmbed()
                    .setTitle(`${member.username.toString()}`)
                    .addField("Penguins", `0 (+4)`)
                    .setColor("PURPLE")
                    .setFooter(`Happy penguin collection!`)
                    .setThumbnail(member.displayAvatarURL({ dynamic: true }))
                ]}
            )
        }
		message.reply({embeds: 
			[new Discord.MessageEmbed()
				.setTitle(`${member.username.toString()}`)
				.addField("Penguins", `${repdata.Penguins.toString()} (+4)`)
				.setColor("PURPLE")
				.setFooter(`Happy penguin collection!`)
				.setThumbnail(member.displayAvatarURL({ dynamic: true }))
            ]}
		)
        console.log("Running the command: penguins!")
	}
}