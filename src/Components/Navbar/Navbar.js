import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import Navbar.css


function handleClick() {
    // Define your click handler logic here
}

function Navbar() {
    return (
        <nav>
            {/* Navigation logo section */}
            <div className="nav__logo">
                {/* Link to the home page */}
                <a href="/" style={{ color: '#2190ff', textDecoration: 'none' }}>
                    Get Care
                </a>
                <img src="/Medical_icon.svg" height="30" width="30" style={{ paddingLeft: '15px' }} alt="Medical bag icon" />
                {/* A span element for styling purposes */}
            </div>
            {/* Navigation icon section with an onClick event listener */}
            <div className="nav__icon" onClick={handleClick}>
                {/* Font Awesome icon for bars (hamburger menu) */}
                <i className="fa fa-times fa fa-bars"></i>
            </div>

            {/* Unordered list for navigation links with 'active' class */}
            <ul className="nav__links active">
                {/* List item for the 'Home' link */}
                <li className="link">
                    <a href="../Landing_Page/LandingPage.html">Home</a>
                </li>
                {/* List item for the 'Appointments' link */}
                <li className="link">
                    <a href="#">Appointments</a>
                </li>
                <li className="link">
                    <a href="#">Reviews</a>
                </li>
                {/* List item for the 'Sign Up' link with a button */}
                <li className="link">
                    <Link to="/signup">
                        <button className="btn1">Sign Up</button>
                    </Link>
                </li>
                {/* List item for the 'Login' link with a button */}
                <li className="link">
                    <Link to="/login">
                        <button className="btn1">Login</button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
