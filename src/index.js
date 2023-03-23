const { Client } = require('discord.js');
const client = new Client({ intents: ['Guilds'] });

const dotenv = require('dotenv');
dotenv.config();

client.login(process.env.DISCORD_TOKEN).then(() => {
  console.log(`client logged as ${client.user.username}`);
  client.user.setActivity('Takoyaki 😡');
});
