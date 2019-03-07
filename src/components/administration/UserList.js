import React, { Component } from 'react'
import Header from './../fragments/Header';
import FooterPage from './../fragments/FooterPage';
import { Container,} from 'reactstrap';
import axios from 'axios';
import { print } from 'graphql';
import { USER_LIST } from './../queryResolver';
import { GRAPHQL_BASE_URL } from './../BaseUrlUtil';
import { NavLink } from 'react-router-dom'
import { MDBIcon, MDBBtn,MDBDataTable, MDBBreadcrumb, MDBBreadcrumbItem, } from "mdbreact";

 export default class UserList extends Component{
  state = {

    userList :[],
   }

   componentDidMount(){
     axios.post(GRAPHQL_BASE_URL,{
       query:print(USER_LIST)
     }).then(res=>{this.setState({userList:res.data.data.userList})})
   }

   render() {

    const userList = this.state.userList;
    const data = {
      columns: [
        {
          label: 'First Name',
          field: 'firstName',
          sort: 'asc',
          width: 150
        },
        {
          label: 'LastName',
          field: 'lastName',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Username',
          field: 'username',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Email',
          field: 'email',
          sort: 'asc',
          width: 270
        },
      ],
      rows: userList

    };
    return (
      <div>
        <Header />
        <br/><br/><br/><br/>
                <Container>
                    <MDBBreadcrumb>
                        <MDBBreadcrumbItem><NavLink to="/administration">Administration</NavLink></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active>User</MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                </Container>
        <br /> <br /><br /> <br />
        <Container>
        <MDBBtn size="lg" type="submit">
            <NavLink to="/administration/user-add"><MDBIcon icon="plus" /></NavLink>
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