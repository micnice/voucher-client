import React, { Component } from 'react'
import Header from './../fragments/Header';
import FooterPage from './../fragments/FooterPage';
import { Container, Table, Link } from 'reactstrap';
import axios from 'axios';
import { print } from 'graphql';
import { VOUCHER_TYPE_LIST } from './../queryResolver';
import { GRAPHQL_BASE_URL } from './../BaseUrlUtil';
import { NavLink } from 'react-router-dom'
import {MDBBtn,MDBIcon, MDBDataTable, MDBContainer, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem, } from "mdbreact"




export default class VoucherTypeList extends Component {

  state = {
    voucherList: [],
   
  }

  componentDidMount() {
    axios.post(GRAPHQL_BASE_URL, { query: print(VOUCHER_TYPE_LIST) }, {
      headers: { 'content-Type': 'json/Aplication' }
    }).then(result => {
      this.setState({ voucherList: result.data.data.voucherTypeList })


    })
  }
  render() {

    const dataList = this.state.voucherList;
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
       
        {
          label: 'Price',
          field: 'price',
          sort: 'asc',
          width: 100
        },

      ],
      rows: dataList

    };
    return (
      <div>
        <Header />
        <br /> <br />
                <Container>
                    <MDBBreadcrumb>
                        <MDBBreadcrumbItem><NavLink to="/administration">Administration</NavLink></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active>Voucher</MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                </Container>
        <br/> <br/><br/> <br/>
        <Container>
        <MDBBtn size="lg" type="submit">
            <NavLink to="/administration/voucher-type"><MDBIcon icon="plus" /></NavLink>
          </MDBBtn>
        <MDBDataTable
          striped
          bordered
          small
          data={data}
        />
        </Container>
        <FooterPage />
      </div>

    );
  }
}