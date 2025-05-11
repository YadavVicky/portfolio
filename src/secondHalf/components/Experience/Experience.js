import React, { useEffect, useState } from "react";
import Header from "../../../shared/UIElements/Header";
import './Experience.css';
import Details from "./Components/DetailsSection";

const Experience = () => {
    var [userExperience, setUserExperience] = useState(null);
    /*
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
    */
    userExperience = [
        {
            "companyName": "Accenture",
            "designation": "Senior Software Engineer",
            "startDate": "1732818600000",
            "endDate": "",
            "currentFlag": true,
            "description": "Worked in TeleCommunication Industry, developed the frontend and backend of the application.:Used Angular & SpringBoot. Also Tools like Git, Jira, Azure Pipeline, VSCode."
        },
        {
            "companyName": "Tata Consultancy Services",
            "designation": "Systems Engineer",
            "startDate": "1658428200000",
            "endDate": "1732559400000",
            "currentFlag": false,
            "description": "Worked in BFSI Industry, developed the front end and middleware layer of the application.:Used HTML, CSS, JavaScript, and Angular. Also Tools like Git, Jira, BitBucket, RAD, ALM.:Secured a top 250 ranking at the TCS Top 10 Coders Competition.:I have achieved the T-factor of 4.16, which is in top 10%."
          },
        {
            "companyName": "Tata Consultancy Services",
            "designation": "Assistant Systems Engineer",
            "startDate": "1626892200000",
            "endDate": "1658428200000",
            "currentFlag": false,
            "description": "Worked in BFSI Industry, developed the front end and middleware layer of the application.:Used HTML, CSS, JavaScript, and Angular. Also Tools like Git, Jira, BitBucket, RAD, ALM."
          }
    ];
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
