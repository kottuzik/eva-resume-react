import React from 'react';
import './styles/style.css';
import { MyName } from './components/MyName';
import { useResume } from './ResumeContext';
import { Address } from './components/Address';

function App() {
  const { data, error } = useResume();

  if (error) return <p>Error: {error}</p>;
  if (!data) return <div className='loader'></div>;

  return (
    <div className="App">
      <main className="main">
        <MyName data={data} />
        <Address data={data} />
      </main>
    </div>
  );
}

export default App;