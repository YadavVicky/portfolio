import React, { useEffect, useState } from "react";
import './CardView.css';

var database = null;

const CardView = props => {
    getDetails(props);
    var desc = '';
    var school = '';
    var major = '';
    if(database.isDegree){
        major = <p className="feature__desc">{database.major}</p>
        school = <p className="feature__desc">{database.school} ({database.year})</p>
        desc = <p className="feature__desc">CGPA: <span className="text-success">{database.marks} </span></p>
    }else{
        major = <p className="feature__desc">{database.board} ({database.major})</p>
        school = <p className="feature__desc">{database.school} ({database.year})</p>
        desc = <p className="feature__desc">Percentage: <span className="text-success">{database.marks}% </span></p>
    }
    return (
        <>
            <h2 className="feature__title">{database.degree}</h2>
            {school}
            {major}
            {desc}
            <p style={{ width: "20rem" }} className="feature__desc"></p>
        </>
    );
}

let getDetails = async (props) => {
    return database = props.data;
}

export default CardView;
