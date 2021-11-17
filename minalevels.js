const mongo = require('./mongo')
const profileSchema = require('./schemas/profile-schema')

module.exports = (bot) => {
    bot.on('message', message => {
        const { guild, member } = message
        if (message.author.bot) {
            return
        }
        if(message.channel.type == "dm"){ 
            /*dm checker so some fucker cant crash the bot*/
               return message.channel.send("This command does not work in dms!")
            }
        if(guild.id == "110373943822540800") {
            return
        }

        addXP(guild.id, member.id, 5)
        
    })
}

const getNeededXP = level => level * level * 100

const addXP = async (guildId, userId, xpToAdd) => {
    await mongo().then(async mongoose => {
        try {
            const result = await profileSchema.findOneAndUpdate({
                guildId,
                userId,
            }, {
                guildId,
                userId,
                $inc: {
                    xp: xpToAdd
                }
            }, {
                upsert: true,
                new: true
            })

            let { xp, level } = result
            const needed = getNeededXP(level)

            if (xp >= needed) {
                ++level
                xp -= needed 

                await profileSchema.updateOne({
                    guildId,
                    userId
                }, {
                    level,
                    xp
                })
            }
        } finally {
            mongoose.connection.close()
        }
    })
}

module.exports.addXp = addXP