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
      const personId = this.props.participants.map(person=>{
      return {
        id: person.id,
        name: person.name,
        avatar: person.avatar
      }
    });

    return (
      <div className="App">
        <div className="sidebar">
          <ParticipantLog participants={this.props.participants}/>
          <ChatLog log={this.props.chatData} addInfo={personId} />
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
