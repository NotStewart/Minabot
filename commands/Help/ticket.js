module.exports = {
    guildOnly: true,
    cooldown: '10s',
    category: 'Help',
    description: "Sends a ticket to Stew for help/suggestions!",
    callback: ({ message, client, args, text }) => {
                    const Discord = require("discord.js");
                    const TicketChannelID = '799929268011401226'
                var tickettext = text
                var sendingguild = message.guild.name
                if (!tickettext) {
                    tickettext = "No text submitted."
                }
                if (!message.member.nickname) {
                    message.member.nickname = "No nick"
                }
                var ticketembed = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("Open Ticket")
                .addField("Nickname", message.member.nickname.toString())
                .addField("User id", message.member.id.toString())
                .addField("Server", sendingguild.toString())
                .addField("User Text", tickettext.toString())
                .setThumbnail(message.member.user.displayAvatarURL({dynamic : true}))
                .setFooter(client.users.cache.get("244661945867698176").tag.toString())

                //below is the syntax to actually get a channel from an ID.
                const ticketchannel = client.channels.cache.get(TicketChannelID)
                message.channel.send({content: "Your ticket has been sent! Expect a reply shortly."})

                ticketchannel.send({embeds: [ticketembed]}).then(message => {
                    message.react('✅')
                })
                console.log("Running the command: ticket!")
    }
}