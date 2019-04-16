import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import chatData from './testData/chatlog';
import participants from './testData/particpants'


ReactDOM.render(<App participants={participants} chatData={chatData}/>, document.getElementById('root'));

