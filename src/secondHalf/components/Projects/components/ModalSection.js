import React, { useState } from "react";

const ModalSection = props => {
    let skillsList = [];
    if (props.projectDetail.skillList) {
        skillsList = props.projectDetail.skillList.split(',');
    }
    function GitHubNewTab() {
        window.open(props.projectDetail.gitHubLink, "_blank");
    }
    function ProjectNewTab() {
        window.open(props.projectDetail.websiteLink, "_blank");
    }
    return (
        <>
            <div className="modal fade" id={'hexa' + props.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div style={{ minHeight: '70vh' }} className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title display-6" style={{ color: 'black' }} id="staticBackdropLabel">{props.projectDetail.projectName}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div style={{ minWidth: '100%' }} className="modal-body">
                            <div className="row" style={{ color: "black" }}>
                                <div className="col-3">
                                    <p>Description:-</p>
                                </div>
                                <div className="col-9">
                                    <p>{props.projectDetail.projectDescription}</p>
                                </div>
                            </div>
                            <hr style={{ color: "black" }}></hr>
                            <div className="row" style={{ color: "black" }}>
                                <div className="col-3">
                                    <p>Skills:-</p>
                                </div>
                                <div className="col-9">
                                    <p>{skillsList && skillsList.map(element=>{
                                        return <button style={{marginLeft: "10px",marginBottom: "5px"}} className="btn btn-outline-dark">{element}</button>
                                    })}</p>
                                </div>
                            </div>
                            <hr style={{ color: "black" }}></hr>
                            <div className="row" style={{ color: "black" }}>
                                <div className="col-3">
                                    <p>GitHub:-</p>
                                </div>
                                <div className="col-9">
                                    <p style={{color: "red"}}>{props.projectDetail.gitHubLink ? <button style={{ border: 'none' }} onClick={GitHubNewTab}><i className="fa-brands fa-github fa-xl"></i></button> : "Not Available"}</p>
                                </div>
                            </div>
                            <hr style={{ color: "black" }}></hr>
                            <div className="row" style={{ color: "black" }}>
                                <div className="col-3">
                                    <p>WebSite:-</p>
                                </div>
                                <div className="col-9">
                                    <p style={{color: "red"}}>{props.projectDetail.websiteLink ? <button style={{ border: 'none' }} onClick={ProjectNewTab}><i className="fa-solid fa-link fa-xl"></i></button> : "Not Available"}</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="button-24" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalSection;