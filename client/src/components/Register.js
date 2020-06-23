import React from "react"
import {AuthConsumer} from "../providers/AuthProvider"
import {Button, Form, Segment, Header} from "semantic-ui-react"

class Register extends React.Component{
  state = {email: '', password: '', passwordConfirmation: ''}

  handleSubmit = (e) => {
    e.preventDefault();
    const {email, password, passwordConfirmation} = this.state //destructuring the state
    const {auth: {HandleRegister,}, history} = this.props; //***need help understanding******** */

    //if the password do not match then alert does not match else display data
    if (password !== passwordConfirmation){
      alert("Passwords do not Match")
      return;
    }
    HandleRegister({...this.stat}, history)
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value}) // the name we get from the user we put it in the state
  }

  render() {
     const {email, password, passwordConfirmation,} = this.state
     return (
       <Segment basic>
         <Header as="h1" textAlign="center">Register</Header>
         <Form onSubmit={this.handleSubmit}>
           <Form.Input
            label="Email"
            required
            autofocus
            name="email"
            value={email}
            placeholder = "Email"
            onChange={this.handleChange}
           />
           <Form.Input
            label="Password"
            required
            name="password"
            value={password}
            placeholder="Password"
            type="password"
            onChange={this.handleChange}
           />
           <Form.Input
            label="Password Confirmation"
            required
            name="passwordConfirmation"
            value={passwordConfirmation}
            placeholder="Password Confirmation"
            type="password"
            onChange={this.handleChange}
           />
           <Segment textAlign="center" basic>
             <Button primary type='submit'> Submit</Button>
             </Segment>
         </Form>
       </Segment>
     )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Register {...this.props} auth={auth}/>}
      </AuthConsumer>
    )
  }
}