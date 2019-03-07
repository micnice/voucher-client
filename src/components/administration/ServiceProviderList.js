import React, { Component } from 'react'
import Header from './../fragments/Header';
import FooterPage from './../fragments/FooterPage';
import { Container, } from 'reactstrap';
import axios from 'axios';
import { print } from 'graphql';
import { SERVICE_PROVIDER_LIST } from './../queryResolver';
import { GRAPHQL_BASE_URL } from './../BaseUrlUtil';
import { NavLink } from 'react-router-dom'
import { MDBDataTable, MDBBreadcrumb, MDBBreadcrumbItem, } from "mdbreact";
import { CSVLink, CSVDownload } from "react-csv";

export default class ServiceProviderList extends Component {
    state = {
        serviceProviderList: [],
    }

    componentDidMount() {
        axios.post(GRAPHQL_BASE_URL, {
            query: print(SERVICE_PROVIDER_LIST)
        }).then(res => {
            this.setState({ serviceProviderList: res.data.data.serviceProviderList })
            console.log("data.......",res)
            // console.log("data123.......",serviceProviderList)
            console.log("data1234567.......",res.data.data.serviceProviderList)
        })
    }
    render() {

        console.log("loading data....",this.state.serviceProviderList)
      let headers = [
            { label: "Name", key: "Name" },
            { label: "Description", key: "Description" },

        ];
       
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
                <br/><br/><br/><br/>
                <Container>
                    <MDBBreadcrumb>
                        <MDBBreadcrumbItem><NavLink to="/administration">Administration</NavLink></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active>Service Provider</MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                </Container>
                <br /> <br /><br /> <br />
                <Container>
                    <CSVLink data={this.state.serviceProviderList} headers={headers}>
                 
                        Download me
                    </CSVLink>;
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