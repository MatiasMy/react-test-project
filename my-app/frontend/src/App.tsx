import React, { use, useEffect } from 'react';
import './App.css';
import Calculator from './components/calculator';
import MemoryGame from './components/memogygame';
import Login from './components/login';

function App() {
  return (
    <>
      <header>React Test Projects</header>
      <div>
        <Login />
      </div>
      <div>
        <Calculator />
      </div>
      <div>
        <MemoryGame />
      </div>
      <footer><small>React Test Projects - Matias Myllymäki</small></footer>
    </>
  );
}

export default App;
