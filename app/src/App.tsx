import React from 'react';
import './styles/style.css';
import { MyName } from './components/MyName';
import { ResumeProvider } from './ResumeContext';

function App() {
  return (
    <div className="App">
      <main className="main">
        <MyName />
      </main>
    </div>
  );
}

export default App;