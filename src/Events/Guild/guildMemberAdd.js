const { EmbedBuilder } = require("@discordjs/builders");
const {GuildMember} = require("discord.js");

module.exports = {
  name: "guildMemberAdd",
  /**
   * @param {GuildMember} member
   */
  execute(member) {
    const {user, guild} = member;
    const memberLogs = member.guild.channels.cache.get('1008752273012314233');
    const welcomeMessage = `Welcome <@${member.id}> to **kajdev**! Let's make some stuff together!`;
    
    const welcomeEmbed = new EmbedBuilder()
    .setTitle('**:partying_face: New member :partying_face: **')
    .setColor(0x4ea3f7)
    .setDescription(welcomeMessage)
    .addFields(
      { name:'Total member count:', value: `${guild.memberCount}` }
    )
    .setThumbnail('https://cdn.discordapp.com/attachments/754370302279942356/1008371801530847293/kajdev.png')
    .setTimestamp();

    member.roles.add('1008745069223870484');
    memberLogs.send({embeds: [welcomeEmbed]});
    console.log(`${member.id} joined the guild.`)
  },
};
