import React, { Component } from 'react';
import axios from 'axios';
import { print } from 'graphql';
import { CREATE_ROLE } from './../mutation';
import { GRAPHQL_BASE_URL } from './../BaseUrlUtil';
import {PERMISSION_LIST} from './../queryResolver';
import Header from './../fragments/Header';
import FooterPage from './../fragments/FooterPage';
import { Redirect } from 'react-router-dom';

import {MDBInput, MDBContainer,MDBBtn,  MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem, } from 'mdbreact';
import { NavLink } from 'react-router-dom'


export default class RoleAdd extends Component {

    constructor() {
        super();
       this.state = {
            name: "",
            description: "",
            isSaved:false,
            permsionList:[],
            permissionSet:[],
        }
    }

    handleRoleSubmit = (e) => {
        e.preventDefault();
        axios.post(GRAPHQL_BASE_URL, {
            query: print(CREATE_ROLE), variables: {
                roleInput: {
                    name: e.target.name.value,
                    description: e.target.description.value,
                    permissionSet:this.state.permissionSet
                }
            }
        },{
            headers: {
                'content-Type': 'json/application'
            }
        }).then(() => this.setState(() => ({
            isSaved: true
          })))
 }

 componentDidMount(){
   axios.post(GRAPHQL_BASE_URL,{
     query:print(PERMISSION_LIST)
   }).then(res =>{this.setState({permsionList:res.data.data.permissionList})})
 }


 handleRoleChange=(e)=>{
   this.state.permissionSet.push(""+e.target.value)
 }

 render(){
  

  let pl = this.state.permsionList.map(p=>{
       return( <MDBInput key={p.id} name="permissionSet" onChange={this.handleRoleChange} label={p.name} type="checkbox" />)
  });

  if (this.state.isSaved === true) {
    return <Redirect to='/administration/role-list' />
  }

    const {description,name}=this.state;
     return(
<div>
        <Header/>
        <br/><br/><br/><br/>
        <MDBContainer>
       
         <MDBBreadcrumb >
          <MDBBreadcrumbItem><NavLink to="/administration">Administration</NavLink></MDBBreadcrumbItem>
          <MDBBreadcrumbItem><NavLink to="/administration/role-list">Role List</NavLink></MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Role Add</MDBBreadcrumbItem>
        </MDBBreadcrumb>
    </MDBContainer>
     
     <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={this.handleRoleSubmit}>
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Name
              </label>
              <input
                type="text"
                name="name"
               
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
               Description
              </label>
              <input
                type="text"
               name="description"
                className="form-control"
              />

              <div>
                {pl}
              </div>
              <div className="text-center mt-4">
                <MDBBtn color="blue" type="submit">Save</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <FooterPage/>
      </div>
      );
 }

}