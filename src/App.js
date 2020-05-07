// only navbar and switch w/ routes
import React from 'react';
import './App.css';
// Router setup
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
    </>
  );
}

export default App;
