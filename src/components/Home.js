import React, { Component } from 'react';
import Header from './fragments/Header';
import FooterPage from './fragments/FooterPage';
import { MDBContainer, Col, MDBBreadcrumb, MDBBreadcrumbItem, Container,MDBCard, MDBCardBody,MDBFormInline} from "mdbreact";

import AdminCardSection1 from './administration/AdminCardSection1'; 
import { Bar, Line, Pie } from 'react-chartjs-2';
import { NavLink } from 'react-router-dom'


export default class Home extends Component {
  logValue = value => {
    console.log(value);
  };

  constructor() {
    super();
    this.state = {
      data: {
        labels: ["HARARE", "KWEKWE", "MUTARE", "BULUWAYO",],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
            data: [2478, 5267, 734, 784]
          }
        ]
      }
    }
  }

  render() {

    return (
      <div>
        <Header />
<br/><br/><br/><br/>
<Container>
<MDBCard className="mb-5">
        <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
            <MDBBreadcrumb>
                <MDBBreadcrumbItem><NavLink to="/">Home</NavLink></MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>Dashboard</MDBBreadcrumbItem>
            </MDBBreadcrumb>
            <MDBFormInline className="md-form m-0">
                <strong>Welcome MR/MRS/MISS/MS </strong>
            </MDBFormInline>
        </MDBCardBody>
    </MDBCard>
 
    <AdminCardSection1 />

    </Container>
   

   
        <MDBContainer>
          <br />
          <Col xs="8">
            <div className="chart">
              <Bar
                width={75}
                height={35}
                data={this.state.data}

                options={{ maintainAspectRatio: true }}
              />

            </div>
          </Col>

        </MDBContainer>
        <FooterPage />
      </div>

    );
  }



}

