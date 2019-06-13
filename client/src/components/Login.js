import React from 'react';
import {connect} from 'react-redux';
import {login, signUp} from '../actions';


class Login extends React.Component {
  state = {
    loginForm: true,
    signupForm: false,
    credentials: {
        username: '',
        password: '',
        department: ''
    },
    user: {
        username: '',
        password: '',
        department: ''
        }
}

handleChange = e => {
  console.log(e.target.value)
  if (this.state.loginForm === true) {
     
  this.setState({
      credentials: {
           ...this.state.credentials,
           [e.target.name] : e.target.value

      }
  })
  } else  {
      console.log('SIGNUP')
      this.setState({
          user: {
              ...this.state.user,
              [e.target.name] : e.target.value
          }
      })
  }
 
}

login = e => {
  e.preventDefault();
 console.log(`LOGIN : ${this.state.credentials}`)
 this.props.login(this.state.credentials).then(() => {
 this.props.history.push('/users')
});
}

signup = e => {
  e.preventDefault();
 console.log(`SIGNUP: ${this.state.credentials}`)
this.props.signUp(this.state.user)
this.setState({
  loginForm: true,
  signupForm: false
})
}



  render() {
  return ( // Line 62, 63, 72, 73, 75 -- conditionally renders content based on login form or sign up form state. 63 calls a separate fn based on form state
    <div className="App"> 
    <h1>{this.state.loginForm ? "Login" : "Sign Up"}</h1>
      <form onSubmit={ this.state.loginForm ? this.login : this.signup}> 
        <label htmlFor="username">Username</label>
        <input id="username" type="text" name="username" value={this.state.loginForm ? this.state.credentials.username : this.state.user.username } onChange={this.handleChange} required/>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" value={this.state.loginForm ? this.state.credentials.password : this.state.user.password} onChange={this.handleChange} required/>
        {this.state.signupForm && <label htmlFor="department">Department</label>}
        {this.state.signupForm && 
          <input id="department" type="text" name="department" value={this.state.user.department} onChange={this.handleChange} required/>
        }
        <button>{this.state.loginForm ? "Log In" : "Submit" }</button>
      </form>
      <p>Not a registered user?</p>
      <button onClick={ this.state.loginForm ? 
        ()=> this.setState({loginForm:false,signupForm:true}) : //sets form to be the register form
        ()=> this.setState({loginForm:true,signupForm:false}) //sets form to be the login form
      }> 
        {this.state.loginForm ? "Register" : "Go Back"} 
      </button>
    </div>
  );
  }
}

const mapStateToProps = ({isLoggingIn, error, newUser, pending}) => ({
  isLoggingIn,
  error,
  newUser,
  pending

});

export default connect(mapStateToProps,{login, signUp})(Login)
