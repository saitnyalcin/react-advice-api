import React, { useEffect, useState } from 'react';
import './App.css';
import logo from '../src/images/advice.png';

function App() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const result = await fetch('https://api.adviceslip.com/advice');

    result.json().then(result => setData(result));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {Object.keys(data).map(() => (
          <div key={data.slip.id}>{data.slip.advice}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
