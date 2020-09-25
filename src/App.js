import React, { createContext, useState } from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";
import bgImage from './Image/Rectangle1.png'
import Header from './Component/Header/Header';
import Travel from './Component/Travel/Travel';
import PlaceDetails from './Component/PlaceDetails/PlaceDetails';


import Login from './Component/Login/Login';
import HotelBook from './Component/HotelBook/HotelBook';
import SignIn from './Component/SignIn/SignIn';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

export const UserContext=createContext()
function App() {
  const [loggedInUser,setloggedInUser]=useState({})
  return (
    
    <UserContext.Provider value={[loggedInUser,setloggedInUser]}>
     <div className="containerFluid" style={{
      backgroundImage:`url(${bgImage})`,
      height:'1500px',
      width:'100%',
      }}>   
           
            <Header></Header>
           
            <Router>
          
          <Switch>
            <Route exact path='/'>
               <Travel></Travel>
            </Route>

            <PrivateRoute  path="/book">
                 <HotelBook></HotelBook>
            </PrivateRoute>
            <Route  path="/login">
                 <Login></Login>
            </Route>
            <Route  path="/sign">
              <SignIn></SignIn>
            </Route>
            <Route  path="/:placekey">
                 <PlaceDetails></PlaceDetails>
            </Route>
            
          </Switch>
          </Router>
        
       </div>
       </UserContext.Provider>
  );
}

export default App;
