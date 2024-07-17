import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/Landing_Page';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import AppointmentsPage from './Components/AppointmentsPage/AppointmentsPage';
import Notification from './Components/Notification/Notification';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/instantconsultation" element={<InstantConsultation />} />
          <Route path="/searchdoctors" element={<AppointmentsPage />} />
          {/* Ensure the Notification component is correctly placed */}
          <Route path="/notification" element={<Notification />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="instant-consultation" element={<InstantConsultation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
