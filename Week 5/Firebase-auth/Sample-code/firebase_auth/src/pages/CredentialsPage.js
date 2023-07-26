import React from "react";
import { Auth } from "../Auth/Auth";
import './CredentialsPage.css'

export class CredentialsPage extends React.Component {

    constructor(props) {
        super(props)
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
        this.loginUsernameRef = React.createRef();
        this.loginPasswordRef = React.createRef();
    }
    submitAccountSignupHandler = (event) => {
        event.preventDefault();
        console.log(
          "Username: " +
            this.usernameRef.current.value +
            "Password: " +
            this.passwordRef.current.value
        );
    
        let auth = new Auth()
        auth.signUpWithEmailPassword(this.usernameRef.current.value, this.passwordRef.current.value )
        this.props.onAuthStateChanged()
      };

      submitGoogleSigninHandler = (event) => {
        event.preventDefault();
        
        let auth = new Auth()
        auth.signInUsingGoogle();
        this.props.onAuthStateChanged()
      };
    
      submitAccountLoginHandler = (event) => {
        event.preventDefault();
        console.log(
          "Username: " +
            this.loginUsernameRef.current.value +
            "Password: " +
            this.loginPasswordRef.current.value
        );
    
        let auth = new Auth()
        auth.signInWithEmailPassword(this.loginUsernameRef.current.value, this.loginPasswordRef.current.value)
        this.props.onAuthStateChanged()
      };
  render() {
    return (
      <div className="App">
        <div className="overallContainer">
          <h1>Firebase Auth examples</h1>
          <div className="container">
            <div className="form form1">
              <form onSubmit={this.submitAccountSignupHandler}>
                <div className="formelement">
                  <div>Username</div>
                  <input type="text" ref={this.usernameRef} />
                </div>
                <div className="formelement spaceabove">
                  <div className="passwordblock">Password</div>
                  <input type="password" ref={this.passwordRef} />
                </div>
                <input
                  type="submit"
                  value="Click to create a user account!"
                />
              </form>
            </div>

            <div className="form form2">
              <form onSubmit={this.submitAccountLoginHandler}>
                <div className="formelement">
                  <div>Username</div>
                  <input type="text" ref={this.loginUsernameRef} />
                </div>
                <div className="formelement spaceabove">
                  <div className="passwordblock">Password</div>
                  <input type="password" ref={this.loginPasswordRef} />
                </div>
                <input
                  type="submit"
                  value="Login"
                />
              </form>
            </div>

            <div className="form form3">
              <form onSubmit={this.submitGoogleSigninHandler}>
                <input
                  type="submit"
                  value="Sign in using Google"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}