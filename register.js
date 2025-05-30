import { REST, Routes } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "waifu",
    description: "Random ur waifu",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(
    Routes.applicationGuildCommands(
      process.env.Client_ID,
      process.env.Guild_ID
    ),
    {
      body: commands,
    }
  );

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
