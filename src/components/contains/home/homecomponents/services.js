import React, {useEffect , useState}  from 'react';
import ServicesBlock from './servicesblock';
import AxiosWebServices from '../../../../services/helpers/axios-services';
import { Container, Row, Col  } from 'react-bootstrap';

const Services = props => {

   const [services, setServices] = useState([])
   
   useEffect(() => {
     AxiosWebServices( "data/services.json", setServices);

   }, [])

    return (
         <>

               <div className="section-heading">
                         <h2> Services </h2>
                    </div> 
       <Container>
            <Row>    
                 <Col md={12}>
                      <Row  className="section-body">
                        {
                             services.map((value , index) => {
                              return <ServicesBlock key={value.id}  value={value} /> 
                         })
                        }
                     </Row> 
                 </Col>
             </Row>
        </Container>
        </>
    );
}
export default Services;