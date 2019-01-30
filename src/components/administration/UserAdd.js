import React, { Component } from 'react';
import axios from 'axios';
import { print } from 'graphql';
import { CREATE_USER } from './../mutation';
import { GRAPHQL_BASE_URL } from './../BaseUrlUtil';
import Header from './../fragments/Header';
import FooterPage from './../fragments/FooterPage';
import { Redirect } from 'react-router-dom';
import { ROLE_LIST } from './../queryResolver';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';

import { MDBInput, MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem, } from 'mdbreact';
import { NavLink } from 'react-router-dom'


export default class LevelAdd extends Component {

    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            roleSet: [],
        }
    }

    componentDidMount() {
        axios.post(GRAPHQL_BASE_URL, {
            query: print(ROLE_LIST)
        }).then(res => {
            this.setState({ roleSet: res.data.data.roleList })
        });
    }


    handleUserSubmit = (e) => {
        e.preventDefault();
        axios.post(GRAPHQL_BASE_URL, {
            query: print(CREATE_USER), variables: {
                userInput: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    username: this.state.username,
                    email: this.state.email,
                    roleSet: this.state.roleSet,
                    password: this.state.password,
                }
            }
        },
            {
                headers: {
                    'content-Type': 'json/application'
                }
            }).then(() => this.setState(() => ({
                isSaved: true
            })))
    }

    handleUserChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {


         
        if (this.state.isSaved === true) {
            return <Redirect to='/administration/user-list' />
        }

        const { firstName, lastName, username, email, roleSet, password } = this.state;
        return (
            <div>
                <Header />
                <br /> <br />
                <MDBContainer>

                    <MDBBreadcrumb >
                        <MDBBreadcrumbItem><NavLink to="/administration">Administration</NavLink></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem><NavLink to="/administration/user">User List</NavLink></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active>User Add</MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                </MDBContainer>

                <MDBContainer>

                    <MDBRow>
                        <MDBCol md="6">
                            <form onSubmit={this.handleUserSubmit}>
                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">First Name </label>
                                <input
                                    type="text"
                                    value={firstName}
                                    name="firstName"
                                    onChange={this.handleUserChange}
                                    className="form-control"
                                />
                                <br />

                                <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">Last Name</label>
                                <input
                                    required
                                    type="text"
                                    value={lastName}
                                    name="lastName"
                                    onChange={this.handleUserChange}
                                    className="form-control"
                                />
                                <br />
                                <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">UserName </label>
                                <input
                                    required
                                    type="text"
                                    value={username}
                                    name="username"
                                    onChange={this.handleUserChange}
                                    className="form-control"
                                />
                                <br />
                                <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">Email </label>
                                <input required
                                    type="email"
                                    value={email}
                                    name="email"
                                    onChange={this.handleUserChange}
                                    className="form-control"
                                />
                                <br />
                                <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">Password </label>
                                <input required
                                    type="password"
                                    value={password}
                                    name="password"
                                    onChange={this.handleUserChange}
                                    className="form-control"
                                />
                                <br />
                                <div>
                                    <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">Role </label>
                                    <select value={roleSet} name="roleSet" onChange={this.handleUserChange} className="browser-default custom-select">
                                        <option>Choose your option</option>
                                        <option value="ADMINISTRATOR">ADMINISTRATOR</option>
                                        <option value="BENEFICIARY_ASSESSOR">BENEFICIARY ASSESSOR</option>
                                        <option value="BENEFICIARY_IDENTIFIER">BENEFICIARY IDENTIFIER</option>
                                        <option value="CLAIMS_ASSESSOR">CLAIMS ASSESSOR</option>
                                        <option value="INSTITUTION_MANAGER">INSTITUTION MANAGER</option>
                                        <option value="DATA_ENTRY_CLERK">DATA ENTRY CLERK</option>
                                        <option value="MANAGEMENT">MANAGEMENT</option>
                                    </select>
                                
                                </div>
                                <div className="text-center mt-4">
                                    <MDBBtn color="blue" type="submit">Save</MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <FooterPage />
            </div>
        );
    }
}
