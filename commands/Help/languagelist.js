module.exports = {
    //bot owner check
    ownerOnly: false,
    //guild only check (not dms)
    guildOnly: false,
    // cooldowns for commands
    //cooldown: '60s',

    // global cooldowns
    // min is 1 minute

    //sets the category
    category: 'Help',
    description: 'Shows Minabots supported permissions',
    //sets min amount of arguments
    minArgs: 0,
    //sets maximum amount of arguments, -1 is infinite
    maxArgs: 0,
    //sets a syntax error specifcally for this command
   // syntaxError: 'Bad syntax!',
   //permission checks
    callback: ({ message }) => {
        message.channel.send({content: "English, Spanish, Russian, German, Portugese are support by default."})
        message.channel.send({content: "For full command support, the current languages supported are: English"})
        console.log("Running the command: languagelist!")
    }
}