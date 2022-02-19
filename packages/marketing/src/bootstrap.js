import ReactDOM from 'react-dom'
import React from 'react';
import {createMemoryHistory, createBrowserHistory} from 'history';

import App from './App';

const mount = (el, {onNavigate, defaultHistory}) => {
  const history = defaultHistory || createMemoryHistory();
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history}  />, el);

  return {
    onParentNavigate(location) {
      if(history.pathname !== location.pathname) {
        history.push(location.pathname);
      }
    }
  }
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_marketing-dev-root");
  if (el) {
    mount(el, {defaultHistory: createBrowserHistory()});
  }
}

export { mount };
