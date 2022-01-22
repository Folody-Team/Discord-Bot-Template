const express = require("express"); /*This is only for replit 
*/
const app = express();

app.listen(3000, () => {
  console.log("running");

})

app.get("/", (req , res) => {
  res.send("hi")
}) 
//If you are using Visual Studio Code try https://railway.app
const { Client, Intents } = require('discord.js'); //Require the discord.js package
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); // Require intents for discord API

client.on("messageCreate", message => { //The messageCreate is require if your bot need to send embed message
  if(message.content === ("!ping") { 
     message.channel.send("pong")
  }
})

client.login("YOUR-BOT-TOKEN")
