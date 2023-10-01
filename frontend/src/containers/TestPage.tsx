import React from 'react';
import { useState } from 'react';

import TestComponent from '../components/TestComponent';

import fitness from '../assets/fitness-app.svg';

import '../App.css';

const TestPage: React.FC = () => {
    const [count, setCount] = useState(0);

return (
    <>
      <div>
        <a href="https://upload.wikimedia.org/wikipedia/commons/d/dd/Children%27s_outdoor_gymnasium_circa_19th_Century.jpg" target="_blank">
          <img src={fitness} className="logo" alt="fitness logo" />
        </a>
      </div>
      <TestComponent />
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

export default TestPage;