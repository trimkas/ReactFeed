import React, { Component } from 'react';
import logo from './logo.png';
import ItemBox from './ItemBox';
import './App.css';



class App extends Component {
  
  render() {
    const bgstyle = {
        red: {
            background: '#cf2e2e'
        },
        yellow: {
            background: '#f1eb52'
        },
        green: {
            background: '#75b85b'
        },
        blue: {
            background: '#547dc0'
        }
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="description">Lumbardhi is a former cinema, a civic space and 
            an independent cultural institution based in 
            Prizren, Kosovo.</p>
        </header>

        <ItemBox 
          title= 'event 1' 
          description='event i mbajtur javen e kaluar'
          logoUrl= {'https://picsum.photos/350/200/?image=20 '}
          boxStyle = {bgstyle.red}
        />

        <ItemBox 
          title= 'event 2' 
          description='event i mbajtur ne janar'
          logoUrl= {'https://picsum.photos/350/200/?image=32 '}
          boxStyle = {bgstyle.yellow}
        />

        <ItemBox 
          title= 'event 3' 
          description='event i mbajtur ne janar'
          logoUrl= {'https://picsum.photos/350/200/?image=2 '}
          boxStyle = {bgstyle.green}
        />

        <ItemBox 
          title= 'event 4' 
          description='lorem ipsum'
          logoUrl= {'https://picsum.photos/350/200/?image=7 '}
          boxStyle = {bgstyle.blue}
        />

      </div>
    );
  }
}

export default App;
