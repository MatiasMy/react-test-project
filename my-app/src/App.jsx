import { useState } from 'react'
import './App.css'
import Calculator from './components/calculator';
import MemoryGame from './components/memogygame';

function App() {

  return (
    <>
      <div>
        <Calculator />
      </div>
      <div>
        <MemoryGame />
      </div>
    </>
  )
}

export default App
