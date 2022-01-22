const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("running");

})

app.get("/", (req , res) => {
  res.send("hi")
})

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("messageCreate", message => {
  if(message.content === ("!ping") {
     message.channel.send("pong")
  }
})

client.login("YOUR-BOT-TOKEN")
