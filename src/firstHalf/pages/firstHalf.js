import React, { useEffect, useState } from 'react';
import Avatar from '../../shared/UIElements/Avatar';
import DetailsSection from '../components/DetailsSection';

import './firstHalf.css';
import { ThreeDots } from "react-loader-spinner";

const FirstHalf = () => {
    var [userData, setUserData] = useState(null);
    var [loaderValue, setLoaderValue] = useState(false);
    useEffect(() => {
        const sendReq = async () => {
            try{
            setLoaderValue(true);
            const response = await fetch('https://porfolioapi.onrender.com/api/newUser/');
            const responseData = await response.json();
            setUserData(responseData.user);
            setLoaderValue(false);
            }catch(e){
                console.log('Error');
            }
        }
        if(!userData){
            sendReq();
        }
    }, []);
    const userData1 = {
        alt: "Vinay Kumar Yadav",
        image: "https://res.cloudinary.com/dkrtupzet/image/upload/v1689997270/IMG_20230722_091004_jqmouu.jpg",
    }
    return (
        <>
            {loaderValue ? (
                <div className='col-xl-3 shadow-lg rounded myRow' style={{ boxShadow: "0 0 10px #ffffff" }} >
                    <div className='row' style={{ marginTop: "75%", paddingLeft: "35%" }}>
                        <ThreeDots color="white" width={"20%"} />
                    </div>
                </div>) :
                (
                    <div className='col-xl-3 shadow-lg rounded myRow' style={{ boxShadow: "0 0 10px #ffffff" }} >
                        <div className='row' style={{ justifyContent: 'center' }}>
                            <Avatar image={userData1.image} alt={userData1.alt} className={"img-thumbnail"} style={{ width: "70%", maxWidth: "261px" }} />
                            <DetailsSection userData={userData} />
                        </div>
                    </div>
                )}
        </>
    );
};

export default FirstHalf;