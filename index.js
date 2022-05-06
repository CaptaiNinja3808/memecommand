
require('events').EventEmitter.prototype._maxListeners = 100;

const Discord = require('discord.js')

//Meme

const randomPuppy = require('random-puppy');
const { disconnect } = require('process');
const { domainToASCII } = require('url');

client.on("message", async message => {
    if(message.content.startsWith("?meme")){
const subReddits = ["meme", "me_irl", "Memes", "MemeEconomy", "Memes_Of_The_Dank", "dankmemes"]
const random = subReddits[Math.floor(Math.random() * subReddits.length)];
const img = await randomPuppy(random);
const embed = new Discord.MessageEmbed()
.setImage(img)
.setTitle(`Meme from ${random}`)
.setURL(`http://reddit.com/${random}`)
.setColor("RANDOM")
.setTimestamp()
.setThumbnail("https://www.hashtagmenow.com/img/tag/meme.png")

message.channel.send(embed)
    }
})
