import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import LoginComponent from './components/LoginComponent';
import NavigationBar from './components/NavigationBar';


import HomePage from './containers/HomePage';
import TestPage from './containers/TestPage';
import FAQPage from './containers/FAQPage';


import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" Component ={HomePage}/>
          <Route path="/login" Component ={LoginComponent}/>
          <Route path="/test" Component ={TestPage}/>
          <Route path="/faq" Component={FAQPage}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App
