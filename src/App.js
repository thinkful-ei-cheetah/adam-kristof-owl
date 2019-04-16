import React, { Component } from 'react';
import './App.css';
import Stage from './components/stage/Stage';
import ChatLog from './components/chat/ChatLog'
import ParticipantLog from './components/participants/ParticipantLog'

class App extends Component {
  state={
    showChat: false,
 
  }


  
  
  render() {
<<<<<<< HEAD
      const personId = this.props.participants.map(person=>{
=======

    
    const personId = this.props.participants.map(person=>{
>>>>>>> b98e81d05266ea0394ea8b61e757d395e615f769
      return {
        id: person.id,
        name: person.name,
        avatar: person.avatar
      }
    });
<<<<<<< HEAD
=======

>>>>>>> b98e81d05266ea0394ea8b61e757d395e615f769

    return (
      <div className="App">
        <div className="sidebar">
          <ParticipantLog participants={this.props.participants}/>
<<<<<<< HEAD
          <ChatLog log={this.props.chatData} addInfo={personId} />
=======
          <ChatLog log={this.props.chatData} addInfo= {personId}/>
>>>>>>> b98e81d05266ea0394ea8b61e757d395e615f769
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
