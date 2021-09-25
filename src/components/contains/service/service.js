import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import { FaRegCheckCircle } from 'react-icons/fa';
import AxiosWebServices from '../../../services/helpers/axios-services';
import ServicePrice from './serviceprice';
const Service = () => {

     const [service, setService] = useState({});
  

    
    const [packageNewPrice, setPackageNewPrice] = useState(null);
    const packageNewPriceR = packageNewPrice === null ? null : packageNewPrice.substring(0,5);
    const packageNewPriceN = packageNewPrice === null ? null : packageNewPrice.substring(6,12);

    const packagePriceSale = (newPrice, regularPrice) => newPrice == 0 ? null : 100 - (newPrice/regularPrice * 100);

     useEffect(() => {
       AxiosWebServices( "data/service.json", setService);
    //   setPackageNewPrice(initVarNewPrice)
       return () => null
     }, [])


   const handleChange = (e) =>{
     setPackageNewPrice(e.target.value);
        }
        

  
    return ( 
        <section className="service" >
             <Container>
                  <Row>
                       <Col md={6} className="service-details service-details-first">
                                     {
                                           packageNewPriceR && packageNewPriceN && packagePriceSale(packageNewPriceN,packageNewPriceR) && <span className="sale">{packagePriceSale(packageNewPriceN,packageNewPriceR)}%</span>
                                     }
                                     <Image src="/images/fleksibilna-procena.jpg" src={'/images/'+service.image?.path} alt={service.image?.alt} fluid rounded />
                       </Col>
                       <Col md={6} className="service-details">
                                    <h3>{service.name}</h3>
                                    <h4>{service.type}</h4>
                           <Form>
                                 <Form.Group controlId="exampleForm.SelectCustom">
                                          <Form.Label>Choose package:</Form.Label>
                                          <Form.Control as="select" custom  onChange={handleChange}  >
                                       
                                          <option value="0" hidden>Choose package</option>
                                               {
                                                   service.variations?.map((value , index) => {
                                                           return  <option key={value.id} value={value.price.new != null ?  new Array(parseFloat(value.price.regular).toFixed(2),parseFloat(value.price.new).toFixed(2))  :  parseFloat(value.price.regular).toFixed(2)}>{value.name}</option>
                                                       })
                                                }
                                         </Form.Control>
                                </Form.Group>
                           </Form>
                            <ul>
                               {
                                      service.desc?.map((value , index) => {
                                        return  <li key={index}> <FaRegCheckCircle  fill={'#00AB66'}/> {value}</li>
                                    })
                               }
                                                    
                            </ul>

                            {  Number(packageNewPriceN) == 0 ?  packageNewPriceR && <div className="service-details-prices">
                                  <span>{packageNewPriceR}&euro;</span>
                            </div> :  packageNewPriceR && packageNewPriceN && <div className="service-details-prices">
                                  <span><del>{packageNewPriceR}&euro;</del></span>
                              <span>{packageNewPriceN}&euro; </span>
                            </div>
                             }

                           <a href="#" className="btn-primary btn"> Send an Order </a>
                       </Col>
                  </Row>
             </Container>
        </section> 
    );
}
export default Service