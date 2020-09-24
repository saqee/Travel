import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Places from '../Places/Places';
import './Travel.css'
const Travel = (props) => {
  const [places,setPlaces]= useState(fakeData)
   
    return (
        <div className="container">
            
            <div className="row">
            <div className="col-md-1">
                  
                   </div>
                   <div className="col-md-3 coxs">
                      <h4>Coxs Bazar</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea praesentium, voluptatum eos aliquid, nulla, beatae nam suscipit dignissimos iure ullam qui quasi nisi eum corpo</p>
                   </div>
                   <div className="col-md-8 pic">
                      {
                        places.map(place => <Places place={place}></Places>)
                      }
                   </div>

            </div>
        </div>
    );
};

export default Travel;