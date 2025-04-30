import React from "react";
import { Link } from "react-router-dom";

import '../styles/Navbar.css'

function Navbar() {

    return (
        <div className="nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/menu">Menu</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="contact/">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;