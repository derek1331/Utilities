import React, { Component } from 'react';
import './App.css';
import Calculator from './components/calculator'
import Search from './components/search'
import Header from './components/header'
import ButtonColorChanger from './components/buttonColorChanger'
import Includes from './components/includes'
import VideoPlayer from './components/videoPlayer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <VideoPlayer></VideoPlayer>
      </div>
    );
  }
}

export default App;
