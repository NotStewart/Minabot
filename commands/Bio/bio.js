
const Discord = require('discord.js');
const Schema = require(`../../schemas/bio-schema.js`);
const repschema = require(`../../schemas/reputation-schema.js`)

module.exports = {
    name: 'bio',
    category: 'Bio',
    description: 'Shows one persons bio.',
    permissions: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'EMBED_LINKS'],
    cooldown: '5s',
    testOnly: true,
	callback: async ({ message, client, args, prefix }) => {
		let member = client.users.cache.find(user => user.id === args[0]) || message.mentions.users.first() ||  message.member.user;
		if (!member) {
			member = message.member;
		}
		let data = await Schema.findOne({ User: member.id });
        let repdata = await repschema.findOne ({ User: member.id }) ;
		if (!data) {
            if (!repdata.Reputation) {
                if (!repdata.Penguins) {
                    return message.reply({embeds: 
                        [new Discord.MessageEmbed()
                            .setTitle(`${member.username.toString()}'s Bio!`)
                            .addField('Bio', 'This user has not yet set a bio!')
                            .addField('Reputation', 'This user has not gotten reputation yet!')
                            .addField('Penguins', 'This user has not found any penguins yet!')
                            .setColor(client.color)
                            .setFooter(`Use \`${prefix.toString()}setbio <bio>\` to set your bio!`)
                            .setThumbnail(member.displayAvatarURL({ dynamic: true }))
                        ]}
                    )
                }
                return message.reply({embeds:
                    [new Discord.MessageEmbed()
                        .setTitle(`${member.username.toString()}'s Bio!`)
                        .addField('Bio', 'This user has not yet set a bio!')
                        .addField('Reputation', 'This user has not gotten reputation yet!')
                        .addField('Penguins', 'This user has not found any penguins yet!')
                        .setColor(client.color)
                        .setFooter(`Use \`${prefix.toString()}setbio <bio>\` to set your bio!`)
                        .setThumbnail(member.displayAvatarURL({ dynamic: true }))
                    ]}
                )
            }
            if (!repdata.Penguins) {
                return message.reply({embeds:
                    [new Discord.MessageEmbed()
                        .setTitle(`${member.username.toString()}'s Bio!`)
                        .addField('Bio', 'This user has not yet set a bio!')
                        .addField('Reputation', repdata.Reputation.toString())
                        .addField('Penguins', 'This user has not found any penguins yet!')
                        .setColor(client.color)
                        .setFooter(`Use \`${prefix.toString()}setbio <bio>\` to set your bio!`)
                        .setThumbnail(member.displayAvatarURL({ dynamic: true }))
                    ]}
                )
            }
			return message.reply({embeds: 
                [new Discord.MessageEmbed()
                    .setTitle(`${member.username.toString()}'s Bio!`)
                    .addField('Bio', 'This user has not yet set a bio!')
                    .addField('Reputation', repdata.Reputation.toString())
                    .setColor(client.color)
                    .setFooter(`Use \`${prefix.toString()}setbio <bio>\` to set your bio!`)
                    .setThumbnail(member.displayAvatarURL({ dynamic: true }))
                ]}
            )
		}
        if (!repdata) {
            return message.reply({embeds: 
                [new Discord.MessageEmbed()
                    .setTitle(`${member.username.toString()}'s Bio!`)
                    .addField('Bio', data.Bio.toString())
                    .addField('Reputation', 'This user has not gotten reputation yet!')
                    
                    .setColor(client.color)
                    .setFooter(`Use \`${prefix.toString()}setbio <bio>\` to set your bio!`)
                    .setThumbnail(member.displayAvatarURL({ dynamic: true }))
                ]}
            )
        }
        if (!repdata.Penguins) {
                return message.reply({embeds: 
                    [new Discord.MessageEmbed()
                        .setTitle(`${member.username.toString()}'s Bio!`)
                        .addField('Bio', data.Bio.toString())
                        .addField('Reputation', repdata.Reputation.toString())
                        .addField('Penguins', 'This user has not found any penguins yet!')
                        .setColor(client.color)
                        .setFooter(`Use \`${prefix.toString()}setbio <bio>\` to set your bio!`)
                        .setThumbnail(member.displayAvatarURL({ dynamic: true }))
                    ]}
                )
            }
		message.reply({embeds: 
			[new Discord.MessageEmbed()
				.setTitle(`${member.username.toString()}'s Bio!`)
				.addField('Bio', data.Bio.toString())
                .addField('Reputation', repdata.Reputation.toString())
                .addField('Penguins', repdata.Penguins.toString())
				.setColor(client.color)
				.setFooter(`Use \`${prefix.toString()}setbio <bio>\` to set your bio!`)
				.setThumbnail(member.displayAvatarURL({ dynamic: true }))
            ]}
		);
        console.log("Running the command: Bio!")
	}
};