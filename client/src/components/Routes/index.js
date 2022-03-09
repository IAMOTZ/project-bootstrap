
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import LibraryComponents from '../../pages/Home/Library';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/'><Home /></Route>
      <LibraryComponents />
    </Switch>
  </Router>
);

export default Routes;