import ytdl from 'ytdl-core'

export default class DjModule {
  constructor(user) {
    this.user = user
    this.playlist = []
    this.dispatcher = null
    this.audioConfig = { seek: 0, volume: 0.25 }
  }

  isPlaying() {
    return this.dispatcher ? true : false
  }

  addToPlaylist(url) {
    this.playlist.push(url)
  }

  connectToAudioChannel(voiceChannel) {
    const thisBot = this
    voiceChannel
      .join()
      .then(connection => {
        play(connection, thisBot)
      })
      .catch(console.error)
  }
}

async function play(connection, bot) {
  const streamOptions = { seek: 0, volume: 1 }

  const audioStream = await ytdl(bot.playlist[0], { filter: 'audioonly' })

  const dispatcher = connection.play(audioStream)

  dispatcher.on('finish', reason => {
    console.log(`disconect from voice: ${reason}`)
    bot.playlist.shift()
    if (bot.playlist[0]) play(connection, bot)
    else connection.disconnect()
  })
  dispatcher.on('error', console.error)
}
