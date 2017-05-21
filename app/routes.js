/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import CrypterPage from './containers/CrypterPage';
import PoloniexPage from './containers/PoloniexPage';

export default () => (
  <Router>
    <App>
      <Switch>
        <Route path="/counter" component={CounterPage} />
        <Route path="/crypter" component={CrypterPage} />
        <Route path="/poloniex" component={PoloniexPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </App>
  </Router>
);
