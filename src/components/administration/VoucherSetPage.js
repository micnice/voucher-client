import React, { Component, Fragment } from 'react'
import Header from './../fragments/Header';
import FooterPage from './../fragments/FooterPage';
import { Container, Table, Link } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { print } from 'graphql';
import { VOUCHER_SET_LIST } from './../queryResolver';
import { GRAPHQL_BASE_URL } from './../BaseUrlUtil';
import { MDBContainer,MDBBtn, MDBDataTable, MDBIcon, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem } from 'mdbreact';

export default class VoucherSetPage extends Component{
  state = {
      voucherSet:[],
  }

  componentDidMount(){
      axios.post(GRAPHQL_BASE_URL,{
          query:print(VOUCHER_SET_LIST)}).then(res=>{
              this.setState({voucherSet:res.data.data.voucherSetList})});
  }

  render(){

    const voucherSet = this.state.voucherSet;
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
        rows: voucherSet
  
      };
      return (
        <div>
          <Header />
          <br /> <br />
          <Container>
            <MDBBreadcrumb>
              <MDBBreadcrumbItem><NavLink to="/administration">Administration</NavLink></MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Voucher Set</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </Container>
          <br /> <br /><br /> <br />
          <Container>
          <MDBBtn size="lg" type="submit">
            <NavLink to="/administration/voucher-set-add"><MDBIcon icon="plus" /></NavLink>
          </MDBBtn>
           
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