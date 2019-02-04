import React, { Component, Fragment } from 'react'
import Header from './../fragments/Header';
import FooterPage from './../fragments/FooterPage';
import { Container, Table, Link } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { print } from 'graphql';
import { ROLE_LIST } from './../queryResolver';
import { GRAPHQL_BASE_URL } from './../BaseUrlUtil';
import { MDBBtn, MDBDataTable, MDBIcon, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem } from 'mdbreact';


export default class RoleList extends Component {

  state = {
    roleList: [],
  }
  componentDidMount() {

    axios.post(GRAPHQL_BASE_URL, {
      query: print(ROLE_LIST)
    }).then(result => {
      this.setState({ roleList: result.data.data.roleList })
    });
  }

  render() {
    const roleList = this.state.roleList;
    

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
      rows: roleList

    };
    return (
      <div>
        <Header />
        <br /> <br />
        <Container>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem><NavLink to="/administration">Administration</NavLink></MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>Role List</MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </Container>
        <br /> <br /><br /> <br />
        <Container>
          <MDBBtn size="sm" color="primary" className="my-0" type="submit"><MDBIcon icon="search" /></MDBBtn>
          <MDBBtn size="lg" type="submit">
            <NavLink to="/administration/role-add"><MDBIcon icon="plus" /></NavLink>
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