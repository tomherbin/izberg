import React, { Component } from 'react';
import './LoginControl.css'
import Home from './Home'
import Login from './Login';


function NotMatch(props){
  return <p>Retyped must-match password</p>
}

function VeryWeakPassword(props){
  return <p>Very Weak password</p>
}

function WeakPassword(props){
  return <p>Weak password</p>
}

function StrongPassword(props){
  return <p>Strong password</p>
}

function ErrorMessage(props) {
  const errorCode = props.errorCode;
  
console.log(errorCode)

  switch(errorCode) {
    case 1:
    return <NotMatch/>;
      break;
    case 2:
    return <VeryWeakPassword/>;
      break;
      case 3:
    return <WeakPassword/>;
      break;
    case 4:
    return <StrongPassword/>;
      break;
    default:
    return null;
  }}
  

class LoginControl extends Component {

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLogged: false, username: '', errorCode : 0};
  }


  handleLoginClick(username, password, passwordConfirmation) {
    this.setState({ username: username})
    this.passwordMatch(password, passwordConfirmation)
    console.log(this.state.errorCode)
  }

  passwordMatch(password, passwordConfirmation)
  {
    if(password === passwordConfirmation)
    {
    this.setState({passwordMatch: true})
     this.passwordLength(password)
    } 
    else{
      this.setState({errorCode : 1})
    }
  }

  passwordLength(password){
    if(password.length > 6)
    {
      this.passwordUpperCase(password)
    }
    else{
      this.setState({errorCode : 2})
    }
  }

  passwordUpperCase(password){
    var regex = /[A-Z]/g;

    if(password.search(regex) !== -1)
    {
      this.passwordSpaceEntry(password)
    }
    else{
      this.setState({errorCode : 2})
    }
  }

  passwordSpaceEntry(password){
    
    var regex = /\s/;
    if(password.search(regex) === -1)
    {
      this.passwordSpecialCharacter(password) 
    }
    else{
      this.setState({errorCode : 3})
    }
  }

  passwordSpecialCharacter(password){
    var regex = /[*[^$.|?*+()/]/;
    if(password.search(regex) !== -1)
    {
      this.setState({ isLogged: true })
      this.setState({errorCode : 4})
    }
    else{
      this.setState({errorCode : 3})
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
       <ErrorMessage errorCode={this.state.errorCode}/>
        <Home isLogged={isLogged} onClick={this.handleLogoutClick} username={this.state.username}/>
        <Login isLogged={isLogged} onClick={this.handleLoginClick} />
      </div>
    )

  }
}

export default LoginControl


