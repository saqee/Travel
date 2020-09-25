import React, { useState } from 'react';
import fakaData from '../../Hotel/book'
import Room from '../Room/Room';
import './HotelBook.css'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
const HotelBook = (props) => {
    const [book,setBook]=useState(fakaData)
    const  state = {
        lat: 24.3065,
        lng: 91.7296,
        zoom: 13,
      }
    const position = [state.lat, state.lng]
    return (
        <div style={{display:'flex',margin:'20px'}}>
           <div className="col-md-4">
           {
               book.map(book=> <Room item={book}></Room>)
           }
           </div>

           <div className="col-md-6 map">
            <Map center={position} zoom={state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
           </div>
           
        </div>
    );
};


export default HotelBook;



