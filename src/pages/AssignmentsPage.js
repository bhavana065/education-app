import React, { useState } from 'react';
import './AssignmentsPage.css'; // Make sure to create this CSS file for styling

const assignmentsData = [
  { id: 1, title: "Math Homework", subject: "Mathematics", dueDate: "Feb 5, 2025", status: "Pending", description: "Solve 10 algebra problems." },
  { id: 2, title: "Science Project", subject: "Science", dueDate: "Feb 10, 2025", status: "Pending", description: "Prepare a model on the solar system." },
  { id: 3, title: "History Essay", subject: "History", dueDate: "Feb 15, 2025", status: "Completed", description: "Write an essay on World War II." }
];

function AssignmentsPage() {
  const [assignments, setAssignments] = useState(assignmentsData);
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortOption, setSortOption] = useState("dueDate");

  const markAsCompleted = (id) => {
    setAssignments(assignments.map(a => 
      a.id === id ? { ...a, status: "Completed" } : a
    ));
  };

  const filteredAssignments = assignments.filter(a => {
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.subject.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === "all" || a.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const sortedAssignments = filteredAssignments.sort((a, b) => {
    if (sortOption === "dueDate") {
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="assignments-container">
      <h1>📚 Your Assignments</h1>
      <p>View pending and completed assignments.</p>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search assignments..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      {/* Filter and Sort */}
      <div className="filters">
        <select onChange={(e) => setFilterStatus(e.target.value)} value={filterStatus}>
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
          <option value="dueDate">Sort by Due Date</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>

      {/* Assignment List */}
      <div className="assignments-list">
        {sortedAssignments.map(a => (
          <div key={a.id} className={`assignment-item ${a.status.toLowerCase()}`}>
            <h3 onClick={() => setExpanded(expanded === a.id ? null : a.id)}>
              {a.title} ({a.dueDate}) - {a.status} 
              {expanded === a.id ? " 🔼" : " 🔽"}
            </h3>
            {expanded === a.id && (
              <div>
                <p><strong>Subject:</strong> {a.subject}</p>
                <p>{a.description}</p>
                {a.status === "Pending" && (
                  <button onClick={() => markAsCompleted(a.id)} className="complete-btn">
                    ✅ Mark as Completed
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination (if necessary) */}
      {sortedAssignments.length > 3 && (
        <div className="pagination">
          <button onClick={() => alert("Load More Feature Coming Soon!")}>Load More</button>
        </div>
      )}
    </div>
  );
}

export default AssignmentsPage;
