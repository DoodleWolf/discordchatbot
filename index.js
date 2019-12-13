const Discord = require('discord.js');
const bot = new Discord.Client();

const token = "NTkyMzAxNTgxMTE0OTMzMjc0.XRHgtQ.G0O3ouA5WbcpSQ5eGPU5eUBuGFE";
const PREFIX = '!';


 bot.once('ready', () => {
   console.log('online');
 });

 bot.on('message', (msg) => {
   if(msg.content === "ping"){
     msg.channel.send('pong');
   }
 });

 bot.login(token);
