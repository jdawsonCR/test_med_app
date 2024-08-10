// src/Components/ReportsLayout/ReportsLayout.js
import React, { useState } from 'react';
import './ReportsLayout.css'; // Import CSS file for styling

const ReportsLayout = () => {
  const [reports, setReports] = useState([
    { id: 1, doctorName: 'Dr. John Doe', doctorSpeciality: 'Cardiologist', report: 'report1.pdf', download: 'report1.pdf', reviewGiven: false },
    { id: 2, doctorName: 'Dr. Jane Smith', doctorSpeciality: 'Dermatologist', report: 'report2.pdf', download: 'report2.pdf', reviewGiven: false },
    { id: 3, doctorName: 'Dr. Mike Johnson', doctorSpeciality: 'Pediatrician', report: 'report3.pdf', download: 'report3.pdf', reviewGiven: false }
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
    <div className="reports-layout">
      <h1>Your Reports</h1>
      <table className="reports-table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Specialty</th>
            <th>View Report</th>
            <th>Download Report</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={report.id}>
              <td>{index + 1}</td>
              <td>{report.doctorName}</td>
              <td>{report.doctorSpeciality}</td>
              <td>
                <button onClick={() => openReport(report.id)}>View Report</button>
              </td>
              <td>
                <a href={report.download} download>
                  <button>Download</button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showReport && selectedDoctor && (
        <div className="report-popup">
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
