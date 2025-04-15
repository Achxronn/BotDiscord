import { Client, Events, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const waifu = ["Herta", "Acheron", "Zani", "Kafka"];

client.on(Events.ClientReady, (readyClient) => {
  console.log(`Logged in as ${readyClient.user.tag}!`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }

  if (interaction.commandName === "waifu") {
    await interaction.reply(waifu[Math.floor(Math.random() * waifu.length)]);
  }
});

client.login(process.env.DISCORD_TOKEN);

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("BOT ALIVE!!");
});

app.listen(port, () => {
  console.log(`Web server listening on port ${port}`);
});
