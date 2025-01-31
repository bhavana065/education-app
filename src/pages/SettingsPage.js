import React, { useState } from 'react';

function SettingsPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState('light');

  const handlePasswordChange = () => {
    if (password === confirmPassword) {
      alert('Password updated successfully!');
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="settings-container">
      <h1>⚙️ Settings</h1>
      <p>Change password, notification settings, and more.</p>

      {/* Change Password Section */}
      <div className="settings-section">
        <h3>🔑 Change Password</h3>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="input-field"
        />
        <button onClick={handlePasswordChange} className="update-btn">
          Update Password
        </button>
      </div>

      {/* Notification Settings */}
      <div className="settings-section">
        <h3>🔔 Notification Settings</h3>
        <label className="switch">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
          <span className="slider round"></span>
        </label>
        <p>{notifications ? 'Notifications Enabled' : 'Notifications Disabled'}</p>
      </div>

      {/* Theme Settings */}
      <div className="settings-section">
        <h3>🎨 Theme Settings</h3>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="theme-btn">
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </div>
  );
}

export default SettingsPage;
