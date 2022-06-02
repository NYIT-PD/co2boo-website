import React, { useEffect, useState } from 'react';
import './Profile.css';
import Navbar from '../navbar/Navbar';
import {useStateValue} from '../dailylogs/StateProvider';
import {auth, db} from "../../firebase";
import { useNavigate } from "react-router-dom";


function Profile(){
    const navigate = useNavigate();
    const [{user}, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user)
        {
            auth.signOut();
        }
    }
    
    return(
        <div>
            <Navbar/>
            <div className='header-card'> 
                Profile
            </div>
            
        </div>
    )
}

export default Profile