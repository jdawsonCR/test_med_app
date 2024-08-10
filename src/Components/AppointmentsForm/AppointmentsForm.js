import React, { useState } from 'react';
import './AppointmentsForm.css'; // Import CSS file for styling

const AppointmentsForm = ({ doctor, onClose, onBookNow }) => {
  const [formData, setFormData] = useState({
    userNameAppt: '',
    phoneNumberAppt: '',
    appointmentDateAppt: '',
    timeSlotAppt: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  
  // Pass appointment data back to parent component (DoctorCard)
  onBookNow(formData);

  // Store appointment data in localStorage
  const appointmentData = {
    doctorNameAppt: doctor.name,
    doctorSpecialityAppt: doctor.speciality,
    userNameAppt: formData.userNameAppt, // Fixed the key name to match state
    phoneNumberAppt: formData.phoneNumberAppt, // Fixed the key name to match state
    appointmentDateAppt: formData.appointmentDateAppt, // Fixed the key name to match state
    timeSlotAppt: formData.timeSlotAppt // Fixed the key name to match state
  };

  localStorage.setItem('appointmentData', JSON.stringify(appointmentData));

  // Reset form fields after submission if needed
  setFormData({
    userNameAppt: '',
    phoneNumberAppt: '',
    appointmentDateAppt: '',
    timeSlotAppt: ''
  });

  // Close the form after submission
  onClose();
};

  return (
    <div className="appointments-form-modal">
      <div className="doctor-info">
        <h2>{doctor.name}</h2>
        <p>{doctor.speciality}</p>
        <p>Experience: {doctor.experience} years</p>
        <p>Ratings: {doctor.ratings}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userNameAppt" style={{ marginTop: '30px' }}>Your Name:</label>
          <input
            type="text"
            id="userNameAppt"
            name="userNameAppt"
            value={formData.userName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumberAppt">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumberAppt"
            name="phoneNumberAppt"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="appointmentDateAppt">Select Date:</label>
          <input
            type="date"
            id="appointmentDateAppt"
            name="appointmentDateAppt"
            value={formData.appointmentDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="timeSlotAppt">Select Time Slot:</label>
          <select
            id="timeSlotAppt"
            name="timeSlotAppt"
            value={formData.timeSlot}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Time</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>
        <button type="submit">Book Appointment</button>
        <button onClick={onClose} style={{ backgroundColor: 'red'}}>Close</button>
      </form>
    </div>
  );
};

export default AppointmentsForm;
