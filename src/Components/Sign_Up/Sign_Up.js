import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sign_Up.css'; // Import Sign_Up.css

function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let formErrors = {};

        // Validate name
        if (!/^\w+\s+\w+/.test(formData.name)) {
            formErrors.name = "Please enter both first and last name.";
        }

        // Validate phone number
        if (!/^\d{10}$/.test(formData.phone)) {
            formErrors.phone = "Phone number must be exactly 10 digits.";
        }

        // Validate email
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Please enter a valid email address.";
        }

        // Validate password
        if (formData.password.length < 6) {
            formErrors.password = "Password must be at least 6 characters long.";
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Form is valid, proceed with submission (e.g., API call)
            console.log("Form submitted successfully!");
        }
    };

    return (
        <div className="container" style={{ marginTop: '5%' }}>
            {/* Main container with margin-top */}
            <div className="signup-grid">
                {/* Grid layout for sign-up form */}
                <div className="signup-text">
                    {/* Title for the sign-up form */}
                    <h1>Sign Up</h1>
                </div>
                <div className="signup-text1" style={{ textAlign: 'left', paddingBottom: '20px' }}>
                    {/* Text for existing members to log in */}
                    <span><Link to="/login" style={{ color: 'white' }}>Member Sign In</Link></span>
                </div>
                <div className="signup-form">
                    {/* Form for user sign-up */}
                    <form onSubmit={handleSubmit}>
                        {/* Start of the form */}
                        <div className="form-group">
                            {/* Form group for user's name */}
                            <label htmlFor="name">Name</label>
                            {/* Label for name input field */}
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                className="form-control"
                                placeholder="Enter your name"
                                aria-describedby="helpId"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <span className="error">{errors.name}</span>}
                            {/* Text input field for name */}
                        </div>
                        <div className="form-group">
                            {/* Form group for user's phone number */}
                            <label htmlFor="phone">Phone</label>
                            {/* Label for phone input field */}
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                required
                                className="form-control"
                                placeholder="Enter your phone number"
                                aria-describedby="helpId"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <span className="error">{errors.phone}</span>}
                            {/* Tel input field for phone number */}
                        </div>
                        <div className="form-group">
                            {/* Form group for user's email */}
                            <label htmlFor="email">Email</label>
                            {/* Label for email input field */}
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="form-control"
                                placeholder="Enter your email"
                                aria-describedby="helpId"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                            {/* Email input field */}
                        </div>
                        <div className="form-group">
                            {/* Form group for user's password */}
                            <label htmlFor="password">Password</label>
                            {/* Label for password input field */}
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required
                                className="form-control"
                                placeholder="Enter your password"
                                aria-describedby="helpId"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <span className="error">{errors.password}</span>}
                            {/* Password input field */}
                        </div>
                        <div className="btn-group">
                            {/* Button group for form submission and reset */}
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                            {/* Submit button */}
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                            {/* Reset button */}
                        </div>
                    </form>
                    {/* End of the form */}
                </div>
            </div>
        </div>
    );
}

export default SignUp;
