import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ProgressPage() {
  const [progress, setProgress] = useState([
    { course: "React Basics", completion: 80, score: 85 },
    { course: "Advanced JavaScript", completion: 60, score: 78 },
    { course: "Data Science", completion: 40, score: 72 },
  ]);

  const [leaderboard] = useState([
    { name: "Alice", score: 95 },
    { name: "Bob", score: 88 },
    { name: "You", score: 85 },
    { name: "Charlie", score: 82 },
  ]);

  const [goals, setGoals] = useState([
    "Complete React Basics by next week 🚀",
    "Score 90+ in JavaScript course 🎯",
    "Finish Data Science module by next month 📅",
  ]);

  return (
    <div className="progress-container">
      <h1>📈 Progress Tracker</h1>
      <p>Track your course completion, scores, and achievements.</p>

      {/* Course Progress Section */}
      <div className="progress-section">
        {progress.map((item, index) => (
          <div key={index} className="course-card">
            <h3>{item.course}</h3>
            <p>Completion: {item.completion}%</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${item.completion}%` }}
              ></div>
            </div>
            <p>Score: {item.score}/100</p>
          </div>
        ))}
      </div>

      {/* Leaderboard */}
      <div className="leaderboard">
        <h2>🏆 Leaderboard</h2>
        <ul>
          {leaderboard.map((user, index) => (
            <li key={index}>
              {index + 1}. {user.name} - {user.score} pts
            </li>
          ))}
        </ul>
      </div>

      {/* Goals */}
      <div className="goals">
        <h2>🎯 Your Goals</h2>
        <ul>
          {goals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProgressPage;  // Ensure the export is default
