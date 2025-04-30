import React from "react";

import '../styles/Footer.css'

function Footer() {

    let yearDate = new Date()

    return (
        <footer>
            <p>&copy; The Food Factory, {yearDate.getFullYear()}</p>
        </footer>
    )
}

export default Footer;