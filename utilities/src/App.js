import React, { Component } from 'react';
import './App.css';
import Calculator from './components/calculator'
import Search from './components/search'
import Header from './components/header'
import ButtonColorChanger from './components/buttonColorChanger'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonColorChanger></ButtonColorChanger>      
      </div>
    );
  }
}

export default App;
