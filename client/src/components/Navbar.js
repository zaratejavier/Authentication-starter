import React from "react"
import {AuthConsumer} from "../providers/AuthProvider";
import {Menu} from "semantic-ui-react"
import {Link, withRouter,} from "react-router-dom"

class NavBar extends React.Component{
  
  rightNavItems = () => {
  const{
    auth: {user, handleLogout},
    location,
  } = this.props;
 
  //if the user is logged in there will be a logout button on the right side
    if(user){
      return(
        <Menu.Menu position="right">
          <Menu.Item 
            name = 'Logout'
            onClick = { () => handleLogout(this.props.history)}
          />
        </Menu.Menu>
      )
    }
    //if the user is not logged in there will be a login and register button on the right side
    else{
      return(
        <Menu.Menu position="right">
          <Link to='/login'>
            <Menu.Item
              id='login'
              name="Login"
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to="/register">
            <Menu.Item
              id='register'
              name="Register"
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }

  //in the render we add a home button to the navbar and we call out rightNavItem function to set the login,logout, and register
  render(){
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item 
              id="home"
              name="Home"
              active={this.props.location.pathname === '/'}
            />
          </Link>
          {this.rightNavItems()}
        </Menu>
      </div>
    )
  }
}

class ConnectedNavBar extends React.Component{
  render() {
    return(
      <AuthConsumer>
        {auth => 
          <NavBar {...this.props} auth={auth}/>
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavBar)