module.exports = {
    guildOnly: true,
    cooldown: '1s',
    expectedArgs: "[Number between 1-100]",
    permissions: ["MANAGE_MESSAGES"],
    category: 'Mod',
    description: "Clear's up to 100 messages in the spoken channel.",
    callback: ({ message, args }) => {
         let deleteAmount;
            if (isNaN(args[0]) || parseInt(args[0]) <= 0) { 
                return message.channel.send({content: "Please put a number only!"}) }
            if (parseInt(args[0]) > 100) {
                return message.channel.send({content: 'You can only delete 100 messages at a time!'})
            } else {
                deleteAmount = parseInt(args[0]);
                deleteAmount = deleteAmount + 1
            }

            message.channel.bulkDelete(deleteAmount, true);
            message.channel.send({content: `I've deleted ${deleteAmount.toString()} messages `})
            console.log("Running the command: clear!")
            
    }
}