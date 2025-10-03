import React, { useState, useEffect } from 'react';
import HomePage from './HomePage';
import VenuePage from './VenuePage';
import InvitationPage from './InvitationPage';
import FallingLeaves from './FallingLeaves'; // Corrected component name
import ToranamHeader from './ToranamHeader';

function App() {
  // Set the initial page to 'invitation' to make it the landing page
  const [page, setPage] = useState('invitation');

  useEffect(() => {
    // Set a white background to match the new theme
    document.body.style.backgroundColor = '#fff';
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'home': // This is now the "About" page
        return <HomePage setPage={setPage} />;
      case 'venue':
        return <VenuePage />;
      default: // 'invitation' is the default landing page
        return <InvitationPage setPage={setPage} />;
    }
  };

  return (
    <div className="App" style={{ position: 'relative', width: '100vw', minHeight: '100vh', overflow: 'hidden' }}>
      
      {/* Global background effects for all pages */}
      <FallingLeaves />
      <ToranamHeader />

      {/* Foreground content with padding to avoid the header */}
      <div style={{ position: 'relative', zIndex: 1, paddingTop: '20vh' }}>
        {/* Show a "Back" button if we are not on the main invitation page */}
        {page !== 'invitation' && (
          <button className="back-button" onClick={() => setPage('invitation')}>
            ← Back to Invitation
          </button>
        )}
        {renderPage()}
      </div>
    </div>
  );
}

export default App;

