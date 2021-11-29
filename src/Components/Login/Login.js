import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import TopNav from '../Shared/TopNav/TopNav';
import { UserContext } from '../../App';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const {displayName, email} = result.user;
                
                fetch('https://quiet-journey-44427.herokuapp.com/admins')
                .then(res => res.json())
                .then(data => {
                //console.log(data);
                let admin = false;
                // console.log(data.some( signedInUser.email));
                data.map(singleData => {
                    //console.log(singleData);
                    //console.log('Outside If',result.user.email, singleData.email);
                    if(singleData.email === result.user.email){
                        console.log('Inside If',singleData.email, result.user.email);
                        admin = true;
                    }
                })
                if(admin === true){
                    const signedInUser = {name: displayName, email, admin:true}
                    setLoggedInUser(signedInUser);
                    storeAuthToken(admin);
                }
                else{
                    const signedInUser = {name: displayName, email, admin:false}
                    setLoggedInUser(signedInUser);
                    storeAuthToken(admin);
                    
                }
                //console.log(admin);
                })
                .catch(err =>{

                });
                
                //console.log(loggedInUser);

            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const storeAuthToken = (admin) => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken,'admin',admin);
            sessionStorage.setItem('admin',admin);
            history.replace(from);
          }).catch(function(error) {
            // Handle error
          });
    }


    return (
        <div>
            <TopNav></TopNav>
            <h3>This is Login</h3>
            {
                loggedInUser.email ?
                <Link to='/dashboard'>Dashboard</Link> :
                <button className="btn btn-danger" onClick={handleGoogleSignIn}>Login With Google</button>

            }
        </div>
    );
};

export default Login;