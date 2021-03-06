import React, { Component } from 'react';
import axios from 'axios';
import { print } from 'graphql';
import { CREATE_LEVEL } from './../mutation';
import { GRAPHQL_BASE_URL } from './../BaseUrlUtil';
import Header from './../fragments/Header';
import FooterPage from './../fragments/FooterPage';
import { Redirect } from 'react-router-dom';

import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem, } from 'mdbreact';
import { NavLink } from 'react-router-dom'


export default class LevelAdd extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            description: "",
            isSaved: false,
        }
    }


    handleLevelSubmit = (e) => {
        e.preventDefault();
        axios.post(GRAPHQL_BASE_URL, {
            query: print(CREATE_LEVEL), variables: {
                levelInput: {
                    name: this.state.name,
                    description: this.state.description
                }
            }
        }, {
                headers: {
                    'content-Type': 'json/application'
                }
            }).then(() => this.setState(() => ({
                isSaved: true
            })))
    }

    handleLevelChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
      }
     
      render(){
     
       if (this.state.isSaved === true) {
         return <Redirect to='/administration/level' />
       }
     
         const {description,name}=this.state;
          return(
     <div>
             <Header/>
             <br/><br/><br/><br/>
             <MDBContainer>
            
              <MDBBreadcrumb >
               <MDBBreadcrumbItem><NavLink to="/administration">Administration</NavLink></MDBBreadcrumbItem>
               <MDBBreadcrumbItem><NavLink to="/administration/level">Level List</NavLink></MDBBreadcrumbItem>
               <MDBBreadcrumbItem active>Level Add</MDBBreadcrumbItem>
             </MDBBreadcrumb>
         </MDBContainer>
          
          <MDBContainer>
         
             <MDBRow>
               <MDBCol md="6">
                 <form onSubmit={this.handleLevelSubmit}>
                   <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                     Name
                   </label>
                   <input
                     type="text"
                     value={name}
                     name="name"
                     onChange={this.handleLevelChange}
                     className="form-control"
                   />
                   <br />
                   <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                    Description
                   </label>
                   <input
                     type="text"
                     value={description}
                     name="description"
                     onChange={this.handleLevelChange}
                     className="form-control"
                   />
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
