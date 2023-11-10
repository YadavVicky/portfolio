import React, { useState } from "react";
import ModalSection from "./ModalSection";

const ProjectCards = props => {
    return (
        <>
            <div className="col-xl-6 text-center mt-5">
                <div className="card1 m-auto" style={{ width: '20rem' }}>
                    <div className="card-head1"></div>
                    <div className="card-body1 p-1">
                        <h5 className="card-title1">- {props.projectDetail.projectName} -</h5>
                        <p className="card-text1">{ props.projectDetail.projectDescription && props.projectDetail.projectDescription.substring(0,74) + '...'}</p>
                        <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target={"#hexa"+props.id}>
                            More Details
                        </button>
                    </div>
                </div>
            </div>
            <ModalSection key={props.id} id={props.id} projectDetail={props.projectDetail}/>
        </>
    );
}

export default ProjectCards;