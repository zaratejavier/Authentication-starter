import React from 'react';
import Home from './components/Hom'
import NoMatch from './components/NoMatch'
import Navbar from './components/Navbar'
import Login from "./components/Login"
import Register from "./components/Register"
import {Switch, Route, Switch} from "react-router-dom"
import {Container,} from "semantic-ui-react"

import './App.css';

function App() {
  return (
   <>
    <Navbar/>
    <Container>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/Register" component={Register}/>
        <Route component={NoMatch}/>
      </Switch>
    </Container>
   </>
  );
}

export default App;
