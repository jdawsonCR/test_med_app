import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";


const Navbar = () => {
    const [click, setClick] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const[email,setEmail]=useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const handleClick = () => setClick(!click);

    
    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        // remove email phone
        localStorage.removeItem("doctorData");
        setIsLoggedIn(false);
        // setUsername("");
       
        // Remove the reviewFormData from local storage
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key.startsWith("reviewFormData_")) {
            localStorage.removeItem(key);
          }
        }
        setEmail('');
        window.location.reload();
    }
    const handleDropdown = () => {
      setShowDropdown(!showDropdown);
    }
    useEffect(() => { 
      const storedemail = sessionStorage.getItem("email");

      if (storedemail) {
            setIsLoggedIn(true);
            setUsername(storedemail);
          }
        }, []);
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
                {isLoggedIn?(
          <>
            <li className="link">
              <button className="btn2" onClick={handleLogout}>
                Logout
              </button>
            </li>
            
          </>
        ) : (
          <>
            <li className="link">
              <Link to="/signup">
                <button className="btn1">Sign Up</button>
              </Link>
            </li>
            <li className="link">
              <Link to="/login">
                <button className="btn1">Login</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
