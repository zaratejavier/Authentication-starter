import React from 'react';
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import Navbar from './components/Navbar'
import Login from "./components/Login"
import Register from "./components/Register"
import {Switch, Route} from "react-router-dom"
import {Container,} from "semantic-ui-react"
import FetchUser from './components/FetchUser'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css';

// in the component we are adding routes to our components
function App() {
  return (
   <>
    <Navbar/>
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/Register" component={Register}/>
          <Route component={NoMatch}/>
        </Switch>
      </Container>
    </FetchUser>
   </>
  );
}

export default App;
