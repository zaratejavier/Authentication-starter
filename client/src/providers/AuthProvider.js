import React from "react"
import axios from "axios"

export const AuthContext = React.createContext(); //This is what our child components will use to get the data from this provider. 
export const AuthConsumer = AuthContext.Consumer; //what the child component uses to access the data from the provider.

export class AuthProvider extends React.Component {
  state = {user: null,};

  // function that handles the registration of a user. Makes a post request to "/api/auth" to create a user.
  handleRegister = (user, history) => {
    axios.post("/api/auth",user)
      .then((res) => {
        this.setState({user: res.data.data,});
        history.push("/") //this will take us to our home page once registered
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // function that handles the login of a user. Makes a post request to "/api/auth/sign_in" to authenticate a user.
  handleLogin = (user, history) =>{
    axios.post("/api/auth/sign_in", user)
      .then((res) => {
        this.setState({user: res.data.data,})
        history.push("/"); //this will take us to our home page once logged in
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // function handles the logout of a user. Makes a delete request to "/api/auth/sign_out" to logout a user.
  handleLogout = (history) => {
    axios.delete("/api/auth/sign_out")
      .then((res) => {
        console.log(res)
        this.setState({user: null,})
        history.push('/login') //this will take us to our login page once we signout
      })
      .catch((res) => {
        console.log(res);
      })
  }

  render(){
    return(
      <AuthContext.Provider value={{
        ...this.state,
        authenticated: this.state.user !==null,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        setUser: (user) => this.setState({user,}) // function that gets the user from our database and sets it to our user state.
      }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}