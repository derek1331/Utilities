import React, { Component } from 'react';
import './App.css';
import Calculator from './components/calculator'
import Search from './components/search'
import Header from './components/header'
import ButtonColorChanger from './components/buttonColorChanger'
import Includes from './components/includes'
import VideoPlayer from './components/videoPlayer'
import CardReveal from './components/cardReveal'
import MusicPlayer from './components/musicPlayer'
import SalesForce from './components/salesForce'
import ListReview from './components/listReview'
import SillyGame from './components/sillyGame'
import IdeaMaker from './components/ideaMaker'

class App extends Component {
  render() {
    return (
      <div className="App">
        <IdeaMaker></IdeaMaker>
      </div>
    );
  }
}

export default App;
