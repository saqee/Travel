import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Places from '../Places/Places';
import './PlaceDetails.css'
const PlaceDetails = () => {
    const {placekey}=useParams()
    const places=fakeData.find(place => place.key === placekey)
    let history=useHistory();

    const proceedCheckout=()=>{
        history.push('/book')
    }
    return (
        <div className="container">
            
                  <div className="row">
                  <div className="col-md-6">
                     <h1 style={{color:'white',padding:'40px'}}>{places.name}</h1>
                     <p style={{color:'white'}}>{places.description}</p>
                  </div>
 
                  <div className="col-md-6 box">
                      <div className="box1">
                      <form action="/">
                          <label htmlFor="" style={{color:'black'}}>Origin</label>
                          <input type="text" name="" className="form-control" placeholder="Dhaka" id=""/>
                          <label htmlFor="" style={{color:'black'}}>Destination</label>
                          <input type="text" name="" className="form-control"  placeholder="Sylhet" id=""/>
                          <div style={{display:'inline-block'}}>
                              <label htmlFor="" style={{color:'black'}}>From</label> <br/>
                              <input type="date" id="" name=""></input>
                            
                          </div>
                          <div style={{display:'inline-block'}}>
                             
                          <label htmlFor="" style={{color:'black'}}>To</label><br/>
                             
                              <input type="date" id="birthday" name="birthday"></input>
                          </div>
                         <button className="btn btn-success btn-block mt-2" onClick={proceedCheckout}>Start Booking</button>
                      </form>
                      </div>
                      
                  </div>
             </div>
            
        </div>
    );
};

export default PlaceDetails;