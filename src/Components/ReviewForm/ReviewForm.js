import React, { useState } from 'react';
import './ReviewForm.css'; // Import CSS file for styling

const ReviewForm = () => {
  // State to manage the list of reviews
  const [reviews, setReviews] = useState([
    { id: 1, doctorName: 'Dr. John Doe', doctorSpeciality: 'Cardiologist', feedback: '', reviewGiven: false },
    { id: 2, doctorName: 'Dr. Jane Smith', doctorSpeciality: 'Dermatologist', feedback: '', reviewGiven: false },
    { id: 3, doctorName: 'Dr. Mike Johnson', doctorSpeciality: 'Pediatrician', feedback: '', reviewGiven: false }
    // Add more initial data as needed
  ]);

  // Function to handle feedback submission
  const handleFeedbackSubmit = (id) => {
    const updatedReviews = reviews.map(review => {
      if (review.id === id) {
        return { ...review, reviewGiven: true };
      }
      return review;
    });
    setReviews(updatedReviews);
  };

  return (
    <div className="review-form">
      <h3>Please share feedback about your doctors</h3>
      <table className="review-table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Specialty</th>
            <th>Forms</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map(review => (
            <tr key={review.id}>
              <td>{review.id}</td>
              <td>{review.doctorName}</td>
              <td>{review.doctorSpeciality}</td>
              <td>
                {/* Replace input field with a button */}
                {!review.reviewGiven ? (
                  <button
                    onClick={() => handleFeedbackSubmit(review.id)}
                    className="feedback-button"
                  >
                    Provide Feedback
                  </button>
                ) : (
                  <span className="feedback-submitted">Feedback Submitted</span>
                )}
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={review.reviewGiven}
                  onChange={() => {}}
                  disabled
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewForm;
