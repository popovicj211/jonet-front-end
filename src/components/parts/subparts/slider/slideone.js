import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {Link, useLocation } from 'react-router-dom'


const SlideOne = () => {
  
    let location = useLocation()
    let route = location.pathname
    
    const slideimg = [{id:1 , img:  process.env.PUBLIC_URL +'/images/fleksibilna-procena.jpg',title: 'Service' , link:'/service'  },{id:2 , img:  process.env.PUBLIC_URL +'/images/bg-pattern3.png',title: 'Checkout', link:'/checkout'  }]


   return( 
    slideimg.map((value , index) => {
        if(route.includes(value.link))
        return  <div key={index} style={{background: 'linear-gradient(0deg, rgba(0, 0, 255,0.6), rgba(0, 0, 0,0.7)), url('+value.img+') no-repeat center right / cover fixed' }} className="slideone" > 
        <Container>
             <Row>
                 <Col md={12}>
                     <div className="slideone-group">
                           <h1>{value.title}</h1>
                     </div>
                 </Col>
            </Row>
          </Container> 
   </div> 
        return null
      
      })
   
 )
}

export default SlideOne