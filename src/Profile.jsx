import React, {Component} from 'react';
import './App.css'


class Profile extends Component{
  render(){
    {/*Here you are setting the default information of the artist to empty strings in case the information turns out null*/}
    let artist = {name: '', followers: {total: ''}, images: [{url: ''}], genres:[]}

    artist = this.props.artist !== null ? this.props.artist : artist

    return (
      <div className='Profile'>
        <img
          alt='Profile'
          className="Profile-images"
          src={artist.images[0].url}
        />
      <div className='Profile-info'>
        <div className="Profile-name">{artist.name}</div>
        <div className='Profile-followers'>{artist.followers.total} followers</div>
        <div className='Profile-genres'>
         {/*this is to map the genres and add commas between them, if it is the last genre of the array we simply add a & before the last one*/}
          {
            artist.genres.map((genre,index) => {
              genre = genre !== artist.genres[artist.genres.length-1] ? ` ${genre},` : ` & ${genre}`;
              return (
                 <span key={index}>{genre}</span>
               )
            })
          }
        </div>
      </div>
      </div>
    )
  }
}

export default Profile
