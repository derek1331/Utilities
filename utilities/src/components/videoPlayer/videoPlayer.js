import React from 'react';
import './videoPlayer.css';

class VideoPlayer extends React.Component{

    state = {
        video: '',
        videoSite: '',
        // videoResults: {},
        videoSearch: ''
    }

    //*
   removeChildren = (node) => {
        var last;
        while (last = node.lastChild) node.removeChild(last);
    }

    searchVideo = (e) => {
        const divVideoResults = document.getElementById('divVideoResults')
        this.removeChildren(divVideoResults)
        fetch(`https://api.dailymotion.com/videos?search=${this.state.videoSearch}&fields=embed_url,embed_html,title,description,duration,thumbnail_480_url`)
        .then(res => res.json())
        .then(res => {            
            let resultsArray = res.list
            resultsArray.forEach(element => {
                let createDiv = document.createElement('div')
                let createSpan = document.createElement('span')
                let createbutton = document.createElement('button')
                let createThumbnail = document.createElement('img')
                let createBreak = document.createElement('br')
                createSpan.textContent = element.title
                createThumbnail.setAttribute('src', element.thumbnail_480_url)
                createThumbnail.setAttribute('video', element.embed_url)
                createThumbnail.onclick = this.selectVideo
                createbutton.setAttribute('value', element.embed_url)
                createThumbnail.width = '360'
         
                // createbutton
                createDiv.appendChild(createSpan)
                createDiv.appendChild(createBreak)
                createDiv.appendChild(createThumbnail)
                divVideoResults.appendChild(createDiv)
                console.log(element)
            });
            // this.setState({
            //     videoResults: res
            // })
        })
        .catch(error => console.log(error))
    }

    selectVideo = (e) => {
        // get value of video delected
        const videoElement = e.target
        const video = videoElement.getAttribute('video')
        this.setState({
            video 
        })
        console.log(this.state.video);
        
    }

    playVideo = () => {
        const video = document.getElementById('video')
        video.play()
    }

    sitePicker = (e) => {
        const videoSite = e.target.value
        this.setState = ({
            videoSite
        })
        console.log(videoSite)
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value
        this.setState({
            [name]: value
        })        
    }
    

    render() {
        return(
            <div className='videoMain' id='videoMain'>
                <input name ='videoSearch' className='inputVideoSearch' id='inputVideoSearch' onChange={this.handleInputChange} onClick={this.searchVideo}></input>
                <button onClick={this.searchVideo} className='buttonVideoSearch' id='buttonVideoSearch'>Search</button>
                {/* <button className='buttonVideoSearch' id='buttonVideoSearch' onClick={this.sitePicker} value={`https://api.dailymotion.com/videos?search=${this.state.videoSearch}&fields=embed_url,duration,description,thumbnail_480_url,title,allow_embed`}>Dailymotion</button> */}
                <br></br>
                <div className='divVideoResults' id='divVideoResults'>
                        
                </div>
                <iframe  frameBorder="0" allowFullScreen allow="autoplay" className='video' id='video' width='320' height='240' src={this.state.video}>

                </iframe>
            </div>
        )
    }
}

export default VideoPlayer;