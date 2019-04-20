import Discord from 'discord.js'
import { CLIENT_SECRET_KEY } from './config'

const client = new Discord.Client()
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!')
  }
})
client.login(CLIENT_SECRET_KEY)
