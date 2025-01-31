import React from 'react';
import './CourseCard.css'; // Add styling

function CourseCard({ 
  title, 
  description, 
  duration, 
  instructor, 
  rating, 
  image, 
  price, 
  discount, 
  topics = [] 
}) {
  return (
    <div className="course-card">
      {/* Course Image */}
      {image && <img src={image} alt={title} className="course-image" />}

      {/* Course Title */}
      <h2>{title}</h2>

      {/* Course Description */}
      <p>{description}</p>

      {/* Course Information */}
      <div className="course-info">
        <p><strong>Duration:</strong> {duration}</p>
        <p><strong>Instructor:</strong> {instructor}</p>
        <p><strong>Rating:</strong> {rating} &#9733;</p>
      </div>

      {/* Pricing Section */}
      <div className="pricing">
        <p className="price"><strong>Price:</strong> ${price}</p>
        {discount && <p className="discount">Discount: {discount}% off</p>}
      </div>

      {/* Course Topics (Handles Empty Topics) */}
      <div className="course-details">
        <h4>Course Topics</h4>
        <ul>
          {topics.length > 0 ? (
            topics.map((topic, index) => <li key={index}>{topic}</li>)
          ) : (
            <li>No topics available</li>
          )}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="enroll-btn">Enroll Now</button>
        <button className="share-btn">Share</button>
      </div>
    </div>
  );
}

export default CourseCard;
