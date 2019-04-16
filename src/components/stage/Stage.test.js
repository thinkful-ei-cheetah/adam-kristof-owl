import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage'
import renderer from 'react-test-renderer'  


describe('Stage Componenet working', ()=>{
  it('Renders to the page without crashing', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Stage  inStage={[]}/>, div)
    ReactDOM.unmountComponentAtNode(div)
  });
  
  it('Renders as it did the first time!', ()=>{
    const tree = renderer
    .create(<Stage inStage={[]}/>)
    .toJSON()
    expect(tree).toMatchSnapshot();
  });
});
