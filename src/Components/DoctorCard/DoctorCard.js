import React from 'react';
import './DoctorCard.css'; // Ensure the correct path to your CSS file if needed
import docIcon from '../Assets/Medical_icon.svg';

const DoctorCard = ({ name, speciality, experience, ratings, profilePic, onSelect }) => {
  const handleBookNow = () => {
    onSelect(); // Call the onSelect callback passed from AppointmentsPage
  };

  return (
    <div className="doctor-card-container">
      <div className="doctor-card-details-container" style={{ backgroundColor: '#847DF9', padding: '0px' }}>
        <div className="doctor-card-profile-image-container" style={{ justifyContent: 'center' }}>
          <img src={docIcon} alt="Profile Picture" style={{ height: '50px', width: '60px', borderRadius: '0%' }} />
        </div>
        <div className="doctor-card-details">
          <div className="doctor-card-detail-name">{name}</div>
          <div className="doctor-card-detail-speciality">{speciality}</div>
          <div className="doctor-card-detail-experience">{experience} years experience</div>
          <div className="doctor-card-detail-ratings">Ratings: {ratings}</div>
          <button className="book-now-button" onClick={handleBookNow}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
