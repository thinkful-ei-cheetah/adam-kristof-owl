import React, { Component } from 'react';
import './App.css';
import Stage from './components/stage/Stage';
import ChatLog from './components/chat/ChatLog'
import ParticipantLog from './components/participants/ParticipantLog'

class App extends Component {
  state={
    showChat: false
  }

  render() {
    return (
      <div className="App">
        <div className="sidebar">
        {/* We'll need to know what button is pressed, participants or chat. depending we'll know if we should render chat or participation  */}
          <ChatLog/>
        </div>
        <div className="video-box">
          <Stage/>
        </div>
        {/* Bottom Bar can be another component made up of more components or flexbox? */}
        
      </div>
    );
  }
}

export default App;
