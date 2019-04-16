import React from 'react';
import './ParticipantLog.css';


export default function ParticipationLog (props){
    console.log(props);
    const participants = props.participants.map(participant => {
        return (
          <li key={participant.id}>
            <div className='personContainer'>
              <img src={participant.avatar} alt={`avitar for ${participant.name}`} />
              <div className='personName'>
                <div>{participant.name}</div>
                <div>{participant.onStage ? 'on stage' : 'in session'}</div>
              </div>
            </div>
          </li>
        )
      })

    return (
        <div className="participentView">
            <ul>
                {participants}
            </ul>
        </div>
    )

}
