import React, { Component } from 'react'
import Header from './../fragments/Header';
import FooterPage from './../fragments/FooterPage';
import { Container, Table, Link } from 'reactstrap';
import axios from 'axios';
import { print } from 'graphql';
import { BENEFICIARY_LIST } from './../queryResolver';
import { GRAPHQL_BASE_URL } from './../BaseUrlUtil';
import { NavLink } from 'react-router-dom'
import { MDBIcon, MDBBtn, MDBDataTable, MDBContainer, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem, } from "mdbreact";
import Report from 'react-data-report';

export default class BeneficiaryList extends Component {

    state = {
        beneficiaryList: []
    }

    componentDidMount() {
        axios.post(GRAPHQL_BASE_URL, {
            query: print(BENEFICIARY_LIST)
        })
            .then(res => {
                this.setState({ beneficiaryList: res.data.data.beneficiaryIdentificationList });
            });
    }


    render() {


        const beneficiaryList = this.state.beneficiaryList;
        const data = {
            columns: [
                {
                    label: 'FirstName',
                    field: 'firstName',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'LastName',
                    field: 'lastName',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'MaritalStatus',
                    field: 'maritalStatus',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'BirthDate',
                    field: 'birthDate',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Education Status',
                    field: 'educationStatus',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'LMP',
                    field: 'lmp',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Parity',
                    field: 'parity',
                    sort: 'asc',
                    width: 270
                }, {
                    label: 'Identification Number',
                    field: 'identificationNumber',
                    sort: 'asc',
                    width: 270
                }, {
                    label: 'Is Assessed',
                    field: 'isAssessed',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Data Collection Date',
                    field: 'dataCollectionDate',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Poverty Score',
                    field: 'povertyScore',
                    sort: 'asc',
                    width: 270
                },
            ],
            rows: beneficiaryList

        };
        return (
            <div>
                <Header />
                <br /> <br />
                <Container>
                    <MDBBreadcrumb>
                        <MDBBreadcrumbItem><NavLink to="/reporting">Reporting</NavLink></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active>Beneficiary List</MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                </Container>
                <br /> <br /><br /> <br />
                <Container>

                <Report data={data}/>
                    <MDBDataTable
                        striped
                        bordered
                        small
                        data={beneficiaryList} />
                     
                </Container>
                <FooterPage />
            </div>

        );
    }
}