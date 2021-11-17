module.exports = {
    guildOnly: true,
    ownerOnly: true,
    cooldown: '1s',
    expectedArgs: "<Target User's @/ID> [Reason]",
    permissions: ["KICK_MEMBERS"],
    category: 'Mod',
    description: "Clear's up to 100 messages in the spoken channel.",
    testOnly: true,
    callback: ({ message, args }) => {
        if (!message.guild.members.cache.get("768398477657899069").permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
            return message.channel.send({content: "I seem to be missing the required permissions to do that!"})
        }
         var messageArray = message.content.split(' ');
         let deleteAmount;
            if (isNaN(args[0]) || parseInt(args[0]) <= 0) { 
                return message.channel.send({content: "Please put a number only!"}) }
            if (parseInt(args[0]) > 100) {
                return message.channel.send({content: 'You can only delete 100 messages at a time!'})
            } else {
                deleteAmount = parseInt(args[0]);
            }

            message.channel.bulkDelete(deleteAmount, true);
            message.channel.send({content: `Successfully deleted ${deleteAmount.toString()} messages.`})
            console.log("Running the command: mute!")

    }
}