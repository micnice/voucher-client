import React, { Component } from 'react'
import Header from './../fragments/Header';
import FooterPage from './../fragments/FooterPage';
import { Container } from 'reactstrap';
import axios from 'axios';
import { print } from 'graphql';
import { LEVEL_LIST } from './../queryResolver';
import { GRAPHQL_BASE_URL } from './../BaseUrlUtil';
import { NavLink } from 'react-router-dom'
import {MDBIcon, MDBBtn,MDBDataTable, MDBBreadcrumb, MDBBreadcrumbItem, } from "mdbreact";
export default class LevelList extends Component {

  state = {
    LevelList: []
  }

  componentDidMount() {
    axios.post(GRAPHQL_BASE_URL, {
      query: print(LEVEL_LIST)
    })
      .then(res => {
        this.setState({ LevelList: res.data.data.levelList });
      });
  }


  render() {

    const levelList = this.state.LevelList;
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
      rows: levelList

    };
    return (
      <div>
        <Header />
        <br/><br/><br/><br/>
                <Container>
                    <MDBBreadcrumb>
                        <MDBBreadcrumbItem><NavLink to="/administration">Administration</NavLink></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active>Level</MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                </Container>
        <br /> <br /><br /> <br />
        <Container>

        <MDBBtn size="lg" type="submit">
            <NavLink to="/administration/level-add"><MDBIcon icon="plus" /></NavLink>
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