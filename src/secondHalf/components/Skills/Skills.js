import React, { useEffect, useState } from "react";
import './Skills.css';
import { ThreeDots } from "react-loader-spinner";

import ProgressBar from "./components/ProgressBar";
import Header from "../../../shared/UIElements/Header";

const Skills = () => {
  var [userSkills, setUserSkills] = useState(null);
  var [loaderValue, setLoaderValue] = useState(false);
  useEffect(() => {
    const sendReq = async () => {
      try {
        setLoaderValue(true);
        const response = await fetch('https://porfolioapi.onrender.com/api/skills/');
        const responseData = await response.json();
        setUserSkills(responseData.allSkills);
        setLoaderValue(false);
      } catch (e) {
        console.log('Error');
      }
    }
    if (!userSkills) {
      sendReq();
    }
  }, []);
  if (userSkills) {
    userSkills.sort((a, b) => { return parseInt(b.percent) - parseInt(a.percent); });
  }
  return (
    <>
      <Header heading="Skills" />
      {loaderValue ? (
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
