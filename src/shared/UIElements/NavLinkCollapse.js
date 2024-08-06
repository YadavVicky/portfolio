import React from "react";
import { NavLink } from "react-router-dom";

import './NavLinkCollapse.css';

const NavLinkCollapse = props => {
    if (props.hideSecondHalf) {
        return (
            <div className="button-container">
                <NavLink end to="/education">
                    <button className="button">
                        <i className="fa-solid fa-building-columns fa-xl" style={{ color: '#ffffff' }}></i>
                    </button>
                </NavLink>
                <NavLink end to="/experience">
                    <button className="button">
                        <i className="fa-solid fa-briefcase fa-xl" style={{ color: '#f5f5f5' }}></i>
                    </button>
                </NavLink>
                <NavLink end to="/projects">
                    <button className="button">
                        <i className="fa-solid fa-code-commit fa-xl" style={{ color: "#ffffff" }}></i>
                    </button>
                </NavLink>
                <NavLink end to="/skills">
                    <button className="button">
                        <i className="fa-sharp fa-solid fa-star" style={{ color: "#ffffff" }}></i>
                    </button>
                </NavLink>
                {/* <NavLink end to="/contactme">
                    <button className="button">
                    <i className="fa-solid fa-address-book" style={{color: "#ffffff"}}></i>
                    </button>
                </NavLink> */}
                <button className="button" onClick={props.onClickMe}>
                    <i className="fa-solid fa-user"></i>
                </button>
            </div>
        );
    } else {
        return (<div className="button-container">
            <button className="button" onClick={props.onClickMe}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </div>)
    }
}

export default NavLinkCollapse;