import React from 'react';
import { useResume } from '../ResumeContext';

export const AboutMe: React.FC = () => {
  const { data, error } = useResume();

  if (error) return <p>Error: {error}</p>;
  if (!data) return <div>Loading...</div>;

  return <div className="about-me">{data.summary}</div>;
};