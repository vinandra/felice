const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require('discord.js');

const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember, Channel } = Partials;

const { loadEvents } = require('./Handlers/eventHandler');

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember],
});

// client.once('ready', () => {
//   console.log(`${client.user.tag} siap melayani!`);
// });

const dotenv = require('dotenv');
dotenv.config();

client.login(process.env.TOKEN).then(() => {
  loadEvents(client);
});
