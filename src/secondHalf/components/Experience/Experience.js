import React, { useEffect, useState } from "react";
import Header from "../../../shared/UIElements/Header";
import './Experience.css';
import Details from "./Components/DetailsSection";

const Experience = () => {
    var [userExperience, setUserExperience] = useState(null);
    var [loaderValue, setLoaderValue] = useState(false);
    useEffect(() => {
        const sendReq = async () => {
            try {
                setLoaderValue(true);
                const response = await fetch('https://porfolioapi.onrender.com/api/experience/');
                const responseData = await response.json();
                setUserExperience(responseData.experienceList);
                setLoaderValue(false);
            } catch (e) {
                console.log('Error');
            }
        }
        if (!userExperience) {
            sendReq();
        }
    }, []);
    return (
        <>
            <Header heading="Experience" />
            <div className="wrapper-exp">
                {userExperience && userExperience.map((element, i) => {
                    return <Details key={i} projectDetail={element} id={i} />
                })}
            </div>
        </>
    );
}

export default Experience;
