import React from 'react';
import UserList from './components/UserList/UserList';
import UserExpanded from './components/UserExpanded/UserExpanded';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Redirect
          from="/"
          to="/home" />
        <Switch>
          <Route
            path="/home"
            component={UserList} />
          <Route
            exact
            path="/users/:id"
            component={UserExpanded} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
