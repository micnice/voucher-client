import React, { Component } from 'react'
import Header from './../fragments/Header';
import FooterPage from './../fragments/FooterPage';
import { Container, Table, Link } from 'reactstrap';
import axios from 'axios';
import { print } from 'graphql';
import { FACILITY_LIST } from './../queryResolver';
import { GRAPHQL_BASE_URL } from './../BaseUrlUtil';
import { NavLink } from 'react-router-dom'

import { MDBDataTable, MDBContainer, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem, } from "mdbreact";


export default class FacilityList extends Component {

    state = {
        faciltiList: [],
    }

    componentDidMount() {
        axios.post(GRAPHQL_BASE_URL, {
            query: print(FACILITY_LIST)
        }).then(res => {
            this.setState({ faciltiList: res.data.data.facilityList })
        })
    }



    render() {
        const facilityList = this.state.faciltiList;
        const data = {
            columns: [
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Description',
                    field: 'description',
                    sort: 'asc',
                    width: 270
                },
            ],
            rows: facilityList

        };
        return (
            <div>
                <Header />
                <br /> <br />
                <Container>
                    <MDBBreadcrumb>
                        <MDBBreadcrumbItem><NavLink to="/administration">Administration</NavLink></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active>Facility</MDBBreadcrumbItem>
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