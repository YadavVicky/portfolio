import React, { useEffect, useState } from "react";
import Avatar from "../../shared/UIElements/Avatar";
import DetailsSection from "../components/DetailsSection";

import "./firstHalf.css";
import { ThreeDots } from "react-loader-spinner";

const FirstHalf = () => {
  var [userData, setUserData] = useState(null);
  /*
  useEffect(() => {
    if (sessionStorage.getItem("details")) {
      let items = sessionStorage.getItem("details");
      setUserData(JSON.parse(items));
    }
    const sendReq = async () => {
      try {
        const response = await fetch(
          "https://wide-eyed-elk-jersey.cyclic.app/api/newUser/"
        );
        const responseData = await response.json();
        setUserData(responseData.user);
        sessionStorage.setItem("details", JSON.stringify(responseData.user));
      } catch (e) {
        console.log("Error");
      }
    };
    if (!userData) {
      sendReq();
    }
  }, []);
  */
  const userData1 = {
    alt: "Vinay Kumar Yadav",
    image:
      "https://res.cloudinary.com/dkrtupzet/image/upload/v1689997270/IMG_20230722_091004_jqmouu.jpg",
  };
  userData = {
    _id: "650effaf505fe9be7303455b",
    firstName: "Vinay",
    middleName: "Kumar",
    lastName: "Yadav",
    email: "vinaykumar.yadav12346@gmail.com",
    phone: "9983316522",
    currentLocation: "Gurgaon",
    experience: "1626892200000",
    position: "Senior Software Engineer",
    currentCompany: "Accenture",
  };
  return (
    <>
      {!userData ? (
        <div
          className="col-xl-3 shadow-lg rounded myRow"
          style={{ boxShadow: "0 0 10px #ffffff" }}
        >
          <div className="row" style={{ marginTop: "75%", paddingLeft: "35%" }}>
            <ThreeDots color="white" width={"20%"} />
          </div>
        </div>
      ) : (
        <div
          className="col-xl-3 shadow-lg rounded myRow"
          style={{ boxShadow: "0 0 10px #ffffff" }}
        >
          <div className="row" style={{ justifyContent: "center" }}>
            <Avatar
              image={userData1.image}
              alt={userData1.alt}
              className={"img-thumbnail"}
              style={{ width: "70%", maxWidth: "261px" }}
            />
            <DetailsSection userData={userData} />
          </div>
        </div>
      )}
    </>
  );
};

export default FirstHalf;
