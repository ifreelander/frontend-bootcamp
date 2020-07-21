import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Reviews from './Components/Reviews.js';
import Home from './Components/Home';
import NewReview from './Components/NewReview';

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
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/reviews" exact component={Reviews} />
            <Route path="/new" exact component={NewReview} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
