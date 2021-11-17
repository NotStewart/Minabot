const config = require('../../config.json'); // config is used to use the bots token as the authorisation
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js'); // to make it look better

module.exports = {
    name: 'banner',
    category: 'Information',
    description: 'Shows a users banner.',
    permissions: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'EMBED_LINKS'],
    cooldown: '5s',
    testOnly: false,

    callback: async ({ client, message, args }) => {
        const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

        let uid = user.id


        let response = fetch(`https://discord.com/api/v8/users/${uid}`, {
            method: 'GET',
            headers: {
                Authorization: `Bot ${config.token}` // Fit it to your config here
            }
        })

        let receive = ''
        let banner = 'https://cdn.discordapp.com/attachments/829722741288337428/834016013678673950/banner_invisible.gif'

        response.then(a => {
            if (a.status !== 404) {
                a.json().then(data => {
                    receive = data['banner']

                    if (receive !== null) {

                        let response2 = fetch(`https://cdn.discordapp.com/banners/${uid}/${receive}.gif`, {
                            method: 'GET',
                            headers: {
                                Authorization: `Bot ${config.token}` // Fit it to your config here
                            }
                        })
                        let statut = ''
                        response2.then(b => {
                            statut = b.status

                            banner = `https://cdn.discordapp.com/banners/${uid}/${receive}.gif?size=1024`
                            if (statut === 415) {
                                banner = `https://cdn.discordapp.com/banners/${uid}/${receive}.png?size=1024`
                            }

                        })
                    }
                })
            }
        })

        setTimeout(() => {
            let embed = new MessageEmbed()
                .setColor('PURPLE')
                .setImage(banner)
            message.channel.send({embeds: [embed]})
        }, 1000)
        console.log("Running the command: banner!")
    }
} 