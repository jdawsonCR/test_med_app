import React, { useState } from 'react';
import './AppointmentsForm.css'; // Import CSS file for styling

const AppointmentsForm = ({ doctor, onClose }) => {
  const [formData, setFormData] = useState({
    userName: '',
    phoneNumber: '',
    appointmentDate: '',
    timeSlot: ''
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
  // Logic to handle form submission (e.g., API call)
  
  // Store appointment data in localStorage
  const appointmentData = {
      doctorName: doctor.name,
      doctorSpeciality: doctor.speciality,
      userName: formData.userName,
      phoneNumber: formData.phoneNumber,
      appointmentDate: formData.appointmentDate,
      timeSlot: formData.timeSlot
  };
  localStorage.setItem('appointmentData', JSON.stringify(appointmentData));

  // Reset form fields after submission if needed
  setFormData({
    userName: '',
    phoneNumber: '',
    appointmentDate: '',
    timeSlot: ''
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
          <label htmlFor="userName" style={{ marginTop: '30px' }}>Your Name:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="appointmentDate">Select Date:</label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="timeSlot">Select Time Slot:</label>
          <select
            id="timeSlot"
            name="timeSlot"
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
