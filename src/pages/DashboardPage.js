import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.css';

function DashboardPage() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
        <p>Manage your courses, track progress, and customize your learning experience!</p>
      </header>

      {/* Dashboard Actions */}
      <div className="dashboard-actions">
        <h2>Quick Actions</h2>
        <ul>
          <li><Link to="/courses">📚 View Courses</Link></li>
          <li><Link to="/profile">👤 View Profile</Link></li>
          <li><Link to="/settings">⚙️ Settings</Link></li>
          <li><Link to="/assignments">📝 Assignments</Link></li>
          <li><Link to="/progress">📊 Progress Tracker</Link></li>
          <li><Link to="/announcements">📢 Announcements</Link></li>
          <li><Link to="/logout">🚪 Logout</Link></li>
        </ul>
      </div>

      {/* Progress Overview */}
      <section className="progress-overview">
        <h2>Your Progress</h2>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '75%' }}>75%</div>
        </div>
        <p>You're making great progress! Keep learning.</p>
      </section>

      {/* Announcements Section */}
      <section className="announcements">
        <h2>Latest Announcements</h2>
        <div className="announcement">
          <h3>📢 New Course Added: Advanced JavaScript</h3>
          <p>Explore new JavaScript concepts and level up your coding skills.</p>
        </div>
        <div className="announcement">
          <h3>📅 Exam Schedule Released</h3>
          <p>Check out the updated exam dates in your profile.</p>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="featured-courses">
        <h2>Recommended Courses for You</h2>
        <div className="course-card">
          <h3>React for Beginners</h3>
          <p>Learn the basics of React and build your first project.</p>
          <Link to="/courses/react">
            <button className="cta-button">Start Now</button>
          </Link>
        </div>
        <div className="course-card">
          <h3>Python for Data Science</h3>
          <p>Dive into data analysis and machine learning with Python.</p>
          <Link to="/courses/data-science">
            <button className="cta-button">Start Now</button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>© 2025 Education Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default DashboardPage;
