import React from 'react';
import ReactDOM, {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function HelloWorld() {
  return <h1>Hello World!</h1>
}

render(<HelloWorld/>, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();