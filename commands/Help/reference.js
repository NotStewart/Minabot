module.exports = {
    //bot owner check
    ownerOnly: true,
    //guild only check (not dms)
    guildOnly: true,
    // cooldowns for commands
    //cooldown: '60s',

    // global cooldowns
    // min is 1 minute

    //sets the category
    category: 'Help',
    description: 'Shows the reference docs',
    //sets min amount of arguments
    minArgs: 0,
    //sets maximum amount of arguments, -1 is infinite
    maxArgs: 0,
    //sets a syntax error specifcally for this command
   // syntaxError: 'Bad syntax!',
   //permission checks
    callback: ({message}) => {
        message.channel.send({content: "https://docs.wornoffkeys.com/"})
        console.log("Running the command: reference!")
    }
}