import React from 'react';
import './ChatLog.css';

export default function ChatLog (props){
  
  const getName =(id)=>{
    return props.addInfo.find(person=> person.id === id) 
  }


  const entryLog = props.log.map(logEntry => {
    return (
    <li key={logEntry.timestamp}>
      <div>
        <div>{getName(logEntry.particiantId).name}</div>
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