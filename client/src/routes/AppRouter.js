import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Main from '../components/Main';
import Nomatch from '../components/404nomatch'; //404 page not foune



export const history = createHistory();

export const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path='/' component={Main} exact={true} />
        <Route component={Nomatch} exact={true}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
