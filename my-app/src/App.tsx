import { useState } from 'react'
import './App.css'
import Calculator from './components/calculator';
import MemoryGame from './components/memogygame';

function App() {

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
  )
}

export default App
