import React from "react";

import './Header.css';

const Header = props => {
    return (
        <div className="header">
            <h1 className="display-6 fw-bold">{props.heading}</h1>
        </div>
    );
}

export default Header;