import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import New from './Components/New.js';
import List from './Components/List.js';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <header className="nav">
          <Link to="/" className="navItem">
            Home
          </Link>
          <Link to="/new" className="navItem">
            New
          </Link>
        </header>
      </div>

      <Switch>
        <Route path="/" exact component={List}></Route>
        <Route path="/new" exact component={New}></Route>
      </Switch>
    </Router>
  );
}

export default App;
