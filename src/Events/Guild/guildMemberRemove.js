const { EmbedBuilder } = require("@discordjs/builders");
const { GuildMember } = require("discord.js");


module.exports = {
  name: "guildMemberRemove",
  /**
   * @param {GuildMember} member
   */
  execute(member) {
    const {user, guild} = member;
    const memberLogs = member.guild.channels.cache.get('1008752273012314233');
    const leaveMessage = `<@${member.id}> left! It was nice having you around.`;
    
    const leaveEmbed = new EmbedBuilder()
    .setTitle('**:x: Member Left :x: **')
    .setColor(0xf54242)
    .setDescription(leaveMessage)
    .addFields(
      { name:'Total member count:', value: `${guild.memberCount}` }
    )
    .setThumbnail('https://cdn.discordapp.com/attachments/754370302279942356/1008371801530847293/kajdev.png')
    .setTimestamp();

    memberLogs.send({embeds: [leaveEmbed]});
    console.log(`${member.id} left the guild.`)
  },
};
