import React, { useState } from "react";

function ProfilePage() {
  const [user, setUser] = useState({
    name: "Bhavana",
    email: "bhavana@example.com",
    bio: "Passionate about learning and exploring new technologies!",
    profilePic: "https://via.placeholder.com/100",
    password: "********",
    is2FAEnabled: false,
    otp: "",
    enteredOtp: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);

  // Function to generate a random 6-digit OTP
  const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

  // Enable or disable 2FA
  const toggle2FA = () => {
    if (user.is2FAEnabled) {
      setUser({ ...user, is2FAEnabled: false, otp: "" });
      alert("2FA Disabled!");
    } else {
      const otp = generateOTP();
      setUser({ ...user, is2FAEnabled: true, otp });
      setIsOtpSent(true);
      alert(`2FA Enabled! Your OTP: ${otp} (This would be sent via email in a real app)`);
    }
  };

  // Verify OTP
  const verifyOtp = () => {
    if (user.enteredOtp === user.otp) {
      alert("✅ OTP Verified Successfully!");
      setIsOtpSent(false);
    } else {
      alert("❌ Incorrect OTP! Please try again.");
    }
  };

  return (
    <div className="profile-container">
      <h1>👤 Your Profile</h1>
      <img src={user.profilePic} alt="Profile" className="profile-pic" />
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>

      {/* Password Section */}
      <div className="password-section">
        <p>Password: {showPassword ? user.password : "********"}</p>
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "🙈 Hide" : "👀 Show"}
        </button>
      </div>

      {/* 2FA Section */}
      <div className="two-factor-auth">
        <h3>🔒 Two-Factor Authentication (2FA)</h3>
        <p>{user.is2FAEnabled ? "✅ Enabled" : "❌ Disabled"}</p>
        <button onClick={toggle2FA}>
          {user.is2FAEnabled ? "Disable 2FA" : "Enable 2FA"}
        </button>

        {isOtpSent && (
          <div className="otp-verification">
            <input
              type="text"
              placeholder="Enter OTP"
              value={user.enteredOtp}
              onChange={(e) => setUser({ ...user, enteredOtp: e.target.value })}
            />
            <button onClick={verifyOtp}>Verify OTP</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
