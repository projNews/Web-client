import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const render = (Component: React.FC) => (
  ReactDOM.render(<Component />, document.getElementById('root'))
);

declare const module: any;

module.hot.accept('./components/App', () => {
  render(require('./components/App').default);
});

render(App);
