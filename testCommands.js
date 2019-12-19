const Discord = require("discord.js");
const fs = require('fs');

const client = new Discord.Client();

// const config = require('./auth.json');

var channel = null;
var finished = 0;
var beQuietFiles = ['./BeQuietPlease1.mp3', './BeQuietPlease2.mp3', './BeQuietPlease3.mp3', './BeQuietPlease4.mp3'];
var file = beQuietFiles[Math.floor(Math.random()*4)];


client.on('message', msg => {
  if (msg.content.startsWith('$sicc')) {
    const vChannel = msg.member.voiceChannel;
    // if (!msg.guild) {
    //   return msg.reply('no private service is available in your area at the moment. Please contact a service representative for more details.');
    // }
    // const voiceChannel = msg.guild.channels.find("name", channelName.join(" "));
    // //console.log(voiceChannel.id);
    if (!vChannel || vChannel.type !== 'voice') {
      return msg.reply(`You're not in a channel.`);
    }      
    channel = vChannel;
    vChannel.join()
  //   .then(connection => {
  //   	connection.on("speaking", (user, speaking) => {
	 //    	if (finished == 0 && speaking){
	 //    	finished == 1;
	 //    	channel.join().then(connection => {
	 //    		file = beQuietFiles[Math.floor(Math.random()*4)];
		//     	console.log(file);
		// 		const dispatcher = connection.playFile(file);
		// 		dispatcher.on("end", () => {finished == 0;});

		// 		// console.log(finished);
	 //    	}).catch(err => console.log(err));
  //   	// console.log(finished);
		// }
  //   }
  //   }).catch(err => console.log(err))
    ;
  }
  if(msg.content.startsWith('$leave')) {
  	if (channel !== null){
  		channel.leave();
  		channel = null;
  	}
  }
});

client.on('guildMemberSpeaking', (user, speaking) => {
    if (finished == 0 && speaking){
    	finished == 1;
    	channel.join().then(connection => {
    		file = beQuietFiles[Math.floor(Math.random()*4)];
	    	console.log(file);
			const dispatcher = connection.playFile(file);
			dispatcher.on("end", () => {finished == 0;});

			// console.log(finished);
    	}).catch(err => console.log(err));
    	// console.log(finished);
	}
})

client.login('NjU1MTc3ODI1MTYyMzYyODky.XflONg.bKLgAHmvuevNwWbQt6B1aTgbNTc');

client.on('ready', () => {
  console.log('ready!');
});