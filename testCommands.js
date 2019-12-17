const Discord = require("discord.js");
const fs = require('fs');

const client = new Discord.Client();

// const config = require('./auth.json');

client.on('message', msg => {
  if (msg.content.startsWith('$sicc')) {
    let [command, ...channelName] = msg.content.split(" ");
    if (!msg.guild) {
      return msg.reply('no private service is available in your area at the moment. Please contact a service representative for more details.');
    }
    const voiceChannel = msg.guild.channels.find("name", channelName.join(" "));
    //console.log(voiceChannel.id);
    if (!voiceChannel || voiceChannel.type !== 'voice') {
      return msg.reply(`I couldn't find the channel ${channelName}. Can you spell?`);
    }
    var beQuietFiles = ['./BeQuietPlease1.mp3', './BeQuietPlease2.mp3', './BeQuietPlease3.mp3', './BeQuietPlease1.mp3'];      
    voiceChannel.join()
      .then(conn => {
        msg.reply('ready!');
        // create our voice receiver
        const receiver = conn.createReceiver();

        conn.on('speaking', (user, speaking) => {
          if (speaking) {
            const dispatcher = connection.playFile(beQuietFiles[Math.floor(Math.random()*4)]);
          }
        });
      })
      .catch(console.log);
  }
  if(msg.content.startsWith('$leave')) {
    let [command, ...channelName] = msg.content.split(" ");
    let voiceChannel = msg.guild.channels.find("name", channelName.join(" "));
    voiceChannel.leave();
  }
});

client.login("token");

client.on('ready', () => {
  console.log('ready!');
});