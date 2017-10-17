import React from 'react';
import ReactDOM from 'react-dom';

//css 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import './App.css'


//imports from this project
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//rendering agent, calls app.js to render in order app.js determines
ReactDOM.render(
    <App />, document.getElementById('root')
);




registerServiceWorker();
