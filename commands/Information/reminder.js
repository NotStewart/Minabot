const momentTimezone = require('moment-timezone')
const { MessageCollector } = require('discord.js')

const reminderSchema = require('../../schemas/reminder-schema.js')

module.exports = {
    permissions: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'EMBED_LINKS'],
    expectedArgs: '<YYYY/MM/DD> <HH:MM> <"AM" or "PM">',
    category: 'Information',
    description: 'Sets a reminder for Mina to remind you later! All times are in Eastern Standard Time!',
    minArgs: 3,
    maxArgs: 4,
    SyntaxError: 'Please use {PREFIX}reminder {ARGUMENTS}',
    testOnly: true,
    init: (client) => {
        const checkForPosts = async () => {
          const query = {
            date: {
              $lte: Date.now(),
            },
          }

            const results = await reminderSchema.find(query)

            for (const post of results) {
                const { User, content } = post

            console.log(`Sending a reminder to ${User}`)
            client.users.cache.get(User).send({content: `You wanted me to remind you about: ${content}`})
            }
 
            await reminderSchema.deleteMany(query)

            setTimeout(checkForPosts, 1000 * 10) // check every 60 seconds
        }

        checkForPosts()
    },

    callback: async ({ message, args, client }) => {
        const { channel } = message

        const [date, time, clockType] = args
        const timeZone = "America/New_York"

        if (clockType !== 'AM' && clockType !== 'PM') {
            message.reply({content: `You must provide either "AM" or "PM", you provided "${clockType}"`})
            return
        }
        console.log(clockType)

        const validTimeZones = momentTimezone.tz.names()
        if (!validTimeZones.includes(timeZone)) {
            message.reply({content: 'Unknown Timezone! Please use one of the following: <https://gist.github.com/AlexzanderFlores/d511a7c7e97b4c3ae60cb6e562f78300>'})
            return
        }
        console.log(timeZone)

        const targetDate = momentTimezone.tz(
            `${date} ${time} ${clockType}`,
            'YYYY-MM-DD HH:mm',
            timeZone
        )

        message.channel.send({content: 'Please send whatever message you want to be reminded of! Remember that all times are in Eastern Standard Time! This does not support images.'})

        const filter = (newMessage) => {
            return newMessage.author.id === message.author.id
        }

        const collector = new MessageCollector(channel, {filter, 
            max: 1,
            time: 1000 * 30 // 30 seconds
        })

        collector.on('end', async (collected) => {
        const collectedMessage = collected.first()

        if (!collectedMessage) {
            message.reply({content: `You did not reply in time!`})
            return
        }

        message.channel.send({content: `Your reminder has been scheduled!`})

        //database stuff
        console.log(targetDate.valueOf())

    await new reminderSchema({
        date: targetDate.valueOf(),
        content: collectedMessage.content,
        User: message.author.id,
    }).save()
        })

    }
}