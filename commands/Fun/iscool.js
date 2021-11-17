module.exports = {
    guildOnly: true,
    cooldown: '10s',
    aliases: ['ic'],
    category: 'Fun',
    description: 'Mina will say whether someone is cool or not',
    minArgs: 0,
    maxArgs: 1,
    expectedArgs: "Target user's @ or id",
    SyntaxError: 'Please use "{PREFIX}reputation {ARGUMENTS}"',
    callback: ({ message, args, client}) => {
                var person = message.mentions.users.first() || client.users.cache.find(user => user.id === args[0]) || message.author
                if(person.id == "494355857694261268") return message.channel.send({content: "Jae is definitely not cool."}); /*pesonalized responses*/
                else if(person.id == "105328521781452800") return message.channel.send({content: "Kami is definitely cool"});
                else if(person.id == "124860233066479617") return message.channel.send({content: "Hiso is literally the kindest person ever."});
                else if(person.id == "188418687693357057") return message.channel.send({content: "Strom is pretty cool."});
                else if(person.id == "392499154414206977") return message.channel.send({content: "Sean is the homie."});
                else if(person.id == "222982746123796480") return message.channel.send({content: "Sungsta is an old man."});
                else if(person.id == "145764790046818304") return message.channel.send({content: "Rave can be cool sometimes"});
                else if(person.id == "87427618554519552") return message.channel.send({content: "Rich is too busy grinding valorant to be cool"});
                else if(person.id == "358975513852772364") return message.channel.send({content: "Sam is the best teacher."});
                else if(person.id == "335253472981155842") return message.channel.send({content: "Lia bot is cooler than math"});
                else if(person.id == "192108623701213184") return message.channel.send({content: "Jtactical will be cool once he stops hopping"});
                else if(person.id == "593971375501344780") return message.channel.send({content: "Penelope is cool when he's not playing Genshin Impact"});
                else if(person.id == "193962293342502912") return message.channel.send({content: "Dan is definitely the best."})
                else if(person.id == "462041896940863498") return message.channel.send({content: "Horizons unnie!"})
                else if(person.id == "625580054654615562") return message.channel.send({content: "Yuwuli is very cute."})
                else if(person.id == "413134047385223174") return message.channel.send({content: `${client.emojis.cache.find(emoji => emoji.name === "bigsweaterenergy1")}`});
                else if(person.id == "232845644350488576") return message.channel.send({content: `${client.emojis.cache.find(emoji => emoji.name === "aliagroove")}`});
                else if(person.id == "152918467660480512" || person.id == "177527308419072000" || person.id == "313194376815706112" || person.id == "250789717719777299" || person.id == "202677278637948928" || person.id == "185572003497902080" || person.id == "242693007453847552"){
                    return message.channel.send({content: "Sweater gang is always cool."});
                }
                else{
                var roll = (Math.floor)(Math.random()*9 + 1); /*random responses, .random()x + 1 x equals amount ofresponses available.*/
                    if (roll == 1){
                        message.channel.send({content: `${person.username.toString()} is cool I guess.`})
                        return;
                    }
                    if  (roll == 2){
                        message.channel.send({content: `${person.username.toString()} is sometimes cool.`})
                        return;
                    }
                    if (roll == 3){
                        message.channel.send({content: `${person.username.toString()} isn't cool.}`})
                        return;
                    }
                    if (roll == 4){
                        message.channel.send({content: `${client.emojis.cache.find(emoji => emoji.name === "aminasus")}`})
                        return;
                    }
                    if (roll == 5){
                        message.channel.send({content: `${client.emojis.cache.find(emoji => emoji.name === "aminatilt")}`})
                        return;
                    }
                    if (roll == 6){
                        message.channel.send({content: `${client.emojis.cache.find(emoji => emoji.name === "aminanod")}`})
                        return;
                    }
                    if (roll == 7){
                        message.channel.send({content: `Ask ${'🍲'} about ${person.username.toString()}, I don't want to talk about them.`})
                        return;
                    }
                    if (roll == 8) {
                        message.channel.send({content: `글쎄, 근데 갯마을 차차차 봤니?`})
                    }
                    else{
                        message.channel.send({content: `Ask me again later.`});
                        message.channel.send({content: `${client.emojis.cache.find(emoji => emoji.name === "aminano")}`})
                        return;
                    }  
                }
                console.log("Running the command: iscool!")
    }
}