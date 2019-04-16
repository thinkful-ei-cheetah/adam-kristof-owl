import React from 'react';
import ReactDOM from 'react-dom';
import ChatLog from './ChatLog'
import renderer from 'react-test-renderer'  


describe('Chat Componenet working', ()=>{
  it('Renders to the page without crashing', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<ChatLog log={[]} addInfo={[]}/>, div)
    ReactDOM.unmountComponentAtNode(div)
  });
  
  it('Renders as it did the first time!', ()=>{
    const tree = renderer
    .create(<ChatLog log={[]} addInfo={[]}/>)
    .toJSON()
    expect(tree).toMatchSnapshot()  
  ;
  });
});
