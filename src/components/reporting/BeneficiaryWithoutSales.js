

import React, { Component } from 'react'
import Header from './../fragments/Header';
import FooterPage from './../fragments/FooterPage';
import { Container,} from 'reactstrap';
import axios from 'axios';
import { print } from 'graphql';
import { BENEFICIARY_WITHOUT_SALES } from './../queryResolver';
import { GRAPHQL_BASE_URL } from './../BaseUrlUtil';
import { NavLink } from 'react-router-dom'
import { MDBDataTable, MDBBreadcrumb, MDBBreadcrumbItem, } from "mdbreact";

export default class BeneficiaryWithoutSales extends Component {

    state = {
        beneficiariesWithNoSales: []
    }

    componentDidMount() {
        axios.post(GRAPHQL_BASE_URL, {
            query: print(BENEFICIARY_WITHOUT_SALES)
        })
            .then(res => {
                this.setState({ beneficiariesWithNoSales: res.data.data.beneficiariesWithNoSales });
            });
    }


    render() {


        const beneficiariesWithNoSales = this.state.beneficiariesWithNoSales;
        const data = {
            columns: [
                {
                    label: 'beneficiaryIdentityId',
                    field: 'beneficiaryIdentityId',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Pregnancy Status',
                    field: 'pregnancyStatus',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'povertyScore',
                    field: 'povertyScore',
                    sort: 'asc',
                    width: 270
                },

             
            ],
            rows: beneficiariesWithNoSales

        };
        return (
            <div>
                <Header />
                <br/><br/><br/><br/>
                <Container>
                    <MDBBreadcrumb>
                        <MDBBreadcrumbItem><NavLink to="/reporting">Reporting</NavLink></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active>Voucher Sales List</MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                </Container>
                <br /> <br /><br /> <br />
                <Container>
                    <MDBDataTable
                        striped
                        bordered
                        small
                        data={data} />
                </Container>
                <FooterPage />
            </div>

        );
    }
}