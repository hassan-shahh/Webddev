
import React, { Component } from "react";
class Login extends Component{
      constructor() {
          super();
  
  
          this.state = {
              UserName: '',
              UserRoleID: ''
  
          }
          this.handlechange = this.handlechange.bind(this)
          this.submitHandler = this.submitHandler.bind(this)
      }
      handlechange(event) {
          this.setState({
              [event.target.name]: event.target.value
          })
      }
      submitHandler() {
          fetch('http://localhost:4000/asdf', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                  "UserName": this.state.UserName,
                  'UserRoleID': this.state.UserRoleID
              }
              )
          })
      }

  render(){
return (
    <div>
      <title>Login</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/*===============================================================================================*/}	
      <link rel="icon" type="image/png" href="/tt/images/icons/favicon.ico" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="/tt/vendor/bootstrap/css/bootstrap.min.css" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="/tt/fonts/font-awesome-4.7.0/css/font-awesome.min.css" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="/tt/fonts/Linearicons-Free-v1.0.0/icon-font.min.css" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="/tt/vendor/animate/animate.css" />
      {/*===============================================================================================*/}	
      <link rel="stylesheet" type="text/css" href="/tt/vendor/css-hamburgers/hamburgers.min.css" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="/tt/vendor/animsition/css/animsition.min.css" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="/tt/vendor/select2/select2.min.css" />
      {/*===============================================================================================*/}	
      <link rel="stylesheet" type="text/css" href="/tt/vendor/daterangepicker/daterangepicker.css" />
      {/*===============================================================================================*/}
      <link rel="stylesheet" type="text/css" href="/tt/css/util.css" />
      <link rel="stylesheet" type="text/css" href="/tt/css/main.css" />
      {/*===============================================================================================*/}
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form onSubmit={this.submitHandler} className="login100-form validate-form">
              <span className="login100-form-title p-b-34">
                Account Login
              </span>
              <div className="wrap-input100 rs1-wrap-input100 validate-input m-b-20" data-validate="Type user name">
                < input type="text" name="UserName" value={this.state.UserName} onChange={this.handlechange}/>
                <span className="focus-input100" />
              </div>
              <div className="wrap-input100 rs2-wrap-input100 validate-input m-b-20" data-validate="Type password">
                <input type="text" name="UserRoleID" value={this.state.UserRoleID} onChange={this.handlechange} />
                <span className="focus-input100" />
              </div>
              <div className="container-login100-form-btn">
                <button onClick={this.submitHandler} className="login100-form-btn">
                  Sign in
                </button>
              </div>
              <div className="w-full text-center p-t-27 p-b-239">
                <span className="txt1">
                  Forgot 
                </span>
                <a href="#" className="txt2">
                   User name / password?
                </a>
              </div>
              <div className="w-full text-center">
                <a href="#" className="txt3">
                  Sign Up
                </a>
              </div>
            </form >
            <div className="login100-more" style={{backgroundImage: 'url("tt/images/bg-01.jpg")'}} />
          </div>
        </div>
      </div>
      <div id="dropDownSelect1" />
      
    </div>
  );
}
}
export default Login