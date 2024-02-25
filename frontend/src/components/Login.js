import React, { Component } from 'react'
import './Login.css'
import axios from 'axios'


export default class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {} ,
    message: ''
  }

  handleSubmit = async (event) => {
    event.preventDefault();
  
    const { email, password } = this.state;
  
    try {
      const response = await axios.post('http://localhost:8000/accounts/login/', {
        email,
        password
      });
  
      if (response && response.data) { 
        console.log(response.data); 
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        this.props.setAuthState(true);
        this.setState({ message: "Login successful!" });
      } else {
        console.error("The response or response data is not defined.");
      }
  
    } catch (error) {
      console.error('Login error:', error.response ? error.response : error);
      this.setState({ errors: error.response ? error.response.data : {}, message: "Login failed!"  });
    }
}

  
  render() {
    return (
      <div className="container">
      <div className="container inner_container my-5">
      <form onSubmit={this.handleSubmit}>
        <h3>Login</h3>
        {this.state.message && <div>{this.state.message}</div>}

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            value={this.state.email}  // bind value to state
            onChange={e => this.setState({ email: e.target.value })}  // update state on change
            className="form-control" 
            id='login_email'
            placeholder="Enter email"
          />

        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            value={this.state.password}  // bind value to state
            onChange={e => this.setState({ password: e.target.value })}  // update state on change
            className="form-control" 
            id='login_password'
            placeholder="Enter password"
          />

        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-light">
            Login
          </button>
        </div>
        <p className="forgot-password text-right">
          Don't have an account? <a href="/signup">sign up?</a>
        </p>
      </form>
      </div>
      </div>
    )
  }
}