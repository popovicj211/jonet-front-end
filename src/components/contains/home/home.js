import React from 'react';
import Contact from './homecomponents/contact';
import Services from './homecomponents/services';
import {RestoredScroll} from 'react-router-dom';

const Home = props => {
    return ( <>

        <section className = "services" id="services">
             <Services/>
        </section> 
        <section className= "contact" id="contact">
            <Contact / >
        </section> 
        </>
    );
}
export default Home;