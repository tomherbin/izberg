import React, { Component } from 'react';
import './LoginControl.css'
import Home from './Home'
import Login from './Login';


function UserGreeting(props) {
  return <h1>Welcome back! </h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLogged = props.isLogged;
  if (isLogged) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

class LoginControl extends Component {

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLogged: false, username: ''};
  }


  handleLoginClick(username, password, passwordConfirmation) {
    this.setState({ username: username})
    this.passwordMatch(password, passwordConfirmation)
  }

  passwordMatch(password, passwordConfirmation)
  {
    if(password === passwordConfirmation)
    {
    this.setState({passwordMatch: true})
     this.passwordLength(password)
     
    } 
  }

  passwordLength(password){
    if(password.length > 6)
    {
      this.passwordUpperCase(password)
    }
  }

  passwordUpperCase(password){
    var regex = /[A-Z]/g;

    if(password.search(regex) !== -1)
    {
      this.passwordSpaceEntry(password)
    }
  }

  passwordSpaceEntry(password){
    
    var regex = /\s/;
    if(password.search(regex) === -1)
    {
      this.passwordSpecialCharacter(password) 
    }
  }

  passwordSpecialCharacter(password){
    var regex = /[*[^$.|?*+()/]/;
    if(password.search(regex) !== -1)
    {
      this.setState({ isLogged: true })
    }
  }

  handleLogoutClick() {
    this.setState({ isLogged: false });
    console.log(this.state.islogged);
  }
  render() {
    const isLogged = this.state.isLogged;

    return (
      <div>
        <Greeting isLogged={isLogged}/>
        <Home isLogged={isLogged} onClick={this.handleLogoutClick} username={this.state.username}/>
        <Login isLogged={isLogged} onClick={this.handleLoginClick} />
      </div>
    )

  }
}

export default LoginControl


