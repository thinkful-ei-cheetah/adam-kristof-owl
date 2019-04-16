import React from 'react';
import ReactDOM from 'react-dom';
import ParticipantLog from './ParticipantLog'
import renderer from 'react-test-renderer'  


describe('Participant Componenet working', ()=>{
  it('Renders to the page without crashing', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<ParticipantLog  participants={[]}/>, div)
    ReactDOM.unmountComponentAtNode(div)
  });
  
  it('Renders as it did the first time!', ()=>{
    const tree = renderer
    .create(<ParticipantLog participants={[]}/>)
    .toJSON()
    expect(tree).toMatchSnapshot()  
  ;
  });
});
