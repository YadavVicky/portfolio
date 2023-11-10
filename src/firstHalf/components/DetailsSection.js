import React, { useState } from "react";
import './DetailsSection.css';
import CardBody from "../../shared/UIElements/CardBody";

const DetailsSection = props => {
    var name = (props.userData  && props.userData.firstName) + ' ' + (props.userData && props.userData.middleName) + ' ' + (props.userData && props.userData.lastName);
    var currentLocation = (props.userData  && props.userData.currentLocation);
    var position = (props.userData  && props.userData.position);
    var experience = getMonthDiff(props);
    var company = (props.userData  && props.userData.currentCompany);
    return (
        <>
            <div>
                <div className="card myCard">
                    <div className="card-body" style={{marginTop: "0", marginBottom: "0"}}>
                        <CardBody title="Name" value={name} />
                        <CardBody title="Current Position" value={position} />
                        <CardBody title="Current Organisation" value={company} />
                        <CardBody title="Current Location" value={currentLocation} />
                        <CardBody title="Experience" value={experience} />
                    </div>
                </div>
            </div>
        </>
    );
}

let getMonthDiff = (props) => {
    //date calculation
    let milli_experience = (props.userData  && props.userData.experience);
    milli_experience = parseInt(milli_experience);
    let date_exp = new Date(milli_experience);
    let date1_cur = new Date();
    let monthDiff = date1_cur.getMonth() - date_exp.getMonth() + 12 * (date1_cur.getFullYear() - date_exp.getFullYear());
    let return_value = '';
    let years = Math.floor(monthDiff/12);
    let months = monthDiff%12;
    return_value = years + ' ' + (years < 2 ? 'Year' : 'Years') + ' ' + months + ' ' + (months < 2 ? 'Month' : 'Months');
    return return_value; 
}

export default DetailsSection;