import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



//standard render call in the test app. or so I am told!
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
