import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App participants={[]} chatData={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Renders as it did the first time!', ()=>{
  const tree = renderer
  .create(<App participants={[]} chatData={[]}/>)
  .toJSON()
  expect(tree).toMatchSnapshot()  
;
});