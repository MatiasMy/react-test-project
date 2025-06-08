import React, { use, useEffect } from 'react';
import './App.css';
import Calculator from './components/calculator';
import MemoryGame from './components/memogygame';

function App() {
  useEffect(() => {
    fetch("http://localhost:8081/users")
      .then(response => response.json())
      .then(data => {
        console.log("Users:", data);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  }, []);
  return (
    <>
      <header>React Test Projects</header>
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
