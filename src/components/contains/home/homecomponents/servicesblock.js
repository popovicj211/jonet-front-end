import React from 'react';
import { Col  } from 'react-bootstrap';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { FaRegCheckCircle , FaCheck , FaSatelliteDish , FaWifi , FaMobileAlt, FaNewspaper} from 'react-icons/fa';

/*
const ServicesBlock = props => {


const descripton = props.value.desc
const iconsServices = props.value.image

    return(
        
      
                                <Col xs={12} sm={6} md={4} lg={3}>
                                          <div className="home-service-group">
        
                                                     <p> {props.value.type} </p>
                                                    <h4>  {props.value.name} </h4>
                                                  <div className="home-service-icon ">
                                                          {
                                                              iconsServices.satellite === true ? <FaSatelliteDish fill={'#006df0'} size={35}/> : null  
                                                          }
                                                           {
                                                              iconsServices.wifi === true ? <FaWifi fill={'#006df0'} size={35}/> : null  
                                                          }
                                                           {
                                                              iconsServices.phone === true ? < FaMobileAlt fill={'#006df0'} size={35}/> : null  
                                                          }
                                                   </div>
                                               
                                                   <ul id="home-service-desc">
                                                   {
                                                   descripton.map((val , index) => {
                                                          return <li key={index}> <FaRegCheckCircle/> {val} </li> 
                                                         })
                                                   }
                                                   </ul>
                                                   <p className="home-service-price"> {parseFloat(props.value.price ).toFixed(2)} &euro;  per month</p>
                                                  <Link className="home-service-details" to="#">Get started</Link>  
                                            </div>
                                 </Col>
                              
        
    )
}

export default ServicesBlock
*/

const ServicesBlock = ({value}) => {
  let { url } = useRouteMatch();


    const descripton = value.desc , iconsServices = value.icons , variations = value.variations;
    console.log(value)

  const newPriceMessage =  variations.every(checkNewPriceMessage)    // Returns false
console.log(newPriceMessage)
    function checkNewPriceMessage(el) {
      if(el.price.new !== null){
         return true; 
      }else{
        return false;
      }
     
    }
    
        return(
              
          <Col xs={12} sm={6} md={6} lg={3}>
          <div className="home-service-group">

                     <p> {value.type} </p>
                    <h4>  {value.name} </h4>
                  <div className="home-service-icon ">
                          {
                              iconsServices.satellite === true ? <FaSatelliteDish fill={'#006df0'} size={38}/> : null  
                          }
                           {
                              iconsServices.wifi === true ? <FaWifi fill={'#006df0'} size={38}/> : null  
                          }
                           {
                              iconsServices.phone === true ? < FaMobileAlt fill={'#006df0'} size={38}/> : null  
                          }
                   </div>
               
                   <ul className="home-service-desc">
                   {
                   descripton.map((val , index) => {
                          return <li key={index}> <FaRegCheckCircle  fill={'#00AB66'}/> {val} </li> 
                         })
                   }
                   </ul>
                   <p className="home-service-price"> {newPriceMessage ? "We offer you discounted prices" :  null} </p>
    
                  <Link className="home-service-details" to={`/service/${value.id}`}>Get started</Link>  
            </div>
 </Col>                    
            
        )
    }
    
    export default ServicesBlock