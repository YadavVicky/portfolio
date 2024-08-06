import React, { useEffect, useState } from "react";
import './Skills.css';
import { ThreeDots } from "react-loader-spinner";

import ProgressBar from "./components/ProgressBar";
import Header from "../../../shared/UIElements/Header";

const Skills = () => {
  var [userSkills, setUserSkills] = useState(null);
  /*
  useEffect(() => {
    const sendReq = async () => {
      if(sessionStorage.getItem("skills")){
        let items = sessionStorage.getItem("skills");
        setUserSkills(JSON.parse(items));
      }
      try {
        const response = await fetch('https://wide-eyed-elk-jersey.cyclic.app/api/skills/');
        const responseData = await response.json();
        setUserSkills(responseData.allSkills);
        sessionStorage.setItem("skills", JSON.stringify(responseData.allSkills));
      } catch (e) {
        console.log('Error');
      }
    }
    if(!userSkills) {
      sendReq();
    }
  }, []);
  if (userSkills) {
    userSkills.sort((a, b) => { return parseInt(b.percent) - parseInt(a.percent); });
  }
  */
  userSkills = [
    {
      "_id": {
        "$oid": "6538859519580f6d5e5baf26"
      },
      "name": "JavaScript",
      "percent": "100",
      "backGround": "success",
      "__v": 0
    },
    {
    "_id": {
      "$oid": "65388219f2e91f3769346b39"
    },
    "name": "Node.Js",
    "percent": "100",
    "backGround": "success",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "653884f819580f6d5e5baf06"
    },
    "name": "React",
    "percent": "90",
    "backGround": "success",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "6538850a19580f6d5e5baf0e"
    },
    "name": "Angular",
    "percent": "90",
    "backGround": "success",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "6538858a19580f6d5e5baf22"
    },
    "name": "Express.Js",
    "percent": "90",
    "backGround": "success",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "6538858a19580f6d5e5baf26"
    },
    "name": "Problem Solving",
    "percent": "80",
    "backGround": "success",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "6538856019580f6d5e5baf12"
    },
    "name": "Kotlin",
    "percent": "75",
    "backGround": "info",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "6538857c19580f6d5e5baf1e"
    },
    "name": "Android Development",
    "percent": "75",
    "backGround": "info",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "6538864e19580f6d5e5baf2a"
    },
    "name": "C++",
    "percent": "60",
    "backGround": "info",
    "__v": 0
  }]
  return (
    <>
      <Header heading="Skills" />
      {!userSkills ? (
        <div className="wrapper1">
          <div className="wrapper-skills-loader">
            <ThreeDots color="white" width={"20%"} />
          </div>
        </div>
      ) :
        (
          <div className="wrapper1">
            <div className="wrapper-skills">
              {userSkills && userSkills.map(element => {
                return <ProgressBar key={element.name} skillName={element.name} percent={element.percent} backGround={element.backGround} />
              })}
            </div>
          </div>
        )}
    </>
  );
}

export default Skills;
