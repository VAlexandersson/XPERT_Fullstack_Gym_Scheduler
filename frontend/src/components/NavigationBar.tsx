import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar: React.FC = () => {
    const  style = {
        nav: {
            backgroundColor: '#282c34',
            padding: 'irem',
        },
        ul: {
            display: 'flex',
            listStyleType: 'none',
            margin: 10,
            padding: 10,
            justifyContent: 'space-around',
            
        },
        link: {
            color: 'white',
            textDecoration: 'nane',
            margin: 10,
        },
    };

  return (
    <nav style={style.nav}>
      <ul style={style.ul}>
        <li><Link to="/" style={style.link}>Home</Link></li>
        <li><Link to="/test" style={style.link}>Test</Link></li>
        <li><Link to="/faq" style={style.link}>FAQ</Link></li>
        <li><Link to="/catalog" style={style.link}>Catalog</Link></li>
        <li><Link to="/login" style={style.link}>Login</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;