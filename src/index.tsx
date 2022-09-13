import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css';
import { Auth0ProviderWithHistory } from './auth0-provider-with-history'
import { Home, NavBar, Profile, Dashboard } from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { firebaseConfig } from './firebaseConfig';


ReactDOM.render(
  <React.StrictMode>
    <Auth0ProviderWithHistory>
      <Router>
      <Switch>
        
        <Route exact path='/'>
          <NavBar />
          <Home />
        </Route>

        <Route exact path='/profile'>
          <NavBar />
          <Profile />
        </Route>

        <Route exact path='/dashboard'>
          <NavBar />
          <Dashboard />
        </Route>

      </Switch>
      </Router>
    </Auth0ProviderWithHistory>
  </React.StrictMode>,
  document.getElementById('root')
);


