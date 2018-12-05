import React, { Component } from 'react';
import PropTypes from 'prop-types'

    

class Home extends Component{
  constructor(props, context){
    super(props, context)
    console.log('created logout button');
  }

  static propTypes = {
    username: PropTypes.string.isRequired,
  }

  render(){
    if(!this.props.isLogged){
      return null;
    }
    return (
      <div>
      <h1> Join us at Izberg</h1>
      <h2>Welcome {this.props.username}  !!</h2>
      
      <button onClick={this.props.onClick}>
        Logout
      </button>
      </div>
    );
  }
}


export default Home
    

