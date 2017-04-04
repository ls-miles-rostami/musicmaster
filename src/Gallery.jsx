import React, {Component} from 'react'
import './App.css'
// import react-bootstrap from 'react-bootstrap'


class Gallery extends Component{
  constructor(props){
    super(props)
    this.state = {
      playingURL: '',
      audio: null,
      playing: false
    }
  }

  playAudio(previewURL){
    // Audio is a native JavaScript object that allows for playing, pausing, and manipulation of sound files.
    // We will be checking to see which song is playing and the user can simply click on either song to pause and play
    let audio = new Audio(previewURL);
    if(!this.state.playing){
      audio.play();
      this.setState({
        playing: true,
        playingURL: previewURL,
        audio
      })
    } else{
      if(this.state.playingURL === previewURL){
        this.state.audio.pause();
        this.setState({
          playing: false
        })
      } else {
        this.state.audio.pause();
        audio.play()
        this.setState({
          playingURL: previewURL,
          playing: true,
          audio
        })
      }
    }
  }

  render(){
    const { tracks } = this.props
    return (
      <div>
        {tracks.map((track,index) => {
          console.log('track', track)
        const trackImg = track.album.images[0].url;
          return (
            <div key={index} className="Track" onClick={() => this.playAudio(track.preview_url)}>
              <img src={trackImg} className='Track-img' alt='track'/>
              <div className='Track-play'>
                <div className='Track-play-inner'>
                  {
                    this.state.playingURL === track.preview_url
                      ? <span>| |</span>
                      : <span>&#9654;</span>
                  }
                </div>
              </div>
              <p className='Track-text'>{track.name}</p>
            </div>
          )
      })}
    </div>
    )
  }
}

export default Gallery
