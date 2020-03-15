const Discord = require("discord.js");
const client = new Discord.Client();
var prefix ="!";

client.login("Njg4NDAxNzMzMTUxMzU5MDYz.XmzyJA.wE9KSIZpwDQWM3dLajLsL9SYglw");
const uneCommande = '!abc '

client.on("message",message =>{
    if(!message.guild){return}
    if(message.content === "bonjour"){
        message.channel.send("Bonjour ! " + message.author.username + "!")
    }

    if(message.content === "tamere"){
        message.channel.send("nick ta mère " + message.author.username +"  cordialement")
    }
  
    if(message.content === "super"){
        message.channel.send("bien jouer");
        message.channel.send();
    }
    if(message.content === "g"){
        message.channel.send("/tts g");
        message.channel.send();
    }

    if(message.content === "dm"){
        message.author.send("tu veut voir mon cauqu'un");
    }

    if(message.content === "img"){
        message.channel.send({files:["https://www.muesdesign.com/wp-content/uploads/2015/04/TRY_ORANGE.jpg"]})
    }
    
    if(message.content === "!bonjour"){
        message.channel.send("bonjour")
    }

      
})  

