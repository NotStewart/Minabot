module.exports = {
    cooldown: '10s',
    aliases: ['av'],
    category: 'Information',
    description: "Show's a user's avatar.",
    callback: ({ message, client, args }) => {
        var user = message.mentions.users.first() ||  client.users.cache.find(user => user.id === args[0]);
        if(typeof user == "undefined") /*if statement in case no one is mentioned, i.e. undefined*/
            {message.channel.send({content: `${message.author.displayAvatarURL({size: 4096, dynamic : true})}`});
        } 
        else
            message.channel.send({content: `${user.displayAvatarURL({dynamic : true})}`});
            console.log("Running the command: avatar!")
    }
}