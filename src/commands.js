import djModule from './dj-module'

const command_key = '!'

const djBot = new djModule()

const commands = (user, message) => {
  if (message.author.equals(user)) return

  if (!(message.content.substring(0, command_key.length) === command_key))
    return

  const args = message.content.substring(command_key.length).split(' ')

  switch (args[0].toLowerCase()) {
    case 'ping':
      message.channel.send('pong!')
      break
    case 'play':
      if (!args[1])
        message.channel.send('You need to give me a link for your song...')
      if (!message.member.voice.channel)
        message.channel.send(
          'You need to be in a voice channel for me play your song...',
        )
      if (!message.guild.voiceConnection) {
        djBot.addToPlaylist(args[1])
        if (!djBot.isPlaying()) {
          djBot.connectToAudioChannel(message.member.voice.channel)
        }
      }
      break
  }
}

export default commands
