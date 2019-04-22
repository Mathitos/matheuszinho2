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
    voiceChannel
      .join()
      .then(connection => {
        play(connection)
      })
      .catch(console.error)
  }
}

async function play(connection) {
  const url = 'https://www.youtube.com/watch?v=jDCOPqWt58c'
  const streamOptions = { seek: 0, volume: 1 }

  const audioStream = await ytdl(url, { filter: 'audioonly' })

  const dispatcher = connection.playFile(
    '../resources/christina-grimmie-singing-demons-by-imagine-dragons.mp3',
  )

  dispatcher.on('debug', info => console.log(info))

  dispatcher.on('end', reason => {
    console.log(reason)
    connection.disconnect()
  })

  dispatcher.on('error', console.error)
}
