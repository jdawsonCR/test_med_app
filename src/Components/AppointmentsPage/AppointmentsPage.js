import React, { useState } from 'react';
import FindDoctorSearch from '../FindDoctorSearch/FindDoctorSearch';
import DoctorCard from '../DoctorCard/DoctorCard';
import AppointmentsForm from '../AppointmentsForm/AppointmentsForm';
import './AppointmentsPage.css';

const AppointmentsPage = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: 'Dr. Anthony Smith',
      speciality: 'Orthopedic Surgery',
      experience: 32,
      ratings: 4.5,
      profilePic: '../Assets/Medical_icon.svg'
    },
    {
      id: 2,
      name: 'Dr. Fatima Alima',
      speciality: 'Orthopedic Surgery',
      experience: 14,
      ratings: 4.8,
      profilePic: '/Assets/User_Fatima.jpg'
    },
    {
      id: 3,
      name: 'Dr. Malia Kekoa',
      speciality: 'Orthopedic Surgery',
      experience: 8,
      ratings: 4.9,
      profilePic: '/Assets/User_Malia.jpg'
    },
    {
      id: 4,
      name: 'Dr. David Jones',
      speciality: 'Orthopedic Surgery',
      experience: 18,
      ratings: 2.3,
      profilePic: '/Assets/User_Scott.png'
    }
    // Add more doctor objects as needed
  ]);

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentInfo, setAppointmentInfo] = useState(null);

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCloseForm = () => {
    setSelectedDoctor(null);
  };

  const handleBookAppointment = (formData) => {
    setAppointmentInfo(formData);
  };

  return (
    <div className="appointments-page">
      <FindDoctorSearch />
      <div className="doctor-cards-container" style={{ paddingTop: '20px' }}>
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            name={doctor.name}
            speciality={doctor.speciality}
            experience={doctor.experience}
            ratings={doctor.ratings}
            profilePic={doctor.profilePic}
            onSelect={() => handleDoctorSelect(doctor)} // Pass onSelect callback
            appointmentInfo={appointmentInfo} // Pass appointmentInfo state
          />
        ))}
        {selectedDoctor && (
          <div className="modal-backdrop">
            <div className="modal-content">
              <AppointmentsForm
                doctor={selectedDoctor}
                onClose={handleCloseForm}
                onBookAppointment={handleBookAppointment} // Pass callback to handle appointment booking
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentsPage;
