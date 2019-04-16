import React from 'react';
import './ChatLog.css';

export default function ChatLog (props){
  console.log(props);
  const entryLog = props.log.map(logEntry => {
    return (
    <li key={logEntry.timestamp}>
      <div>
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