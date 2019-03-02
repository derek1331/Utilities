import React from 'react';
import './musicPlayer.css';

let song;

class MusicPlayer extends React.Component{

    playMusicFile = () => {
        let file = document.getElementById("inputMusicPlayer")
        let temp = document.getElementById("sourceMusicPlayer")
        song = file.files
        console.log(song)
    }
    
    render() {
        return(
            <div>
                <input type="file" className="inputMusicPlayer" id="inputMusicPlayer" accept=".mp3" onChange={this.saveSong}/>
                <button className="buttonMusicPlayer" id="buttonMusicPlayer" onClick={this.playMusicFile}>Submit</button>
                <audio controls className="audioMusicPlayer" id="audioMusicPlayer">
                    <source className="sourceMusicPlayer" id="sourceMusicPlayer" src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>

            </div>
        )
    }
}

export default MusicPlayer;