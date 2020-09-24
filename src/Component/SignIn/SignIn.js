import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
const SignIn = () => {

    const [user,setUser]=useState({
        email:'',
        password:''
    })
    const [loggedInUser,setloggedInUser]=useContext(UserContext)

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const googleHandle=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res=> {
            // This gives you a Google Access Token. You can use it to access the Google API.
            
            // The signed-in user info.
            const newUserInfo={...user}
            setUser(newUserInfo)
            setloggedInUser(newUserInfo)
            history.push('/book')
            
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
      }//

      const handleSubmit=(e)=>{
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res=>{
            const newUserInfo={...user}
            setUser(newUserInfo)
            setloggedInUser(newUserInfo)
            history.replace(from)
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
          e.preventDefault();
      }
    return (
        <div>
              <div className="signup">
         <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" name="email" onBlur={handleChange} class="form-control"  placeholder="Enter email"/>

                </div>
                <div className="">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" onBlur={handleChange} name="password" placeholder="Password"/>
                </div>

                <button type="submit" class="btn btn-primary mt-2">Login</button><br/>

                
                </form>
               
                <button className="btn btn-warning btn-sm mt-3" onClick={googleHandle}>Google Sign IN</button>
        </div>
        </div>
    );
};

export default SignIn;