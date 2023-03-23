//In bot.js
const token = "MTA4NTIxOTc1NTYyOTIyODA0Mg.GziSJe.GHekVm8fZc3qeJ2BvO43_6q-u6ZJPoS2fbGQ8w" //Token that you 
const { Client , IntentsBitField, roleMention } = require ('discord.js')
const client = new Client ({
    intents : [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent, 
    ]
})

client.on('messageC')

client.on('ready', (c) => {
    console.log(` ${c.user.username} vantaru ya yovvv!!!`);
})
  

client.on('messageCreate', (message) => {
    if (message.content === 'yo') {
        message.reply('Gommaaa!!')
    }
    if (message.content === 'karthare') {
        message.reply('Pocha saathinu irra PUNDA!!')
    }
})


//client.on('reply', (roleMention) => {
    //if(message.roleMention == user.client){
    //    console.log('Hey YOU!! Yes YOU!!')
  //  }
//})

//client.reply('hi', (r) => {
  //  if(message.conten === 'hello'){
    //    console.log('helloo')
    //}
//})


client.login(token);
