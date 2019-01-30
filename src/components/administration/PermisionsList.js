import React, { Component, Fragment } from 'react'
import Header from './../fragments/Header';
import FooterPage from './../fragments/FooterPage';
import { Container, Table, Link } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { print } from 'graphql';
import { PERMISSION_LIST } from './../queryResolver';
import { GRAPHQL_BASE_URL } from './../BaseUrlUtil';
import { MDBBtn, MDBDataTable, MDBIcon, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem } from 'mdbreact';


export default class PermisionsList extends Component {

  state = {
    permissionList: [],
  }
  componentDidMount() {

    axios.post(GRAPHQL_BASE_URL, {
      query: print(PERMISSION_LIST)
    }).then(result => {
      this.setState({ permissionList: result.data.data.permissionList })
    });
  }

  render() {
    const permissionList = this.state.permissionList;
    

    const data = {
      columns: [
        {
          label: 'Name',
          field: 'name',
          sort: 'asc',
          width: 150
        },
       
      ],
      rows: permissionList

    };
    return (
      <div>
        <Header />
        <br /> <br />
        <Container>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem><NavLink to="/administration">Administration</NavLink></MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>Permission List</MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </Container>
        <br /> <br /><br /> <br />
        <Container>

          <MDBBtn size="lg" type="submit">
            <NavLink to="/administration/permission-add"><MDBIcon icon="plus" /></NavLink>
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