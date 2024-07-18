import React, { useState } from 'react';
import './DoctorCard.css'; // Ensure the correct path to your CSS file if needed
import docIcon from '../Assets/Medical_icon.svg';
import AppointmentsForm from '../AppointmentsForm/AppointmentsForm'; // Correct import path

const DoctorCard = ({ name, speciality, experience, ratings, profilePic }) => {
  const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [showAppointmentsForm, setShowAppointmentsForm] = useState(false);

  const handleBookNow = (appointmentDate, timeSlot) => {
  setIsAppointmentBooked(true);
  // Create new appointment using passed parameters
  const newAppointment = {
    id: appointments.length + 1,
    name: 'John Doe', // Replace with actual user data
    phoneNumber: '123-456-7890', // Replace with actual user data
    appointmentDate: appointmentDate,
    timeSlot: timeSlot
  };
  setAppointments([...appointments, newAppointment]);
  setShowAppointmentsForm(false); // Close the form after booking
};

const handleCancelAppointment = (id) => {
  const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
  setAppointments(updatedAppointments);
  // Reset isAppointmentBooked if no more appointments
  if (updatedAppointments.length === 0) {
    setIsAppointmentBooked(false);
  }
};

const openAppointmentsForm = () => {
  setShowAppointmentsForm(true); // Open the appointments form
};

  return (
    <div className="doctor-card-container">
      <div className="doctor-card-details-container" style={{ backgroundColor: '#847DF9', padding: '0px' }}>
        <div className="doctor-card-profile-image-container" style={{ justifyContent: 'center' }}>
          <img src={docIcon} alt="Doctor Profile" style={{ height: '50px', width: '60px', borderRadius: '0%' }} />
        </div>
        <div className="doctor-card-details">
          <div className="doctor-card-detail-name">{name}</div>
          <div className="doctor-card-detail-speciality">{speciality}</div>
          <div className="doctor-card-detail-experience">{experience} years experience</div>
          <div className="doctor-card-detail-ratings">Ratings: {ratings}</div>
          {!isAppointmentBooked ? (
            <button className="book-now-button" onClick={openAppointmentsForm}>Book Now</button>
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
      {/* Render AppointmentsForm as a modal or dialog here */}
      {showAppointmentsForm && (
        <AppointmentsForm
          doctor={{ name, speciality, experience, ratings, profilePic }}
          onBookNow={handleBookNow}
          onClose={() => setShowAppointmentsForm(false)}
        />
      )}
    </div>
  );
};

export default DoctorCard;
