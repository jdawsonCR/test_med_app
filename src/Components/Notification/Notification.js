import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css'; // Ensure the correct path to your CSS file

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem('appointmentData'));

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  }, []);

  return (
    <div className="notification-container">
      <Navbar />
      {children}
      {isLoggedIn && appointmentData && (
        <div className="notification-box">
          <div className="appointment-card">
            <div className="appointment-card__content">
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message">
                <strong>Doctor:</strong> {doctorData?.name}
              </p>
              <p className="appointment-card__message">
                <strong>User:</strong> {appointmentData.userName}
              </p>
              <p className="appointment-card__message">
                <strong>Date:</strong> {appointmentData.appointmentDate}
              </p>
              <p className="appointment-card__message">
                <strong>Time:</strong> {appointmentData.timeSlot}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
