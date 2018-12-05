import React, { Component } from 'react';


class Login extends Component {


  

  constructor(props) {
    super(props);
    console.log('created login button');
    this.state = { username: '', password : '', passwordConfirmation:''};
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSubmit = event => {
    event.preventDefault()  
  }



  render() {

    if (this.props.isLogged) {
      return null;
    }
    return (
      <div>
        <h1> Join us at Izberg</h1>
        <form onSubmit={this.onSubmit}>

          <label>
            Username
          <input type="text"
          name="username"
              autoComplete="given-name"
              onChange={this.handleChange}
              value={this.state.value} />
          </label><br />
          <label>
            Password
            </label>
            <input type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.value} />
          <br />
          <label>
            Re-type Password
            </label><input type="password"
            name="passwordConfirmation"
            onChange={this.handleChange}
            value={this.state.value} />
          <br />
          <button type="submit" onClick={() => this.props.onClick(this.state.username, this.state.password, this.state.passwordConfirmation)}>Count me in</button>
        </form>
      </div>
    )


  }
}

export default Login