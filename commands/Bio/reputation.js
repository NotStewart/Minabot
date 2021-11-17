const Discord = require('discord.js');
const Schema = require(`../../schemas/reputation-schema.js`);

module.exports = {
    name: 'reputation',
    category: 'Bio',
    aliases: ['rep'],
    description: 'Gives someone a reputation point once every 8 hours.',
    permissions: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'EMBED_LINKS'],
    cooldown: '8h',
    testOnly: true,
	callback: async ({ message, client, args}) => {
        let member = client.users.cache.find(user => user.id === args[0]) || message.mentions.users.first() || message.author

        if (!args[0]) {
            return message.channel.send({content:`You need to mention someone! You can't rep yourself!`})
        }

		Schema.findOne({ User: member.id }, async (err, data) => {
			await Schema.findOneAndUpdate({
				User: member.id,
			}, {
                $inc: {
                    'Reputation': 1
                }, 
            }, {
                upsert: true
            }).exec()
		})
        
        let repdata = await Schema.findOne ({ User: member.id }) ;
        console.log(repdata)
        if (!repdata) {
            return message.reply({embeds: 
                [new Discord.MessageEmbed()
                    .setTitle(`${member.username.toString() || 'None'}`)
                    .setDescription('Gives you rep!')
                    .addField({
                        name: 'Reputation',
                        value: '0 (+1)'
                    })
                    .setColor("PURPLE")
                    .setFooter(`See you again in 8 hours!`)
                    .setThumbnail(member.displayAvatarURL({ dynamic: true }))
                ]}
            )
        }
        else {
        console.log(repdata.Reputation)

        let repembed = new Discord.MessageEmbed()
				.setTitle(`${member.username.toString() || 'None'}`)
                .setDescription('Replies with Pong!')
				.addField('Reputation', `${repdata.Reputation.toString()} (+1)`)
				.setColor('PURPLE')
				.setFooter('See you again in 8 hours!')
				.setThumbnail(member.displayAvatarURL({ dynamic: true }))

		message.reply({embeds:[repembed]})
	    }
        console.log("Running the command: Reputation!")
    }
}