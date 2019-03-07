import React, { Component } from "react";
import { MDBContainer, MDBJumbotron, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import './../fragments/vms.css';
import LoginHeader from './../fragments/LoginHeader';
import FooterPage from './../fragments/FooterPage';
import axios from 'axios';
import {REST_BASE_URL} from './../BaseUrlUtil';
import {userActions} from './../_actions/user.actions';


class LoginPage extends Component {

  
  constructor(props) {
    super(props);

    userActions.logout();
    
    this.state = {
      emailOrUsername: "",
      password: "",

    }

     
    }

  handleLoginChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  




  handleLogin = (e) => {
    e.preventDefault();
    axios.post(REST_BASE_URL + '/api/auth/signin',
      {
        emailOrUsername: this.state.emailOrUsername,
        password: this.state.password,
      })
      .then(res => {
        if(localStorage.getItem('token')){
          return localStorage.removeItem('token')
        }
        localStorage
          .setItem("token", res.data.token)
           this.props.history.push('/')

   } ); }


  render() {
    return (
      <div className="bg">
        {/* <LoginHeader /> */}

        <MDBContainer>
          <br /> <br />
          <MDBRow>
            <MDBCol  className="center" md="5">
              <br /><br />
              <MDBJumbotron className="bg">
                <form onSubmit={this.handleLogin}>
                  <p className="h4 text-center mb-4">VMS LOGIN</p>
                  <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                    Your email or username
            </label>
                  <input
                    type="email"
                    id="defaultFormLoginEmailEx"
                    className="form-control"
                    name="emailOrUsername"
                    value={this.state.emailOrUsername}
                    onChange={this.handleLoginChange}
                  />
             
                  <br />
                  <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                    Your password
            </label>
                  <input required
                    type="password"
                    id="defaultFormLoginPasswordEx"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleLoginChange}
                  />
                  <div className="text-center mt-4">
                    <MDBBtn color="blue" type="submit">Login</MDBBtn>
                  </div>
                </form>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>

        </MDBContainer>
        {/* <FooterPage /> */}
      </div>
    );
  }
};

export default LoginPage;




