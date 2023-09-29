import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import LoginComponent from './components/LoginComponent';
import TestPage from './containers/TestPage';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" Component ={LoginComponent}/>
          <Route path="/test" Component ={TestPage}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App
