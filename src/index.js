import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import GlobalStyles from './utils/GlobalStyles';
import Home from './containers/Home';
import Posts from './containers/Posts';
import store from './redux';
import * as serviceWorker from './utils/serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/r/:id" component={Posts} />
      </Switch>
    </Router>
    <GlobalStyles />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
