import React, { useEffect, useState } from 'react';
import './DailyLogs.css';
import Navbar from '../navbar/Navbar';
import {useStateValue} from './StateProvider';
import {auth, db} from "../../firebase";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';


function DailyLog(){

    /*
    function showOptions(name, setmethod) {
		return <div>
			<select class="form-select" aria-label="Default select example" value={name} onChange={setmethod} >
				<option value="frequency1">Never</option>
				<option value="frequency2">1-2 times a week</option>
				<option value="frequency3">3-5 times a week</option>
				<option value="frequency4">Once a day</option>
				<option value="frequency5">Twice a day</option>
			</select>
		</div>
	}*/

    const [userInfo, setUserInfo] = useState([]);
    

    const navigate = useNavigate();
    const [{user}, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user)
        {
            auth.signOut();
        }
    }
    /* 
	useEffect(() =>{
		getName()
	}, [])

	useEffect(() => {
		console.log(userInfo)
	}, [userInfo])

	function getName(){ 
		const userInfoRef = collection(db, "UserInfo")
		const q = query(userInfoRef, where("emailL", "==", user.email))
		getDocs(q)
			.then(response => {
				const infs = response.docs.map(doc => ({data: doc.data(), id: doc.id}))
				setUserInfo(infs)
			})
			.catch(error => console.log("u suck"))
	}
*/

    return(
        <div>
            <Navbar/>
                <div className='header-card'>
                    <h1> Your Food Logs </h1> 
                </div>
                <div className='row'>
                    <div className='column1'>
                        food entry card
                    </div>
                    <div className='column2'>
                        graph of emissions
                    </div>
                </div>
                <div>
                    Signed in as:
                </div>

        </div>
    )
}

export default DailyLog