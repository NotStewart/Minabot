//  response deleter from bot
message.reply(`xyz`).then((message) => {
    message.delete({
        timeout: 1000 * 5
    })
})

const ticketchannel = bot.channels.cache.get(TicketChannelID)
                message.channel.send("Your ticket has been sent! Expect a reply shortly.")
                
                ticketchannel.send(ticketembed)

bot.on('guildDelete', guild =>{
    const channelId = '800183880626733076';
    const logchannel = bot.channels.cache.get(channelId); //This Gets That Channel
    const serverowner = guild.owner.user; //This Gets The Guild Owner
    if(!serverowner) {
        serverowner = "Not sure, I was kicked :("
    }
    if(!logchannel) return;  //If the channel is invalid it returns
    const leaveembed = new Discord.MessageEmbed()
        .setTitle('I Left A Guild!')
        .setDescription(`**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}\n**Owner:** ${serverowner.tag}`)
        .setTimestamp()
        .setColor('RED')
        .setFooter(`I'm In ${bot.guilds.cache.size} Guilds Now!`);
    logchannel.send(leaveembed);
});


// Get the user's platform
const platform = Object.keys(user.presence.clientStatus)[0];

//sets the bot's platform to phone
const bot = new Discord.Client({ ws: { properties: { $browser: "Discord Android" }} })