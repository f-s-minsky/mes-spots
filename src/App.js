import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Users from './users/pages/Users';
import NewSpot from './spots/pages/NewSpot';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Users />
        </Route>
        <Route path='/spots/new'>
          <NewSpot />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
