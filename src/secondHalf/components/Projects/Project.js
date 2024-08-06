import React, { useState, useEffect } from "react";
import './Project.css';
import Header from "../../../shared/UIElements/Header";
import ProjectCards from "./components/ProjectCards";
import { ThreeDots } from "react-loader-spinner";

const Project = () => {
    var [userProject, setUserProject] = useState(null);
    /*
    useEffect(() => {
        if(sessionStorage.getItem("project")){
            let items = sessionStorage.getItem("project");
            setUserProject(JSON.parse(items));
        }
        const sendReq = async () => {
            try {
                const response = await fetch('https://wide-eyed-elk-jersey.cyclic.app/api/project/');
                const responseData = await response.json();
                setUserProject(responseData.projectList);
                sessionStorage.setItem("project", JSON.stringify(responseData.projectList));
            } catch (e) {
                console.log('Error');
            }
        }
        if(userProject === null || userProject.length === 0) {
            sendReq();
        }
    }, []);
    */
    userProject = [{
        "_id": {
          "$oid": "653a8a3d68fe3e7929010304"
        },
        "projectName": "YelpCamp",
        "projectDescription": "It was create as part of my Industrial Project Training. It is a fully functional website with use of Node.Js in the backend and MongoDB Atlas as Database. It is a simple website where user can register or login and add there respective camp sites where they have visited.",
        "skillList": "HTML,EJS,CSS,JavaScript,Express.Js,Node.Js,MongoDB",
        "gitHubLink": "",
        "websiteLink": "",
        "__v": 0
      },
      {
        "_id": {
          "$oid": "653a932b68fe3e7929010379"
        },
        "projectName": "Lusicous App",
        "projectDescription": "It was my final project of Android App Development. It is a functional app in which a user can register or login and can order food from the restaurants. All the database queries was handle by API.",
        "skillList": "Kotlin,Android Studios,XML",
        "gitHubLink": "",
        "websiteLink": "",
        "__v": 0
      },
      {
        "_id": {
          "$oid": "653b274d483db94ad5ec901d"
        },
        "projectName": "ParCare: Parking Solutions",
        "projectDescription": "It was my final year project. We have build a website for online car parking. In this, user could easy select the parking spot he/she desires to have. I was working as a full stack developer using Node.js(NPM). This will also help user to book parking in advance as well as in real time. To Search please enter Varanasi in the Search Tab.",
        "skillList": "HTML,CSS,JavaScript,Node.js,NPM,Express.Js,MongoDB,Mongoose,Passport.Js",
        "gitHubLink": "https://github.com/YadavVicky/ParkingProject",
        "websiteLink": "https://parcare-parking-service.onrender.com/",
        "__v": 0
      }]
    return (
        <>
            <Header heading="Projects" />
            {!userProject ? (
                <div className="wrapper1">
                    <div className="wrapper-project-loader">
                        <ThreeDots color="white" width={"20%"} />
                    </div>
                </div>
            ) :
                (
                    <div className="container" style={{ overflow: 'hidden' }}>
                        <div className="row wrapper-project">
                            {userProject && userProject.map((element, i) => {
                                return <ProjectCards key={i} projectDetail={element} id={i} />
                            })}
                        </div>
                    </div>
                )}
        </>
    );
}

export default Project;
