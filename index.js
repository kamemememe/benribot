require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const ADMIN_IDS = process.env.ADMIN_IDS.split(",").map(id => id.trim());
const GUILD_IDS = process.env.GUILD_IDS.split(",").map(id => id.trim());

client.once("ready", () => {
  console.log(`✅ ${client.user.tag} is online!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.login(process.env.DISCORD_TOKEN);
