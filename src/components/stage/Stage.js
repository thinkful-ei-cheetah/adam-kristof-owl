import React from 'react';
import './Stage.css';

export default function Stage (props){
  console.log(props);
  const inStage = props.inStage.map(staged =>{
    return (
      <li key={staged.id}>
        <div>{staged.name}</div>
        <img src={staged.avatar}/>
      </li>
    )
  });

  return(
    <div className="vid">
      <ul>
        {inStage}
      </ul>
    </div>
  )

}