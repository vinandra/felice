const {Client, ActivityType} = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  /**
   *
   * @param {Client} client
   */
  execute(client) {
    console.log(`${client.user.username} booted up.`);
  },
};
