const { Client } = require('discord.js');

module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`${client.user.tag} siap melayani!`);
    client.user.setActivity(`Takoyaki 😡`);
  },
};
