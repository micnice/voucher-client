import React,{Component} from 'react'; 
import Header from './fragments/Header';
import FooterPage from './fragments/FooterPage';
import {MDBContainer,MDBAutocomplete,Button, Card, CardBody, CardImage, CardTitle, CardText, Col} from 'mdbreact';
import TeamPage from './TeamPage';


 export default class Home extends Component{
    logValue = value => {
        console.log(value);
      };

render(){
    
    return(
    <div>
        <Header/>
        <MDBContainer>
            <br/>
        <Col>
        <Card style={{ width: "22rem" }}>
          <CardImage
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
            waves
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make
              up the bulk of the card&apos;s content.
            </CardText>
            <Button href="#">Button</Button>
          </CardBody>
        </Card>
      </Col>
      </MDBContainer>
   <FooterPage/>
    </div>
    
        );
}

    

}

