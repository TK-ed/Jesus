//In bot.js
const token = "" //Token that you 
const { Client , IntentsBitField } = require ('discord.js')
const client = new Client ({
    intents : [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})


client.on('ready', (c) => {
    console.log(` ${c.user.username} vantaru ya yovvv!!!`);
})
  

client.on('messageCreate', (message) => {
    if (message.content === 'yo') {
        message.reply('Gommaaa!!')
    }
    if (message.content === 'boxt') {
        message.reply('Pocha saathinu irra PUNDA!!')
    }
})

client.login(token);
