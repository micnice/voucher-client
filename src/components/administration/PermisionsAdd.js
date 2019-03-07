import React, { Component } from 'react';
import axios from 'axios';
import { print } from 'graphql';
import { CREATE_PERMISSION } from './../mutation';
import { GRAPHQL_BASE_URL } from './../BaseUrlUtil';
import Header from './../fragments/Header';
import FooterPage from './../fragments/FooterPage';
import { Redirect } from 'react-router-dom';

import { MDBContainer, MDBBtn, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem, } from 'mdbreact';
import { NavLink } from 'react-router-dom'


export default class RoleAdd extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            isSaved: false,
        }
    }

    handlePermissionSubmit = (e) => {
        e.preventDefault();
        axios.post(GRAPHQL_BASE_URL, {
            query: print(CREATE_PERMISSION), variables: {
                permissionInput: {
                    name: this.state.name,
                }
            }
        }, {
                headers: {
                    'content-Type': 'json/application'
                }
            }).then(() => this.setState(() => ({
                isSaved: true
            })))
    }


    handlePermissionChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {

        if (this.state.isSaved === true) {
            return <Redirect to='/administration/permission-list' />
        }

        const {  name } = this.state;
        return (
            <div>
                <Header />
                <br/><br/><br/><br/>
                <MDBContainer>

                    <MDBBreadcrumb >
                        <MDBBreadcrumbItem><NavLink to="/administration">Administration</NavLink></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem><NavLink to="/administration/permission-list">Permission List</NavLink></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active>Permission Add</MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                </MDBContainer>

                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <form onSubmit={this.handlePermissionSubmit}>
                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                    Name
              </label>
                                <input
                                    type="text"
                                    value={name}
                                    name="name"
                                    onChange={this.handlePermissionChange}
                                    className="form-control"
                                />
                                <br />
                        
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