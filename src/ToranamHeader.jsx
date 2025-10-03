import React from 'react';
import './ToranamHeader.css';

const ToranamHeader = () => {
  // Use a root-relative path to reference the image from the 'public' folder.
  return (
    <div className="toranam-container">
      <img src="/toranam.png" alt="Toranam decoration" />
    </div>
  );
};

export default ToranamHeader;

