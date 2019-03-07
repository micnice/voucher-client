import React, { Component } from 'react';
import axios from 'axios';
import { print } from 'graphql';
import { GRAPHQL_BASE_URL } from './../BaseUrlUtil';
import Header from './../fragments/Header';
import FooterPage from './../fragments/FooterPage';
import { Redirect } from 'react-router-dom';
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem, } from 'mdbreact';
import { NavLink } from 'react-router-dom'

export default class ParameterConfiguration extends Component {

    render() {
        return (

            <div>
                <Header />

                <br/><br/><br/><br/>
                <MDBContainer>
                    <MDBBreadcrumb>
                        <MDBBreadcrumbItem><NavLink to="/administration">Administration</NavLink></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active>Parameter Configurations</MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                </MDBContainer>
                  <MDBContainer> <h1> Parameter List Page !!!</h1></MDBContainer>
               
                <FooterPage />
            </div>)
    }

}
