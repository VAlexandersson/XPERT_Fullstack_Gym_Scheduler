import React from 'react';
import { useEffect, useState } from 'react';
import fitness from '../assets/fitness-app.svg';

import '../App.css';

const FAQPage: React.FC = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');
    useEffect(() => {
        fetch('http://localhost:4001/api/test')
            .then(response => response.text())
            .then(data => setMessage(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

return (
    <>
      <div>
        <a href="https://upload.wikimedia.org/wikipedia/commons/d/dd/Children%27s_outdoor_gymnasium_circa_19th_Century.jpg" target="_blank">
          <img src={fitness} className="logo" alt="fitness logo" />
        </a>
      </div>
      <h1>{message}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the logo </p>
    </>
  )
};

export default FAQPage;