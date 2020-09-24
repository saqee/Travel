import React from 'react';
import './Places.css'
import {
   
    Link,
    BrowserRouter as Router,Route
    
  } from "react-router-dom";
import Travel from '../Travel/Travel';
const Places = (props) => {
    const {name,description,img,key}=props.place
    return (
       
        <div className="places">
        
          <a href={"/"+key}>  

         <img src={img} alt="" style={{width:'200px',height:'300px', marginRight:'10px'}}/>
         
         </a> 
        
        
        </div>
        
    );
};

export default Places;