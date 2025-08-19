import React, { useEffect, useState } from 'react';
import { useResume } from '../ResumeContext';

export const MyName: React.FC = () => {
  const { data, error } = useResume();

  if (error) return <p>Error: {error}</p>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="name-text">{data.name}</h2>
      <p>{data.title}</p>
    </div>
  );
};
