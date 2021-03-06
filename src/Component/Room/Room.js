import React from 'react';
import './Room.css'



const Room = (props) => {
    const {name,price,img,star}=props.item
   
    return (
        <div className="room">
              <h2 style={{color:'white'}}>Room Information</h2>
            <div className="col-md-7">
                 <img src={img} alt="" style={{width:'200px'}}/>
                 <p style={{color:'white'}}>Room Type:{name}</p>
                 <p style={{color:'white'}}>Price:{price}</p>
                 <p style={{color:'white'}}>Rating:{star}</p>
            </div>

           
        </div>
    );
};




export default Room;