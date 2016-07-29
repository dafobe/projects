import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Home
import MainLayout from '../components/layouts/main-layout';
import Home from '../components/views/home';
//Pages
import giftsRoute from './route-gifts';
import categoriesRoute from './route-categories';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      {giftsRoute}
      {categoriesRoute}
      <Route path="*" component={Home} />
    </Route>
  </Router>
);
