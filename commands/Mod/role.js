module.exports = {
    guildOnly: true,
    cooldown: '1s',
    minArgs: '1',
    expectedArgs: "<Target User's @/ID> [Reason]",
    permissions: ["BAN_MEMBERS"],
    category: 'Mod',
    description: "Gives or takes a user's role",
    callback: ({ message, client, args }) => {
        const Discord = require("discord.js");
        const { guild, member } = message;
        if (!member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
          message.reply({content: `You need permissions: \`MANAGE_ROLES\``});
          return;
        }
        if (!guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
          message.reply({content: `I need permissions: \`MANAGE_ROLES\``});
          return;
        } 
        if (message.member.roles.highest.position <= client
          .roles.highest.position) return message.reply({content: `I can't target this user because they are above me in the role list!`})
          
        let user = message.mentions.members.first();
        if (!user) {
          message.reply({content: `\`user\` is a required argument which is missing.`});
          return;
        }
        let roleName = args.splice(1).join(" ");
        let role =
          message.guild.roles.cache.find((r) => r.name === roleName) ||
          message.mentions.roles.first();
        if (!role) {
          message.reply({content: `\`role\` is a required argument which is missing.`});
          return;
        }
        try {
          if (user.roles.cache.has(role.id)) {
            user.roles.remove(role);
            message.channel.send(
              {content: `\`${user.user.username}\`'s \`${role.name.toString()}\` role has been removed.`
              });
          } else {
            user.roles.add(role);
            message.channel.send(
              {content: `\`${user.user.username}\` has now the \`${role.name.toString()}\` role!`
              });
          } 
        } catch (err) {
          console.error(err);
          message.reply({content: `Something's wrong... Check my role and position. Then check who you're trying to target.`});
          return;
        }
        console.log("Running the command: role!")    
    }
}