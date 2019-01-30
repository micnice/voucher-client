import React, { Component } from 'react'
import Header from './../fragments/Header';
import FooterPage from './../fragments/FooterPage';
import { Container, Table, Link } from 'reactstrap';
import axios from 'axios';
import { print } from 'graphql';
import { SERVICE_PROVIDER_LIST } from './../queryResolver';
import { GRAPHQL_BASE_URL } from './../BaseUrlUtil';
import { NavLink } from 'react-router-dom'
import { MDBDataTable, MDBContainer, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem, } from "mdbreact";

export default class ServiceProviderList extends Component {
    state = {
        serviceProviderList: [],
    }

    componentDidMount() {
        axios.post(GRAPHQL_BASE_URL, {
            query: print(SERVICE_PROVIDER_LIST)
        }).then(res => {
            this.setState({ serviceProviderList: res.data.data.serviceProviderList })
        })
    }
    render() {

        const serviceProviderList = this.state.serviceProviderList;
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
            rows: serviceProviderList

        };
        return (
            <div>
                <Header />
                <br /> <br />
                <Container>
                    <MDBBreadcrumb>
                        <MDBBreadcrumbItem><NavLink to="/administration">Administration</NavLink></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active>Service Provider</MDBBreadcrumbItem>
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