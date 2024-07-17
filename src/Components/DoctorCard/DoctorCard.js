import React, { useState } from 'react';
import './DoctorCard.css'; // Ensure the correct path to your CSS file if needed
import docIcon from '../Assets/Medical_icon.svg';

const DoctorCard = ({ name, speciality, experience, ratings, profilePic, onSelect }) => {
  const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const handleBookNow = () => {
    onSelect(); // Call the onSelect callback passed from AppointmentsPage
    setIsAppointmentBooked(true);
    // Simulate appointment info (replace with actual data from form submission)
    const newAppointment = {
      id: appointments.length + 1, // Unique ID for each appointment (replace with actual ID logic)
      appointmentDate: '2024-07-20',
      timeSlot: 'morning'
    };
    setAppointments([...appointments, newAppointment]);
  };

  const handleCancelAppointment = (id) => {
    const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
    setAppointments(updatedAppointments);
    // Reset isAppointmentBooked if no more appointments
    if (updatedAppointments.length === 0) {
      setIsAppointmentBooked(false);
    }
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
          {!isAppointmentBooked ? (
            <button className="book-now-button" onClick={handleBookNow}>Book Now</button>
          ) : (
            <div>
              {appointments.map(appointment => (
                <div key={appointment.id} className="appointment-info">
                  <p>Appointment Booked!</p>
                  <p>Date: {appointment.appointmentDate}</p>
                  <p>Time Slot: {appointment.timeSlot}</p>
                  <button onClick={() => handleCancelAppointment(appointment.id)}>Cancel</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
