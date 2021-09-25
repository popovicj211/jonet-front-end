import React from 'react';
import  { Modal} from 'react-bootstrap';
import { FaRegCheckCircle } from 'react-icons/fa';

const Success = ({message, handleClose,  success}) =>{


 return(

    <Modal show={message} onHide={handleClose}>
        <Modal.Header closeButton>
               <div>
                      <FaRegCheckCircle size={75} style={{ fill: '#fff' }} />
               </div>
              
        </Modal.Header>
         <Modal.Body>
              <h3> {success} </h3>
               <button className="btns btn-success" onClick={handleClose}> Ok </button>
        </Modal.Body>
  </Modal>
  
 )
}

export default Success