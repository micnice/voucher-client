import React,{Component} from 'react';
import {  NavLink } from 'react-router-dom'
import Header from './../fragments/Header';
import FooterPage from '../fragments/FooterPage';
import { MDBContainer,MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem, } from 'mdbreact';


export default class ReportingList extends Component{


    render() {
        return (
            <div> <Header />
                <br /> <br />
                <MDBContainer>
                    <MDBRow>
                        <MDBCol sm="12"><MDBBreadcrumb>
                            <MDBBreadcrumbItem active><NavLink to="/reporting">Reporting</NavLink></MDBBreadcrumbItem>
                        </MDBBreadcrumb></MDBCol>

                    </MDBRow>
                </MDBContainer>


                <MDBContainer><div>

                    <br /><br />
                    <MDBTable hover>

                        <MDBTableBody>
                            <tr>

                                <td><strong><NavLink to="/reporting/beneficiary-list">Beneficiary List</NavLink></strong></td>
                                <td><b><NavLink to="/reporting/voucher-sales-list">Voucher Sales</NavLink></b></td>


                            </tr>
                            <tr>
                                <td><b><NavLink to="/reporting/beneficiaries-without-sales-list">Beneficiaries without Sales</NavLink></b></td>
                                <td><b><NavLink to="#">Voucher Redeemed</NavLink></b></td>

                            </tr>
                            <tr>
                                <td><b><NavLink to="#">Unredeemed Vouchers </NavLink></b></td>
                                <td><b><NavLink to="#">Voucher Payments</NavLink></b></td>

                            </tr>
                            <tr>
                                <td><b><NavLink to="#">Quarantined Vouchers</NavLink></b></td>

                            </tr>

                        </MDBTableBody>
                    </MDBTable>
                </div>

                </MDBContainer>

                <br /> <br />
                <FooterPage />
            </div>

        );
    }
}