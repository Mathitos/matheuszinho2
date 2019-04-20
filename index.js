import Discord from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()
const Matheuszinho = new Discord.Client()

Matheuszinho.on('ready', () => {
  console.log('Oi, estou pronto para ajudar meus amiguinhos!!!')
  Matheuszinho.user.setActivity('Quero Ajudar')
})
Matheuszinho.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!')
  }
})

Matheuszinho.login(process.env.CLIENT_SECRET_KEY)
