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
    const ytdl = require('ytdl-core')
    const streamOptions = { seek: 0, volume: 1 }

    voiceChannel
      .join()
      .then(connection => {
        play(connection)
      })
      .catch(console.error)
  }
}

function play(connection) {
  const url = 'https://www.youtube.com/watch?v=jDCOPqWt58c'
  const streamOptions = { seek: 0, volume: 1 }

  const audioStream = ytdl(url, { filter: 'audioonly' })

  const dispatcher = connection
    .playStream(audioStream, streamOptions)
    .on('end', function() {
      console.log('acabou')
      // connection.disconnect()
    })
}
