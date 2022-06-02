import React, { useEffect, useState } from 'react';
import './Profile.css';
import Navbar from '../navbar/Navbar';
import {useStateValue} from '../dailylogs/StateProvider';
import {auth, db} from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col } from 'react-bootstrap'
import firebase from 'firebase/compat/app';


function Profile(){
    const navigate = useNavigate();
    const [{user}, dispatch] = useStateValue();
    const db = firebase.firestore();
    const handleAuthentication = () => {
        if (user)
        {
            auth.signOut();
        }
    }
    const[singleDoc, setSingleDoc] = useState({});
    function fetchSingle(e)
    {
        e.preventDefault();
        db.collection("UserInfo")
        .doc(user.uid)
        .get()
        .then((snapshot) => {
            if(snapshot){
                setSingleDoc(snapshot.data());
            }
            });
        
      
        
    }


    return(
        <div>
            <Navbar/>
            <div className='header-card'> 
                Profile
                <br></br>
                <Button type="submit" style={{
									font: 'inherit', cursor: 'pointer',
									border: '1px solid bisque', background: 'bisque', color: 'black', padding: '0.5rem 2rem'
								}} onClick = {fetchSingle}>View My Profile</Button>
            </div>
            <div>
                {singleDoc.firstName}
            </div>
            
        </div>
    )
}

export default Profile