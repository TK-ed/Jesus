// importing the dependancies
import * as dotenv from 'dotenv'
dotenv.config()

import { Configuration, OpenAIApi } from 'openai'
import { Client , IntentsBitField } from 'discord.js'

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// dotenv files declaring
const key = process.env.KEY
const channel = process.env.CHANNEL_ID

// Login
client.on('ready', (c) => {
    console.log(` ${c.user.username} vantaru ya yovvv!!!`);
})

// Open AI configuration
const configuration = new Configuration({
  apiKey: key
})
const openai = new OpenAIApi(configuration);

// Main Function which is gon loop
client.on('messageCreate', async (message) => {
  if (message.author.bot) return
  if (message.channel.id !== channel ) return
  if (message.content.startsWith('!')) return

  let conversationLog = [{ role: 'system' , content: 'You are a funny bot. '}]

  conversationLog.push({
    role: 'user',
    content: message.content,
  })
  try {
    await message.channel.sendTyping();

    let prevMessages = await message.channel.messages.fetch({ limit: 15 });
    prevMessages.reverse();

    prevMessages.forEach((msg) => {
      if (message.content.startsWith('!')) return;
      if (msg.author.id !== client.user.id && message.author.bot) return;
      if (msg.author.id !== message.author.id) return;

      conversationLog.push({
        role: 'user',
        content: msg.content,
      });
    });

    const result = await openai
      .createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: conversationLog,
        // max_tokens: 256, // limit token usage
      })
      .catch((error) => {
        console.log(`OPENAI ERR: ${error}`);
      });

    message.reply(result.data.choices[0].message);
  } catch (error) {
    console.log(`ERR: ${error}`);
  }
});

client.on('messageCreate', (message) => {
  console.log(message)
})

client.on('messageCreate', (message) => {
      if (message.content === 'yo') {
          message.reply('Gommaaa!!')
      }
      if (message.content === 'ping') {
          message.reply('pong!!')
      }
  })
  

client.login(process.env.TOKEN);
