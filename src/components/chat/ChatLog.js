import React from 'react';
import './ChatLog.css';

export default function ChatLog (props){


  const getName =(id)=>{
 
    const person = props.addInfo.find(person=> person.id === id) 
    return (
    <div>
      <img src={person.avatar} alt = {`img of ${person.name}`}/>
      <span>{person.name}</span>
    </div>
    )

  }


  const entryLog = props.log.map(logEntry => {
    return (
    <li key={logEntry.timestamp}>
      <div>
        <div>{getName(logEntry.participantId)}</div>

        <div>{logEntry.timestamp}</div>
      </div>
    </li>
    )
  })


  return (
    <div className ="ChatLog">
      <ul>
        {entryLog}
      </ul>
    </div>
  )


}