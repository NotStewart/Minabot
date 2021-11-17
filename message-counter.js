const mongo = require('./mongo')
const messageCountScehma = require('./schemas/message-count-schema')

module.exports = bot => {
    bot.on('message', async (message) => {
        //structures the messages
        const { author } = message
        const { id } = author

        //findoneandupdate

        //conecting to db
        await mongo().then(async (mongoose) => {
            try {
                await messageCountScehma.findOneAndUpdate({
                    _id: id
                }, {
                    $inc: {
                        'messageCount': 1
                    },
                },
                {
                    upsert: true
                }
                )
                .exec()
            } finally {
                mongoose.connection.close()
            }
        })
    })
}