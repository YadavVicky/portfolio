import React from "react";

import './ProgressBar.css';

const ProgressBar = props => {
    return (
        <section className="aezakmiaa card mt-4">
            <div className="card-body pb-2">
                <div className={`text-${props.backGround}`}>
                    <h6>{`${props.skillName} :- ${props.percent}%`}</h6>
                    <div className="progress mb-3 myBackground">
                        <div className={`myProgress-${props.percent} progress-bar bg-${props.backGround}`}
                            role="progressbar" style={{ width: `${props.percent}%` }}
                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProgressBar;