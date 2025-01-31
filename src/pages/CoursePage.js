import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';
import './CoursePage.css';

function CoursePage() {
  const [courses] = useState([
    {
      title: 'React for Beginners',
      description: 'Learn the fundamentals of React for building modern web applications.',
      duration: '4 weeks',
      instructor: 'John Doe',
      rating: 4.5,
      category: 'adults',
    },
    {
      title: 'JavaScript for Kids',
      description: 'Fun and interactive JavaScript tutorials designed for kids.',
      duration: '3 weeks',
      instructor: 'Jane Smith',
      rating: 4.7,
      category: 'kids',
    },
    {
      title: 'Python for Students',
      description: 'Learn Python programming with hands-on projects designed for students.',
      duration: '6 weeks',
      instructor: 'Alice Brown',
      rating: 4.8,
      category: 'students',
    },
    {
      title: 'Advanced AI Programming',
      description: 'Explore machine learning and AI algorithms with advanced programming.',
      duration: '8 weeks',
      instructor: 'Robert Green',
      rating: 5.0,
      category: 'adults',
    },
    {
      title: 'Math for Kids',
      description: 'A fun math course aimed at helping kids build strong math skills.',
      duration: '4 weeks',
      instructor: 'Olivia White',
      rating: 4.3,
      category: 'kids',
    },
    {
      title: 'College-Level Chemistry',
      description: 'An in-depth course on chemistry for students preparing for exams.',
      duration: '10 weeks',
      instructor: 'Daniel Gray',
      rating: 4.6,
      category: 'students',
    },
    {
      title: 'Introduction to Digital Marketing',
      description: 'Learn the basics of digital marketing and how to apply it in real-world scenarios.',
      duration: '5 weeks',
      instructor: 'Maria Clark',
      rating: 4.9,
      category: 'adults',
    },
    {
      title: 'HTML & CSS for Kids',
      description: 'An interactive HTML and CSS course designed for young learners.',
      duration: '3 weeks',
      instructor: 'Sophia King',
      rating: 4.4,
      category: 'kids',
    },
    // New courses for various domains and subjects
    {
      title: 'Telugu for Kids',
      description: 'Learn the basics of the Telugu language with fun and engaging activities.',
      duration: '4 weeks',
      instructor: 'Ravi Kumar',
      rating: 4.6,
      category: 'kids',
    },
    {
      title: 'Hindi for Beginners',
      description: 'An introductory course to learning Hindi, focusing on speaking and writing skills.',
      duration: '3 weeks',
      instructor: 'Priya Mehta',
      rating: 4.7,
      category: 'kids',
    },
    {
      title: 'English Grammar for Kids',
      description: 'Improve grammar skills in English with fun exercises and games.',
      duration: '4 weeks',
      instructor: 'Neha Sharma',
      rating: 4.8,
      category: 'kids',
    },
    {
      title: 'Mathematics for Kids',
      description: 'Engage in fun and creative math activities to build a solid foundation.',
      duration: '5 weeks',
      instructor: 'Suresh Rao',
      rating: 4.7,
      category: 'kids',
    },
    {
      title: 'Social Studies for Kids',
      description: 'An interactive social studies course covering history, geography, and more.',
      duration: '6 weeks',
      instructor: 'Kiran Patel',
      rating: 4.5,
      category: 'kids',
    },
    {
      title: 'Biology for Kids',
      description: 'Explore the wonders of biology with easy-to-understand concepts.',
      duration: '5 weeks',
      instructor: 'Dr. Asha Reddy',
      rating: 4.9,
      category: 'kids',
    },
    {
      title: 'Basic Cooking Skills for Kids',
      description: 'Learn essential cooking skills in a fun and safe environment.',
      duration: '4 weeks',
      instructor: 'Meera Soni',
      rating: 4.8,
      category: 'kids',
    },
    {
      title: 'Basic Physics for Students',
      description: 'Learn the basics of physics through interactive experiments and theory.',
      duration: '6 weeks',
      instructor: 'Dr. Anil Kumar',
      rating: 4.5,
      category: 'students',
    },
    {
      title: 'Advanced Biology for Students',
      description: 'In-depth study of biology, including genetics, evolution, and ecosystems.',
      duration: '8 weeks',
      instructor: 'Dr. Ramesh Verma',
      rating: 4.8,
      category: 'students',
    },
    {
      title: 'Business Management for Adults',
      description: 'A comprehensive course on business principles, marketing, and management.',
      duration: '10 weeks',
      instructor: 'Alex Taylor',
      rating: 5.0,
      category: 'adults',
    },
    {
      title: 'Introduction to Psychology for Students',
      description: 'Study the basics of human behavior, psychology theories, and case studies.',
      duration: '6 weeks',
      instructor: 'Dr. Sarah Lee',
      rating: 4.6,
      category: 'students',
    },
    {
      title: 'Art & Design for Beginners',
      description: 'Explore the world of art and design, learning fundamental techniques.',
      duration: '8 weeks',
      instructor: 'Emily Davis',
      rating: 4.7,
      category: 'adults',
    },
    {
      title: 'Music Theory for Beginners',
      description: 'Learn the fundamentals of music theory and improve musical skills.',
      duration: '6 weeks',
      instructor: 'David Wong',
      rating: 4.6,
      category: 'adults',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('title');
  const [visibleCourses, setVisibleCourses] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCourses = courses.filter(course => {
    return (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === 'all' || course.category === selectedCategory);
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortOption === 'rating') {
      return b.rating - a.rating;
    }
    if (sortOption === 'duration') {
      return a.duration.localeCompare(b.duration);
    }
    return a.title.localeCompare(b.title);
  });

  const loadMoreCourses = () => {
    setVisibleCourses(visibleCourses + 3);
  };

  return (
    <div className="course-page">
      <h1>Our Courses</h1>

      <input
        type="text"
        placeholder="Search Courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
        <option value="all">All Categories</option>
        <option value="kids">Kids</option>
        <option value="students">Students</option>
        <option value="adults">Adults</option>
      </select>

      <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
        <option value="title">Sort by Title</option>
        <option value="rating">Sort by Rating</option>
        <option value="duration">Sort by Duration</option>
      </select>

      <div className="course-list">
        {sortedCourses.slice(0, visibleCourses).map((course, index) => (
          <CourseCard 
            key={index} 
            title={course.title} 
            description={course.description} 
            duration={course.duration} 
            instructor={course.instructor} 
            rating={course.rating} 
          />
        ))}
      </div>

      {visibleCourses < sortedCourses.length && (
        <button onClick={loadMoreCourses}>Load More</button>
      )}
    </div>
  );
}

export default CoursePage;
