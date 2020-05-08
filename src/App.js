// only navbar and switch w/ routes
import React from 'react'
import './App.css'
// Router setup
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Cabins from './pages/Cabins'
import About from './pages/About'
import SingleCabin from './pages/SingleCabin'
import Error from './pages/Error'

function App() {
  return (
    <>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cabins/" exact component={Cabins} />
      <Route path="/about/" exact component={About} />
      <Route path="/cabins/:slug" exact component={SingleCabin} />
      <Route component={Error}/>
    </Switch>
    </>
  );
}

export default App;
