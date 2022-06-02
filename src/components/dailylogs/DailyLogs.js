import React, { useEffect, useState } from 'react';
import './DailyLogs.css';
import Navbar from '../navbar/Navbar';
import {useStateValue} from './StateProvider';
import {auth, db} from "../../firebase";
import { Button} from 'react-bootstrap'
import firebase from 'firebase/compat/app';



function DailyLog(){
    const [{user}, dispatch] = useStateValue();
    
    const db = firebase.firestore();
    const[allDocs, setAllDocs] = useState([]);
    const handleAuthentication = () => {
        if (user)
        {
            auth.signOut();
        }
    }

    function fetchAll(e)
    {
        e.preventDefault();
        db.collection("users")
        .doc(user.uid)
        .collection('food info')
        .get()
        .then((snapshot) => {
            if(snapshot.docs.length>0){
                snapshot.docs.forEach((doc)=>{
                    setAllDocs((prev) => {
                        return[...prev,doc.data()];
                    });
                }); 
            }
        });
        console.log(allDocs);
    }
    
    return(
        <div>
            <Navbar/>
            
            
            <div>
                
                <br>
                </br>
                <br>
                </br>
                <Button type="submit" style={{
									font: 'inherit', cursor: 'pointer',
									border: '1px solid bisque', background: 'bisque', color: 'black', padding: '0.5rem 2rem'
								}} onClick = {fetchAll}>View My Daily Food Logs</Button>
                <br>
                </br>
                <br>
                </br>
                {allDocs.map((doc)=>{
                    return(
                        <div>
                            Created on: {doc.createdAt.toDate().toString()}
                            <h5>Chicken: {doc.chicken} kg per year.</h5>
                            <h5>Beef: {doc.beef} kg per year.</h5>
                            <h5>Fish: {doc.fish} kg per year.</h5>
                            <h5>Lamb: {doc.lamb} kg per year.</h5>
                            <br>
                            </br>
                        </div> 
                    )
                })}
            </div>
        </div>
    )
}

export default DailyLog