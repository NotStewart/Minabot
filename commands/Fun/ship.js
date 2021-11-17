module.exports = {
    guildOnly: true,
    cooldown: '10s',
    category: 'Fun',
    description: 'Test your odds with someone else!',
    expectedArgs: "Target user's @ or id",
    callback: ({ message, args, client }) => {
        const Discord = require("discord.js");
        shipverdict = [
            "Not the slightest chance. You should give up.", //1-20
            "The risk of getting hit by lightning is greater than your ship.",//21-40
            "There is a great chance, you two would be considered love-birds",
            "You should get married soon!",
            "You may have already found your soulmate with this nearly perfect score",
            "Your fate has decided!"];
            shiptitle = [
            "God has given up on you. :black_heart::black_heart::black_heart::black_heart::black_heart:",
            "In other words, still no chance. :heart::black_heart::black_heart::black_heart::black_heart:",
            "You make an average pair. :heart::heart::black_heart::black_heart::black_heart:",
            "We're cool, I guess.. :heart::heart::heart::black_heart::black_heart:",
            "So cute!. :heart::heart::heart::heart::black_heart:",
            "You're a perfect match!. :heart::heart::heart::heart::heart:"
            ];
            shipcolor = [
            "0xec0e0e",//red
            "0xf38f09",//orange
            "0xfce405",//yellow
            "0xfce405",//yellow
            "0x1624da",//blue
            "0x28fa12"//green
            ];
            shipfooter = [
            "At least you're lonely and desperate!.",
            "Better luck next time!",
            "Trying really hard to find a partner won't end well!",
            "Who reads these",
            "You're perfect!",
            "Your luck is insane!"
            ];
        
            if (message.mentions.members.size<1) return message.channel.send({content: `Please mention two users to ship!`})
            if (message.mentions.members.size===3) return message.channel.send({content: `Sorry, a love triangle is not supported!`})
            if (message.mentions.members.size>3) return message.channel.send({content: `Sorry, polygamous and polyandric relationships are not supported!`})
            let sIndexer;
            let shipmeter = Math.floor(Math.random()*99)+1;
            if (shipmeter < 21){
            sIndexer = 0
            }else if ((shipmeter > 20)&&(shipmeter<41)){
            sIndexer = 1
            }else if ((shipmeter > 40)&&(shipmeter<61)){
            sIndexer = 2
            }else if ((shipmeter > 60)&&(shipmeter<81)){
            sIndexer = 3
            }else if ((shipmeter > 80)&&(shipmeter<100)){
            sIndexer = 4
            }else sIndexer = 5
            let shipembed = new Discord.MessageEmbed().setColor(shipcolor[sIndexer]).setFooter(shipfooter[sIndexer])
            if (message.mentions.members.size===1){
            shipembed.setAuthor(`${message.member.displayName.toString()} ships ${message.mentions.members.first().displayName.toString()}!`)
                .setDescription(`Ship Result: ${shiptitle[sIndexer].toString()}`)
                .addField(`Ship Percentage Meter: ${shipmeter.toString()}%`,shipverdict[sIndexer].toString())
            } else if (message.mentions.members.size===2){
            let otoko = message.mentions.members.first()
            let otome = message.mentions.members.last()
                shipembed.setAuthor(`${message.member.displayName.toString()} ships ${otoko.displayName.toString()} and ${otome.displayName.toString()}!`)
                .setDescription(`Ship Result: ${shiptitle[sIndexer].toString()}`)
                .addField(`Ship Percentage Meter: ${shipmeter.toString()}%`,shipverdict[sIndexer].toString())
            }
            console.log("Running the command: ship!")
            return message.channel.send({ embeds: [shipembed]}).catch(console.error)
            
    }
}
