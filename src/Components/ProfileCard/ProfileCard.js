// src/Components/ProfileCard/ProfileCard.js
import React from 'react';
import './ProfileCard.css'; // Make sure you have styles for ProfileCard

const ProfileCard = ({ username, email, onClose }) => {
    return (
        <div className="profile-card">
            <button className="close-btn" onClick={onClose}>X</button>
            <h2>Profile</h2>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default ProfileCard;
