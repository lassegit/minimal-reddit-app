import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyles from './utils/GlobalStyles';
import Home from './containers/Home';
import Posts from './containers/Posts';
import store from './redux';
import * as serviceWorker from './utils/serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/r/:id" component={Posts} />
        <Route path="*" component={Home} />
      </Switch>
    </HashRouter>
    <GlobalStyles />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
