import DiscordJS, { GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
const { token } = require('./config.json');
dotenv.config();

const client = new DiscordJS.Client({
  intents: [GatewayIntentBits.Guilds],
});

client.on('ready', () => {
  console.log('haik Master!');
});

client.login(token);
