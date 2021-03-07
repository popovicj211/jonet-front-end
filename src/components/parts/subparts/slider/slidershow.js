import React from 'react';
import {Link , BrowserRouter as Router} from 'react-router-dom'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import styles from 'react-awesome-slider/dist/styles.css';
import animationCube from 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import captionStyle from 'react-awesome-slider/dist/lettering.css';


function Slideshow() {
    const  AutoplaySlider = withAutoplay(AwesomeSlider);
/*
    const arrimg = [ process.env.PUBLIC_URL +'/images/fleksibilna-procena.jpg' , process.env.PUBLIC_URL +'/images/bg-pattern3.png' ]*/

    const arrimg = [{id:1 , img:  process.env.PUBLIC_URL +'/images/fleksibilna-procena.jpg', caption: 'I want to see what you got tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt.',name: 'Home' ,link: '/', title:'Atttttr' },{id:2, img:  process.env.PUBLIC_URL +'/images/bg-pattern3.png', caption: 'The answer is -- Dont think about it aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.' ,name: 'Services', link: '/services' , title:'Brrrrtt'}]

   return( 
    <AutoplaySlider
      cssModule={[styles, animationCube , captionStyle]}
      animation="cubeAnimation"
       play={true}
      cancelOnInteraction={false} 
      interval={8000}
    >
  
    { 
        arrimg.map((value , index) => {
            return  <div  key={value.id}  style={{background: 'url('+value.img+') no-repeat center center / cover' }} > 
                 <div className="slideshow-group">
                        <h1>{value.title}</h1>
                        <p className="slidershow-caption">{value.caption}
                       </p>
                       <div className="btnt btn-trans" id="btn-trans-nobordecolor">
                                               <div id="translate"></div>
                                               <Link to={value.link}>Find more</Link>
                        </div>
                 </div>
              
            </div>     
          })
          }
        
    </AutoplaySlider>
 )
}

export default Slideshow


