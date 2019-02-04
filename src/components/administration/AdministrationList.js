import React, { Component } from 'react';
import { Table, Container, } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import Header from './../fragments/Header';
import FooterPage from '../fragments/FooterPage';
import { MDBContainer, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem, } from "mdbreact";

export default class AdministrationList extends Component {

    render() {
        return (
            <div> <Header />
                <br /> <br />
                <Container>
                    <MDBRow>
                        <MDBCol sm="12"><MDBBreadcrumb>
                            <MDBBreadcrumbItem active><NavLink to="/administration">Administration</NavLink></MDBBreadcrumbItem>
                        </MDBBreadcrumb></MDBCol>

                    </MDBRow>
                </Container>


                <Container><div>

                    <br /><br />
                    <MDBTable hover>

                        <MDBTableBody>
                            <tr>

                                <td><b><NavLink to="/administration/city">City</NavLink></b></td>
                                <td><b><NavLink to="/administration/level">Level</NavLink></b></td>


                            </tr>
                            <tr>
                                <td><b><NavLink to="/administration/user-list">User</NavLink></b></td>
                                <td><b><NavLink to="/administration/role-list">Role</NavLink></b></td>
                            </tr>
                            <tr>
                                <td><b><NavLink to="/administration/permission-list">Permission</NavLink></b></td>
                                <td><b><NavLink to="/administration/service-provider-list">Service Provider</NavLink></b></td>

                            </tr>
                            <tr>
                                <td><b><NavLink to="/administration/voucher-set">Voucher Set </NavLink></b></td>
                                <td><b><NavLink to="/administration/voucher-type-list">Voucher Type </NavLink></b></td>
                            </tr>
                            <tr>
                                <td><b><NavLink to="/administration/parameter-configuartion">Parameter Configuration</NavLink></b></td>
                                <td><b><NavLink to="/administration/facility-list">Facility</NavLink></b></td>
                            </tr>

                        </MDBTableBody>
                    </MDBTable>
                </div>

                </Container>

                <br /> <br />
                <FooterPage />
            </div>

        );
    }


}