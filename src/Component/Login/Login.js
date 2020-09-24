import React, { useContext, useState } from 'react';
import './login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);
const Login = () => {

    const [user,setUser]=useState({
      isSignIn:false,
      email:'',
      password:'',
    })
    const history=useHistory()
    const [loggedInUser,setloggedInUser]=useContext(UserContext)
    const googleHandle=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }//googlehandle

   const handleChange=(e)=>{
     let isFormValid=true;
     if(e.target.name==='email'){
        isFormValid=/\S+@\S+\.\S+/.test(e.target.value)
      // console.log(isEmailValid);
     }
     if(e.target.name==='password'){
      isFormValid=e.target.value.length > 3
       //console.log(isPasswordValid);
    }
    if(isFormValid){
      const newUserInfo={...user}
      newUserInfo[e.target.name]=e.target.value;
      setUser(newUserInfo)
    }
   }

    const handleSubmit=(e)=>{
      
     if (user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(error=> {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
     }
     e.preventDefault();
    }
    return (
 
        <div className="formD">

        
        <div className="signup">
         <form onSubmit={handleSubmit}>
                <h2>New User Form</h2>
                <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" name="email" onBlur={handleChange} class="form-control"  placeholder="Enter email"/>

                </div>
                <div className="">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" onBlur={handleChange} name="password" placeholder="Password"/>
                </div>

                <button type="submit" class="btn btn-primary mt-2">Submit</button><br/>

                <a href="/sign" className=""  style={{color:'white'}}>Already have a account</a>
                </form>
               
                <button className="btn btn-warning btn-sm mt-3" onClick={googleHandle}>Google Sign IN</button>
        </div>
        
        
        </div>
    );
};

export default Login;