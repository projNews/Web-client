import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const render = (Component: React.FC) => (
  ReactDOM.render(<Component />, document.getElementById('root'))
);

declare const module: any;

module.hot.accept('./App', () => {
  render(require('./App').default);
});

render(App);
