import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Import Sign_Up.css

function handleClick() {
    // Define your click handler logic here
}

function Login() {
    return (
                <div className="container">
            {/* Div for login grid layout */}
            <div className="login-grid">
                {/* Div for login text */}
                <div className="login-text">
                    <h1>Welcome Back!</h1>
                </div>
                {/* Additional login text with a Link to Sign Up page */}
                <div className="login-text1">
                    <span><Link to="/signup" style={{ color: 'white' }}>Create Account</Link></span>
                </div>
                <br />
                {/* Div for login form */}
                <div className="login-form">
                    <form>
                        {/* Form group for email input */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                        </div>
                        {/* Form group for password input */}
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter your password"
                                aria-describedby="helpId"
                            />
                        </div>
                        {/* Additional login text for 'Forgot Password' option */}
                        <div className="login-text1" style={{ paddingBottom: '30px' }}>
                            Forgot Password?
                        </div>
                        {/* Button group for login and reset buttons */}
                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button>
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                        </div>
                        <br />
                    </form>
                </div>
            </div>
        </div>
          );
}

export default Login;