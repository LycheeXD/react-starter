import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import TestRoute from './components/TestRoute';
import FourOhFour from './components/FourOhFour';

const AppRouter = (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/test" component={TestRoute} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;