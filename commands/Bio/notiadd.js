const { MessageEmbed } = require('discord.js');
const Schema = require(`../../schemas/ping-schema.js`);

module.exports = {
    name: 'notiadd',
    category: 'Bio',
    description: 'Allows you to set a notification',
    permissions: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'EMBED_LINKS'],
    cooldown: '5s',
    testOnly: false,
	callback: async ({ message, args, prefix}) => {
		if (!args.join(" ")) return message.reply({embeds: 
			[new MessageEmbed()
				.setTitle("What do you want to be notified for?")
				.setDescription(`Usage: ${prefix.toString()}notiadd <notification word>`)
			]}
		)
		Schema.findOne({ User: message.author.id }, async (err, data) => {
			if (data) data.delete();
			new Schema({
				User: message.author.id,
				Ping: args.join(" ")
			}).save();
		})
		message.reply( {content:
			`I've successfully updated your notifications!`
		})
		console.log("Running the command: notiadd!")
	}
}