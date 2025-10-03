import React, { useState, useEffect } from 'react';

// Styles have been moved to a separate CSS file for better organization.
import './HomePage.css';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({});
  useEffect(() => {
    const calculateTimeLeft = () => {
      // Your wedding date: October 12, 2025
      const weddingDate = new Date("2025-10-12T10:57:00").getTime();
      const now = new Date().getTime();
      const difference = weddingDate - now;
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return {};
    };
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);
  
  const timeComponents = Object.keys(timeLeft);
  if (!timeComponents.length) return <h2 className="married-text">They're Married!</h2>;

  return (
    <div id="timer">
      <div className="time-box"><span>{timeLeft.days || '0'}</span><small>Days</small></div>
      <div className="time-box"><span>{timeLeft.hours || '0'}</span><small>Hours</small></div>
      <div className="time-box"><span>{timeLeft.minutes || '0'}</span><small>Minutes</small></div>
      <div className="time-box"><span>{timeLeft.seconds || '0'}</span><small>Seconds</small></div>
    </div>
  );
};

const HomePage = ({ setPage }) => (
  <header className="hero">
    <div className="hero-content">
      <div className="top-timer-section">
        {/* New text added above the countdown */}
        <h3 className="muhartam-info">Muhartam on October 12th at 10:57 AM</h3>
        <h4 className="countdown-label">Countdown to Muhartam</h4>
        <CountdownTimer />
      </div>
      <div className="about-section">
        <h2 className="about-title">About</h2>
        <p>
          Welcome to Meghana & Anjan's wedding website! Here you can find information about the venue.
        </p>
      </div>
      {/* The nav-buttons div now contains the styled back button */}
      <div className="nav-buttons">
        <button className="venue-button back-button" onClick={() => setPage('invitation')}>
          ← Back to Invitation
        </button>
      </div>
    </div>
  </header>
);

export default HomePage;

