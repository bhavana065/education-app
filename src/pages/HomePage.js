import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import AOS from "aos";
import "aos/dist/aos.css";

function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);

  const features = [
    "Comprehensive Courses",
    "Interactive Lessons",
    "Expert Instructors",
    "24/7 Support"
  ];

  const courses = [
    { title: "React Development", desc: "Learn React from basics to advanced.", link: "/courses/react" },
    { title: "Data Science with Python", desc: "Master data analysis and ML techniques.", link: "/courses/data-science" },
    { title: "Cybersecurity Fundamentals", desc: "Protect systems & networks from threats.", link: "/courses/cybersecurity" }
  ];

  const testimonials = [
    { text: "This platform helped me improve my grades. The courses are amazing!", name: "Student A", img: "https://via.placeholder.com/100" },
    { text: "I love the interactive lessons and expert instructors!", name: "Student B", img: "https://via.placeholder.com/100" },
    { text: "Great learning experience, highly recommended!", name: "Student C", img: "https://via.placeholder.com/100" }
  ];

  const instructors = [
    { name: "John Doe", subject: "React Development", image: "https://via.placeholder.com/100" },
    { name: "Jane Smith", subject: "Data Science", image: "https://via.placeholder.com/100" }
  ];

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="home-header" data-aos="fade-in">
        <h1>Welcome to the Education Platform</h1>
        <p>Learn, Grow, and Achieve your academic goals with us!</p>
        <div className="cta-buttons">
          <Link to="/login"><button className="cta-button">Login</button></Link>
          <Link to="/dashboard"><button className="cta-button">Go to Dashboard</button></Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="features-section" data-aos="fade-up">
        <h2>Our Features</h2>
        <ul>
          {features.map((feature, index) => <li key={index}>✔️ {feature}</li>)}
        </ul>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section" data-aos="fade-up">
        <h2>How It Works</h2>
        <div className="steps-grid">
          <div className="step">
            <h3>Step 1: Browse Courses</h3>
            <p>Explore a variety of courses across different subjects.</p>
          </div>
          <div className="step">
            <h3>Step 2: Enroll</h3>
            <p>Sign up for courses that match your interests and goals.</p>
          </div>
          <div className="step">
            <h3>Step 3: Learn and Achieve</h3>
            <p>Take interactive lessons and gain the skills you need.</p>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="featured-courses" data-aos="fade-up">
        <h2>Featured Courses</h2>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
              <Link to={course.link}><button className="cta-button">Learn More</button></Link>
            </div>
          ))}
        </div>
      </section>

      {/* Instructor Highlights Section */}
      <section className="instructor-highlight" data-aos="fade-up">
        <h2>Featured Instructors</h2>
        <div className="instructor-grid">
          {instructors.map((instructor, index) => (
            <div className="instructor" key={index}>
              <img src={instructor.image} alt={instructor.name} />
              <h3>{instructor.name}</h3>
              <p>{instructor.subject}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" data-aos="fade-up">
        <h2>What Our Students Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <img src={testimonial.img} alt={testimonial.name} />
              <p>"{testimonial.text}"</p>
              <p>- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section" data-aos="fade-up">
        <h2>Stay Updated</h2>
        <p>Sign up for our newsletter to get the latest updates on courses, events, and more.</p>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit" className="cta-button">Subscribe</button>
        </form>
      </section>

      {/* Image Section */}
      <section className="image-section" data-aos="fade-up">
        <img src="https://via.placeholder.com/600x300" alt="Education" loading="lazy" />
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <ul>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms of Service</Link></li>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default HomePage;
