import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './js/App';
import CardSearch from './js/CardSearch';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CardSearch />, document.getElementById('root'));
registerServiceWorker();
