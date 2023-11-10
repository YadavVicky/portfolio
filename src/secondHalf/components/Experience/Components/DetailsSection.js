import React from "react";
import DetailsList from "./DetailsList.";

const Details = props => {
    var experience_years = getExperience(props);
    var desc_array = getArrayDesc(props);
    return (
        <>
            <div className="accordion" style={{ width: "100%", display: "block", marginBlock: "20px" }}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        {props.projectDetail.currentFlag ?
                            <button className="accordion-button collapsed heading-Accordin" style={{backgroundColor: "#00cc88"}} type="button" data-bs-toggle="collapse" data-bs-target={"#panelsStayOpen-collapseOne" + props.id} aria-expanded="true" aria-controls={"panelsStayOpen-collapseOne" + props.id}>
                                <div style={{ width: "100%" }}>
                                    <div>{props.projectDetail && props.projectDetail.designation}</div>
                                </div>
                            </button> :
                            <button className="accordion-button collapsed heading-Accordin" style={{backgroundColor: "#fa5437"}} type="button" data-bs-toggle="collapse" data-bs-target={"#panelsStayOpen-collapseOne" + props.id} aria-expanded="true" aria-controls={"panelsStayOpen-collapseOne" + props.id}>
                                <div style={{ width: "100%" }}>
                                    <div>{props.projectDetail && props.projectDetail.designation}</div>
                                </div>
                            </button>}
                    </h2>
                    <div id={"panelsStayOpen-collapseOne" + props.id} className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <DetailsList experienceYear={experience_years} companyName={props.projectDetail.companyName} description={desc_array} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

let getExperience = (props) => {
    let getMonthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let milli_experience_start = (props.projectDetail && props.projectDetail.startDate);
    let milli_experience_end = (props.projectDetail && props.projectDetail.endDate);
    let date_start = new Date(parseInt(milli_experience_start));
    let date_end = new Date(parseInt(milli_experience_end));
    let return_value = '';
    return_value = getMonthName[date_start.getMonth()] + ',' + + date_start.getFullYear() + '-';
    if (props.projectDetail.currentFlag) {
        return_value += 'Current'
    } else {
        return_value += getMonthName[date_end.getMonth()] + ',' + + date_end.getFullYear();
    }
    return return_value;
}

let getArrayDesc = (props) => {
    let fullDesc = props.projectDetail.description;
    let new_array = fullDesc.split(':');
    return new_array;
}

export default Details;