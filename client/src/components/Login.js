import React from 'react';
import {AuthConsumer} from "../providers/AuthProvider";
import {Button, Form, Segment, Header} from "semantic-ui-react"

class Login extends React.Component {
  state = {email: '', password: ''}

  handleSubmit = (e) => {
    e.preventDefault();
    const {email, password,} = this.state //destructuring the state
    this.props.auth.handleLogin({email, password}, this.props.history) //we get the handleLogin function from AuthProvider.js
  }


  handleChange = (e) => {
    const {name, value} = e.target 
    this.setState({[name]: value}) // the name we get from the user we put it in the state
  }

  render(){
    const {email, password} = this.state; //destructuring the state for the form

    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Login</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Email"
            autoFocus
            required
            name="email"
            value={email}
            placeholder="email"
            onChange={this.handleChange}
          />
          <Form.Input 
            label="Password"
            required
            name="password"
            value={password}
            placeholder="Password"
            type='password'
            onChange={this.handleChange}
          />
          <Segment textAlign="center" basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    )
  }
}

// we get the data from AuthProvider component so that Login component can use it
export default class ConnectedLogin extends React.Component {
  render() {
    return(
      <AuthConsumer>
        {auth=> <Login {...this.props} auth={auth}/>} 
      </AuthConsumer>
    )
  }
}