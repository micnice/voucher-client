import React, { Component } from 'react'
import Header from './../fragments/Header';
import FooterPage from './../fragments/FooterPage';
import { Container } from 'reactstrap';
import axios from 'axios';
import { print } from 'graphql';
import { VOUCHER_SALES_LIST } from './../queryResolver';
import { GRAPHQL_BASE_URL } from './../BaseUrlUtil';
import { NavLink } from 'react-router-dom'
import {  MDBDataTable,  MDBBreadcrumb, MDBBreadcrumbItem, } from "mdbreact";

export default class VoucherSalesList extends Component {

    state = {
        voucherSalesList: []
    }

    componentDidMount() {
        axios.post(GRAPHQL_BASE_URL, {
            query: print(VOUCHER_SALES_LIST)
        })
            .then(res => {
                this.setState({ voucherSalesList: res.data.data.salesList });
            });
    }


    render() {

       
  
        const voucherSalesList = this.state.voucherSalesList;
        const data = {
            columns: [
                {
                    label: 'Voucher Serial Number',
                    field: 'voucherSerialNumber',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Sale Date',
                    field: 'saleDate',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Sold By',
                    field: 'soldBy',
                    sort: 'asc',
                    width: 270
                },

             
            ],
            rows: voucherSalesList

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