import React, { useState, useEffect } from "react";
import './Education.css';
import CardView from "./components/CardView";
import Header from "../../../shared/UIElements/Header";

const Education = () => {
    var myData = null;
    var [userEducation, setUserEducation] = useState(null);
    var [loaderValue, setLoaderValue] = useState(false);
    useEffect(() => {
        const sendReq = async () => {
            try {
                setLoaderValue(true);
                const response = await fetch('http://localhost:5000/api/education/');
                const responseData = await response.json();
                setUserEducation(responseData.educationList);
                console.log(userEducation);
                setLoaderValue(false);
            } catch (e) {
                console.log('Error');
            }
        }
        if (!userEducation) {
            sendReq();
        }
        if (!myData) {
            sendReq();
        }
    }, []);
    return (
        <>
            <Header heading="Education" />
            <div className="wrapper1">
                <section className="section-education">
                    <div className="features">
                        <div className="feature feature-1 font-monospace">
                            {userEducation && userEducation.length > 0 ?
                                <CardView data={userEducation && userEducation[0]} /> :
                                <p>No data</p>
                            }
                            <div className="feature__img">
                                <i style={{ color: "hsl(180, 62%, 55%)" }} className="fa-4x fa-solid fa-graduation-cap"></i>
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className="feature feature-2 font-monospace">
                                {userEducation && userEducation.length > 0 ?
                                    <CardView data={userEducation && userEducation[1]} /> :
                                    <p>No data</p>
                                }
                                <div className="feature__img">
                                    <i style={{ color: "hsl(0, 78%, 62%)" }} className="fa-4x fa-sharp fa-solid fa-school-flag"></i>
                                </div>
                            </div>
                            <div className="feature feature-3 font-monospace">
                                {userEducation && userEducation.length > 0 ?
                                    <CardView data={userEducation && userEducation[2]} /> :
                                    <p>No data</p>
                                }
                                <div className="feature__img">
                                    <i style={{ color: "hsl(34, 97%, 64%)" }} className="fa-4x fa-solid fa-bus"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    );
}

export default Education;
