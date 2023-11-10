import React from "react";

import './DetailsList.css';

const DetailsList = props => {
    return (
        <>
            <div id="example">
                <ul className="list">
                    <li className="shopping"><span className="title">Company Name:- {props.companyName}</span></li>
                    <li className="work"><span className="title">Year:- {props.experienceYear}</span></li>
                    <div>{props.description && props.description.map((element) => {
                        return (<li className="personal"><span className="title">{element}</span></li>)
                    })}</div>
                </ul>
            </div>
        </>
    );
}

export default DetailsList;