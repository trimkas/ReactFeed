import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Apitest from './apitest';


class App extends Component {
  
  render() {
    

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="description">Lumbardhi is a former cinema, a civic space and 
            an independent cultural institution based in 
            Prizren, Kosovo.</p>
        </header>

        <Apitest/>

      </div>
    );
  }
}

export default App;
