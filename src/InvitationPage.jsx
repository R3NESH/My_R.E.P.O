import React from 'react';
import SplitText from './SplitText';
import './InvitationPage.css';

const InvitationPage = ({ setPage }) => {
  return (
    <div className="invitation-container">
      <div className="invitation-content">
        {/* The text is now passed as a child, which the component expects */}
        <SplitText
          tag="h1"
          className="invitation-text"
          delay={80}
          duration={0.8}
          ease="power4.out"
          from={{ opacity: 0, y: 80, scale: 0.8 }}
          to={{ opacity: 1, y: 0, scale: 1 }}
        >
          You're Cordially Invited to Megh & Anjan's Wedding !
        </SplitText>
        
        <div className="venue-options">
          <button className="venue-button" onClick={() => setPage('home')}>About</button>
          <button className="venue-button" onClick={() => setPage('venue')}>Venue</button>
        </div>
      </div>
    </div>
  );
};

export default InvitationPage;

