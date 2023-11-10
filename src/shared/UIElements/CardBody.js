import React from "react";
import './CardBody.css';

const CardBody = props => {
    return (
        <div className="card-body">
            <h5 className="card-title myCardTitle">{props.title}</h5>
            <p className="card-text myCardText font-monospace fst-italic fw-semibold">{props.value}</p>
        </div>
    );
}

export default CardBody;