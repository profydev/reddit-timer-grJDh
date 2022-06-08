import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import App from './App';

// import './normalize.css';
import './index.css';

const Root = () => (
  <>
    <Normalize />
    <App />
  </>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
