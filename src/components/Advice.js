import React, { useEffect, useState } from 'react';

const Advice = () => {
  // set the state of the data variable
  const [data, setData] = useState([]);

  // set the async function to retrieve the data from the api end point
  async function fetchData() {
    const result = await fetch('https://api.adviceslip.com/advice');
    result.json().then(result => setData(result));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">
          {Object.keys(data).map(() => (
            <div key={data.slip.id}>{data.slip.advice}</div>
          ))}
        </h1>
        <button className="button" onClick={() => fetchData()}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
};

export default Advice;
