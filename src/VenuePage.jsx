import React, { useState } from 'react';
import './venuePage.css';

const VenuePage = () => {
  const [view, setView] = useState('main');

  const renderContent = () => {
    switch (view) {
      case 'menu':
        return (
          <div className="venue-card menu-card">
            <h2 className="venue-subtitle">The Wedding Feast</h2>
            
            <div className="menu-section">
              <h3>Sweets & Desserts</h3>
              <ul>
                <li>Poornam Boorellu</li>
                <li>Cova Jamoon</li>
                <li>Badam Shawarma</li>
                <li>Irvin Kunafa</li>
                <li>Chocolate Panipoori</li>
                <li>Vanilla & Butterscotch Ice Cream</li>
              </ul>
            </div>

            <div className="menu-section">
              <h3>Starters</h3>
              <ul>
                <li>Andhra Mirchi Bajji</li>
              </ul>
            </div>

            <div className="menu-section">
              <h3>Main Course</h3>
              <ul>
                <li>Pulihora</li>
                <li>White Rice</li>
                <li>Mango Dall / Palak Dall</li>
                <li>Vankaya Kothimeera Karam with Cashews</li>
                <li>Kandha Bachali Pulusu with Chitti Vadiyalu</li>
                <li>Bendi Cashew Fry</li>
              </ul>
            </div>
            
            <div className="menu-section">
              <h3>Biryani Darbar</h3>
              <ul>
                <li>Gongoora Dum Pulov</li>
                <li>Dun Aloo</li>
                <li>Pansakaya (Jackfruit) Biryani</li>
                <li>Veg Dum Biryani</li>
              </ul>
            </div>

            <div className="menu-section">
              <h3>Breads & Curries (Sabzi-Di-Bandi)</h3>
              <ul>
                <li>Pulkha (Live Station)</li>
                <li>Palak Poori</li>
                <li>Paneer Butter Masala</li>
                <li>Amritsari Chole Masala</li>
              </ul>
            </div>

            <div className="menu-section">
              <h3>Pickles, Powders & Raita</h3>
              <ul>
                <li>Gongoora Pickle</li>
                <li>Tomato Menthikaya</li>
                <li>Beerakaya Chutney</li>
                <li>Kandhi Podi</li>
                <li>Onion, Keera & Boondhi Raita</li>
              </ul>
            </div>

            <button className="venue-button back-button" onClick={() => setView('main')}>← Back to Venue Details</button>
          </div>
        );
      case 'location':
        return (
          <div className="venue-card location-card">
            <h2 className="venue-subtitle">Find Your Way</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!m12!1m3!1d3806.376915233118!2d78.57099231536696!3d17.44211240537443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f7f4d555555%3A0x6f5e3e2c3b49a5b6!2sSai%20Gardens!5e0!3m2!1sen!2sin!4v1677329735441!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sai Gardens Location"
              ></iframe>
            </div>
             <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Sai+Gardens+Mallapur+Hyderabad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="venue-button directions-link"
            >
              Get Directions on Google Maps
            </a>
            <button className="venue-button back-button" onClick={() => setView('main')}>← Back to Venue Details</button>
          </div>
        );
      default: // 'main' view
        return (
          <div className="venue-card">
            <h1 className="venue-title">Wedding Venue</h1>
            <p className="venue-description">
              The wedding ceremony will be held at Sai Gardens, Mallapur, Hyderabad. We have arranged all necessary amenities for you.
            </p>
            <div className="venue-options">
              <button className="venue-button" onClick={() => setView('menu')}>
                Food Menu
              </button>
              <button className="venue-button" onClick={() => setView('location')}>
                GPS Location
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="venue-page">
      {renderContent()}
    </div>
  );
};

export default VenuePage;

