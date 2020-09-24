import React, { useState } from 'react';
import fakaData from '../../Hotel/book'
import Room from '../Room/Room';

const HotelBook = (props) => {
    const [book,setBook]=useState(fakaData)
     
    return (
        <div>
           <div className="col-md-6">
           {
               book.map(book=> <Room item={book}></Room>)
           }
           </div>
           
        </div>
    );
};


export default HotelBook;



