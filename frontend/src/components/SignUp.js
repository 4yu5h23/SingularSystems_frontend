// import React from 'react';
// import './SignUp.css'

// function SignUp() {
//     return (
//         <div className="container">

            
// <div className="container form my-5">
//   <div className="form__box">
//     <div className="form__left">
//       <div className="form__padding"><img class="form__image" src="https://i.pinimg.com/736x/74/bd/bd/74bdbd42fabc616a1837e4854329618f.jpg"/></div>
//     </div>
//     <div className="form__right">
//       <div className="form__padding-right">
//         <form>
//           <h1 className="form__title">Member Login</h1>
//           <input className="form__email" type="text" placeholder="Email"/>
//           <input className="form__password" type="text" placeholder="create password"/>
//           <input className="form__password" type="text" placeholder="confirm password"/>
//           <input className="form__submit-btn" type="submit" value="Sign Up"/>
//         </form>
//         <p> <a className="form__link" href="/login">Already have an account?</a></p>
//       </div>
//     </div>
//   </div>
// </div>
//         </div>

//     );
// }

// export default SignUp;

import React, { Component } from 'react'
import './SignUp.css'
import axios from 'axios';


export default class SignUp extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const data = {
        email: document.getElementById('signUp_email').value,
        password: document.getElementById('signUp_password').value,
        first_name: document.getElementById('signUp_firstName').value,
        last_name: document.getElementById('lastName').value
    };

    axios.post('http://localhost:8000/accounts/signup/', data)
        .then(res => {
            alert('Signup successful!');
        })
        .catch(err => {
            alert('Error signing up!');
        });
}

  render() {
    return (
      <div className="container">
      <div className="container inner_container my-5">
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control" id='signUp_firstName'
            placeholder="First name"
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" id='lastName' placeholder="Last name" />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control" id='signUp_email'
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control" id='signUp_password'
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-light">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">login?</a>
        </p>
      </form>
      </div>
      </div>
    )
  }
}
