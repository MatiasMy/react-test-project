import React, { use, useEffect, useState } from 'react';
import './App.css';
import Calculator from './components/calculator';
import MemoryGame from './components/memogygame';
import Login from './components/login';
import Register from './components/register';

function App() {
  const [users, setUsers] = useState([]);
  const [showProjects, setShowProjects] = useState(false);
  const [showLoginProcess, setShowLoginProcess] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8081/login')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  const loginHandler = ({ name, password }: { name: string; password: string }) => {
    const matchingUser = users.find((user: { id: number, name: string, password: string }) =>
      user.name === name && user.password === password
    );

    if (matchingUser) {
      setShowProjects(true);
    } else {
      window.alert('Invalid login credentials');
    }
  }

  return (
    <>
      <header>React Test Projects</header>
      {!showProjects && showLoginProcess && <div>
        <Login loginHandler={loginHandler} />
        <button className='logres-but' onClick={() => setShowLoginProcess(!showLoginProcess)}>
          {showLoginProcess ? 'Switch to Register' : 'Switch to Login'}
        </button>
        <hr />
      </div>}
      {!showProjects && !showLoginProcess && <div>
        <Register />
        <button className='logres-but' onClick={() => setShowLoginProcess(!showLoginProcess)}>
          {showLoginProcess ? 'Switch to Register' : 'Switch to Login'}
        </button>
        <hr />
      </div>
      }
      {showProjects && <div>
        <div>
          <Calculator />
        </div>
        <div>
          <MemoryGame />
        </div>
      </div>}
      <footer><small>React Test Projects - Matias Myllymäki</small>{showProjects && <button id="logout" onClick={() => setShowProjects(false)}>Logout</button>}</footer>
    </>
  );
}

export default App;
