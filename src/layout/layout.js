import React from 'react';
import {withRouter, HashRouter} from 'react-router-dom';
import Header from '../components/parts/header';
import Slider from '../components/parts/slider';
import Footer from '../components/parts/footer';
import {Container,Row } from 'react-bootstrap';
const layout = props => {

  return (
/*
   <div className="wrapper" id="wrapper">
    

    <Header/>
    <Slider/>
    <main>
        <Container fluid>
            <Row>
                {props.children}
            </Row>
        </Container>
    </main>

    <Footer/>
</div>*/




<Container fluid className="p-0">
    
<Header/>
    <Slider/>
    <main>
        <Container fluid>
            <Row>
                {props.children}
            </Row>
        </Container>
    </main>

    <Footer/>
     </Container>
  );
};


export default withRouter(layout);
