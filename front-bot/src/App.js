import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './config/routes.js';
import './App.scss';

function App() {
  return (
    <Router>
        <Switch>
          {
            routes.map((route,index) => (
              <RouteWithSubRoutes key={index} {...route}/>
            ))
          }
        </Switch>
    </Router>
  );
}
function RouteWithSubRoutes(route){
    return(
      <Route
        path={route.path}
        exact={route.exact}
        render={props => <route.component route={route.routes} {...props} />}
      />
    )
}

export default App;
