// Import necessary modules from React library
import React, { useEffect } from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';

// Import Landing Page component
import Landing_Page from './Components/Landing_Page/Landing_Page';

// Import Landing Page component
import Sign_Up from './Components/Sign_Up/Sign_Up';

// Import Landing Page component
import Login from './Components/Login/Login';

// Import Landing Page component
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';

// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>

          {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define individual Route components for different pages */}
            <Route path="/" element={<Landing_Page/>}/>
            <Route path="/signup" element={<Sign_Up/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/instantconsultation" element={<InstantConsultation />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;