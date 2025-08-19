import React from 'react';
import type { ResumeData } from '../ResumeContext';

export const MyName: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <header className="header">
      <h2 className="name-text">{data.name}</h2>
      <p className="title-text">{data.title}</p>
    </header>
  );
};
