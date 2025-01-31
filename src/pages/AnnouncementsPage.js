import React, { useState } from 'react';

const announcementsData = [
  { id: 1, title: "New Course Added: Data Science", date: "Jan 30, 2025", category: "Courses", details: "We have added a new Data Science course to the platform!" },
  { id: 2, title: "Scheduled Maintenance", date: "Feb 5, 2025", category: "System", details: "Our platform will be down for maintenance from 12 AM to 4 AM." },
  { id: 3, title: "Scholarship Applications Open", date: "Feb 10, 2025", category: "Opportunities", details: "Apply for our 2025 academic scholarships before March 15." }
];

function AnnouncementsPage() {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);

  const filteredAnnouncements = announcementsData.filter(announcement =>
    announcement.title.toLowerCase().includes(search.toLowerCase()) ||
    announcement.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="announcements-container">
      <h1>📢 Announcements</h1>
      <p>Stay updated with the latest news and updates.</p>

      <input
        type="text"
        placeholder="Search announcements..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <div className="announcements-list">
        {filteredAnnouncements.map(announcement => (
          <div key={announcement.id} className="announcement-item">
            <h3 onClick={() => setExpanded(expanded === announcement.id ? null : announcement.id)}>
              {announcement.title} ({announcement.date}) 
              {expanded === announcement.id ? " 🔼" : " 🔽"}
            </h3>
            {expanded === announcement.id && <p>{announcement.details}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnnouncementsPage;
