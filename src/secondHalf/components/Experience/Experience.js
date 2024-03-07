import React, { useEffect, useState } from "react";
import Header from "../../../shared/UIElements/Header";
import './Experience.css';
import Details from "./Components/DetailsSection";

const Experience = () => {
    var [userExperience, setUserExperience] = useState(null);
    useEffect(() => {
        if(sessionStorage.getItem("experience")){
            let items = sessionStorage.getItem("experience");
            setUserExperience(JSON.parse(items));
        }
        const sendReq = async () => {
            try {
                const response = await fetch('https://wide-eyed-elk-jersey.cyclic.app/api/experience/');
                const responseData = await response.json();
                setUserExperience(responseData.experienceList);
                sessionStorage.setItem("experience", JSON.stringify(responseData.experienceList));
            } catch (e) {
                console.log('Error');
            }
        }
        if(!userExperience) {
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
                {!userExperience && <p>No Data Found</p>}
            </div>
        </>
    );
}

export default Experience;
