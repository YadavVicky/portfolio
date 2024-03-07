import React, { useState, useEffect } from "react";
import './Project.css';
import Header from "../../../shared/UIElements/Header";
import ProjectCards from "./components/ProjectCards";
import { ThreeDots } from "react-loader-spinner";

const Project = () => {
    var [userProject, setUserProject] = useState(null);
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
