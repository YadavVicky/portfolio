import React from "react";
import { NavLink } from "react-router-dom";
import './SideNavbar.css';

const SideNavbar = props => {
    if(!props.collapse){
    return <>
            <nav className="nav flex-column myNavBar">
                <NavLink end to="/education">
                    <button className="nav-link mb-3" data-toggle="tooltip" title="Education">
                        <i className="fa-solid fa-building-columns fa-xl" style={{color: '#ffffff'}}></i>
                    </button>
                </NavLink>
                <NavLink end to="/experience" data-toggle="tooltip" title="Experience">
                    <button className="nav-link mb-3">
                        <i className="fa-solid fa-briefcase fa-xl" style={{color: '#f5f5f5'}}></i>
                    </button>
                </NavLink>
                <NavLink end to="/projects">
                    <button className="nav-link mb-3" data-toggle="tooltip" title="Projects">
                        <i className="fa-solid fa-code-commit fa-xl" style={{color: "#ffffff"}}></i>
                    </button>
                </NavLink>
                <NavLink end to="/skills">
                    <button className="nav-link mb-3" data-toggle="tooltip" title="Skills">
                    <i className="fa-sharp fa-solid fa-star" style={{color: "#ffffff"}}></i>
                    </button>
                </NavLink>
                <NavLink end to="/contactme">
                    <button className="nav-link mb-3" data-toggle="tooltip" title="Contact Me">
                    <i className="fa-solid fa-address-book" style={{color: "#ffffff"}}></i>
                    </button>
                </NavLink>
            </nav>
        </>
    }
}

export default SideNavbar;