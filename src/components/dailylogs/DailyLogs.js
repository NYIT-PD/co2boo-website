import React, { useEffect, useState } from 'react';
import './DailyLogs.css';
import Navbar from '../navbar/Navbar';
import {useStateValue} from './StateProvider';
import {auth, db} from "../../firebase";
import { useNavigate } from "react-router-dom";



function DailyLog(){
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
            <div>
                DailyLog 
            </div>
            <div>
                Signed in as: {user.email}
            </div>
        </div>
    )
}

export default DailyLog