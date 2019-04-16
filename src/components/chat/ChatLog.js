import React from 'react';
import './ChatLog.css';

export default function ChatLog (props){
  // console.log(props.addInfo)
  const getName =(id)=>{
    const person = props.addInfo.find(person=> person.id === id)
    
    return (
      `
      <div>${person.name}</div>
      <img src=${person.avatar} />
      `
    )
  }
 
  const entryLog = props.log.map(logEntry => {
    return (
    <li key={logEntry.timestamp}>
      <div>
        {/* <div>{getName(logEntry.particiantId)}</div> */}
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