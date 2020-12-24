import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../components/parts/header';
import Slider from '../components/parts/slider';
import Footer from '../components/parts/footer';
import {Container,Row } from 'react-bootstrap';
const layout = props => {

  return (

    <div className="wrapper">
    

    <Header/>
    <Slider/>
    <section className="section wb">
        <Container>
            <Row>
                {props.children}
            </Row>
        </Container>
    </section>

    <Footer/>
</div>
    
  );
};


//export default withRouter(layout);
export default layout;