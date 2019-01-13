import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from '../components/Welcome'; //Home page
import Map from '../components/Map'; //map page
import Nomatch from '../components/404'; //404 page not foune



export const history = createHistory();

export const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/map' component={Map} exact={true} />
        <Route component={Nomatch} exact={true}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
