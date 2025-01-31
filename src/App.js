import React from "react";
import { Routes, Route } from "react-router-dom"; // Only import Routes and Route
import CoursePage from "./pages/CoursePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import AssignmentsPage from "./pages/AssignmentsPage";
import ProgressPage from "./pages/ProgressPage";
import AnnouncementsPage from "./pages/AnnouncementsPage";
import Navbar from "./components/Navbar";
import "./App.css"; // Ensure styles are imported

function App() {
  return (
    <>
      <Navbar />
      <main className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/assignments" element={<AssignmentsPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/announcements" element={<AnnouncementsPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
