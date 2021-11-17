const Discord = require("discord.js");
const Schema = require(`../../schemas/reputation-schema.js`);

module.exports = {
    name: 'testing',
    category: 'Bio',
    description: 'Show who has the most penguins!',
    permissions: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'EMBED_LINKS'],
    cooldown: '10s',
    testOnly: true,
	callback: async ({ message, client, args}) => {
        let member = message.author

		Schema.find({}, async (err, data) => {
            await Schema.find().sort([['Penguins', 'descending']]).exec((err, res) => {
                if(err) console.log(err);
                console.log
            })
        })
        console.log("Running the command: test!")
	}
}