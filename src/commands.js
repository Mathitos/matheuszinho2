const command_key = '!'

const commands = (user, message) => {
  if (message.author.equals(user)) return

  if (!(message.content.substring(0, command_key.length) === command_key))
    return

  const args = message.content.substring(command_key.length).split(' ')

  switch (args[0].toLowerCase()) {
    case 'ping':
      message.channel.send('pong!')
      break
  }
}

export default commands
