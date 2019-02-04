import React from 'react';
import {MDBCardFooter,MDBMask,MDBView ,MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol, MDBCardText,MDBCardTitle } from 'mdbreact';

const AdminCardSection1 = () => {
  return (
    

<MDBRow className="d-flex justify-content-center">
            <MDBCol lg="4" xl="3" className="mb-3">
              <MDBCard className="d-flex mb-5">
                <MDBView>
                  {/* <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg" alt="Project" className="img-fluid"/> */}
                  <MDBMask overlay="white-slight"/>
                </MDBView>
                <MDBCardBody>
                  <MDBCardTitle className="font-bold mb-3">
                    <strong>SALES REPORT</strong>
                  </MDBCardTitle>
                  <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      VIEW
                      
                    </a>
                  </span>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>

            <MDBCol lg="4" xl="3" className="mb-3">
              <MDBCard className="d-flex mb-5">
                <MDBView>
                  {/* <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg" alt="Project" className="img-fluid"/> */}
                  <MDBMask overlay="white-slight"/>
                </MDBView>
                <MDBCardBody>
                  <MDBCardTitle className="font-bold mb-3">
                    <strong>BENEFICIARY </strong>
                  </MDBCardTitle>
                  <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      VIEW
                     
                    </a>
                  </span>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="4" xl="3" className="mb-3">
              <MDBCard className="d-flex mb-5">
                <MDBView>
                  {/* <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg" alt="Project" className="img-fluid"/> */}
                  <MDBMask overlay="white-slight"/>
                </MDBView>
                <MDBCardBody>
                  <MDBCardTitle className="font-bold mb-3">
                    <strong> CLAIMS REPORT</strong>
                  </MDBCardTitle>
                  <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                     VIEW
                      {/* <MDBIcon icon="image" className="ml-1"/> */}
                    </a>
                  </span>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="4" xl="3" className="mb-3">
              <MDBCard className="d-flex mb-5">
                <MDBView>
                  {/* <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg" alt="Project" className="img-fluid"/> */}
                  <MDBMask overlay="white-slight"/>
                </MDBView>
                <MDBCardBody>
                  <MDBCardTitle className="font-bold mb-3">
                    <strong>REDEEM REPORT</strong>
                  </MDBCardTitle>
                  <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                     VIEW
                    </a>
                  </span>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
           
          </MDBRow>
     
        
        
     
  )
}

export default AdminCardSection1;

