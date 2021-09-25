import React from 'react';
import {Row ,Col, Container} from 'react-bootstrap';
import GoogleMp from '../../../helps/googlemaps';
import ContactForm from './contactform';
const Contact = props => {
    return (

        <Container>
            <Row>
                <Col md={12}>
                     <div className="section-heading-dark">
                           <h2> Contact </h2>
                     </div> 
                </Col>
                <Col md={12}>

                    <Row className="section-body">
                        <Col  md={6} xs={12}>
                           <div className="contact-form-map" id="contact-map">
                                       <GoogleMp/>
                           </div>
                           
                       </Col>
                        <Col  md={6} xs={12}>
                           <div className="contact-form-map"  id="contact-form" >
                                  <ContactForm/>
                           </div>
                        </Col>
                   </Row> 
                
                </Col>
     
         </Row>
    </Container>

    );
}
export default Contact;