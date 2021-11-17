const { MessageEmbed } = require('discord.js');
const Schema = require(`../../schemas/bio-schema.js`);
const config = require(`../../config.json`)

module.exports = {
    name: 'setbio',
    category: 'Bio',
    description: 'Sets your bio.',
    permissions: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'EMBED_LINKS'],
    cooldown: '5s',
    testOnly: true,
	callback: async ({ message, args, prefix}) => {
		let finalargs = args.toString().replace(/,/, ' ')
		if (!finalargs) return message.reply({embeds: 
			[new MessageEmbed()
				.setTitle("What do you want in your bio?")
				.setDescription(`Usage: ${prefix.toString()}setbio <bio>`)
			]}
		)
		Schema.findOne({ User: message.author.id }, async (err, data) => {
			if (data) data.delete();
			new Schema({
				User: message.author.id,
				Bio: finalargs
			}).save();
		})
		message.reply({content: 
			`I've successfully updated your bio!`
		})
		console.log("Running the command: Setbio!")
	}
}