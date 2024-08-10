// src/Components/ReportsLayout/ReportsLayout.js
import React, { useState } from 'react';
import './ReportsLayout.css'; // Import CSS file for styling

const ReportsLayout = () => {
  const [reports, setReports] = useState([
    { id: 1, doctorName: 'Dr. John Doe', doctorSpeciality: 'Cardiologist', report: '', download: '', reviewGiven: false },
    { id: 2, doctorName: 'Dr. Jane Smith', doctorSpeciality: 'Dermatologist', report: '', download: '', reviewGiven: false },
    { id: 3, doctorName: 'Dr. Mike Johnson', doctorSpeciality: 'Pediatrician', report: '', download: '', reviewGiven: false }
  ]);

  const [showReport, setShowReport] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const openReport = (id) => {
    const doctor = reports.find(report => report.id === id);
    setSelectedDoctor(doctor);
    setShowReport(true);
  };

  const closeReport = () => {
    setShowReport(false);
    setSelectedDoctor(null);
  };

  const handleReportSubmit = (feedback, rating) => {
    const updatedReports = reports.map(report => {
      if (report.id === selectedDoctor.id) {
        return { ...report, reviewGiven: true }; // Adjust as needed
      }
      return report;
    });
    setReports(updatedReports);
    closeReport();
  };

  return (
    <div className="report">
      <h1>Your Reports</h1>
      {reports.map(report => (
        <div key={report.id}>
          <h2>{report.doctorName} - {report.doctorSpeciality}</h2>
          <button onClick={() => openReport(report.id)}>View Report</button>
        </div>
      ))}

      {showReport && selectedDoctor && (
        <div className="report-popup">
          {/* Replace with your actual Report component */}
          <div>
            <h2>{selectedDoctor.doctorName}</h2>
            {/* Render report details here */}
            <button onClick={closeReport}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportsLayout;
