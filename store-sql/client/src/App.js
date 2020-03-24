import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//pages
import Login from './view/pages/Login/Login';
import Store from './view/pages/Store/Store';
import AddItems from './view/pages/AddITems/AddItems';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/add-items">Add Items</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
        </ul>

        <hr />

        {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path='/add-items'>
            <AddItems />
          </Route>
          <Route path='/store'>
            <Store />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
