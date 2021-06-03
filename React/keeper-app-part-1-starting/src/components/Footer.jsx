import React from "react";

function Footer() {
    // dynamically updated year.
    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <footer>
            <p>Copyright ⓒ {currentYear}</p>
        </footer>
    );
}


export default Footer;