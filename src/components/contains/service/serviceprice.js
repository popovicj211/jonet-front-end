import React from 'react';

const ServicePrice = ({ newp, regularp }) => {
    const initVarNewPrice = newp != null  ?  new Array(parseFloat(regularp).toFixed(2),parseFloat(newp).toFixed(2)) :  parseFloat(regularp).toFixed(2); 
return initVarNewPrice;

}

export default ServicePrice;