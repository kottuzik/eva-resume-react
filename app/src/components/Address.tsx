import React from 'react';
import type { ResumeData } from '../ResumeContext';
import locationIcon from '../images/icons-location-white.png';

export const Address: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div className="address">
      <img src={locationIcon} alt="location icon" className="location-icon" />
      <p className="address-text">{data.address}</p>
    </div>
  );
};