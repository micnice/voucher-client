import React, { Component, Fragment } from 'react'
import Header from './../fragments/Header';
import FooterPage from './../fragments/FooterPage';
import { Container, Table, Link } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { print } from 'graphql';
import { CITY_LIST } from './../queryResolver';
import { GRAPHQL_BASE_URL } from './../BaseUrlUtil';
import { MDBBtn, MDBDataTable, MDBIcon, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem } from 'mdbreact';


export default class CityList extends Component {

  state = {
    cityList: [],
  }
  componentDidMount() {

    axios.post(GRAPHQL_BASE_URL, {
      query: print(CITY_LIST)
    }).then(result => {
      this.setState({ cityList: result.data.data.cityList })
    });
  }

  render() {
    const cityList = this.state.cityList;
    

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
      rows: cityList

    };
    return (
      <div>
        <Header />
        <br /> <br />
        <Container>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem><NavLink to="/administration">Administration</NavLink></MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>City</MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </Container>
        <br /> <br /><br /> <br />
        <Container>

          <MDBBtn size="lg" type="submit">
            <NavLink to="/administration/city-add"><MDBIcon icon="plus" /></NavLink>
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