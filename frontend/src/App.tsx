import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './containers/HomePage.tsx'
import LoginPage from "./containers/LoginPage.tsx";
import ExercisePage from "./containers/ExercisePage.tsx";
import AdminPage from "./containers/AdminPage.tsx";
import FAQPage from './containers/FAQPage';
import WorkoutPage from "./containers/WorkoutPage.tsx";


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" Component ={HomePage}/>
          <Route path="/login" Component={LoginPage}/>
          <Route path="/exercises" Component={ExercisePage}/>
          <Route path="/workout" Component={WorkoutPage}/>
          <Route path="/faq" Component={FAQPage}/>
          <Route path="/admin" Component={AdminPage}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App
