import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import Button from "@mui/material/Button";
import CssBaseline from '@mui/material/CssBaseline';

import Link from "../../components/Link";

import useAuth from '../../hooks/useAuth';
const Dashboard = () => {
    const { logout } = useAuth();  
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

  return (
    <div>

      <Button  onClick={handleLogout}>Logout</Button>

      <Link href="/" variant="body2"> {"Dashboard"} </Link>
      <Link href="/faq" variant="body2"> {"FAQ"} </Link>
      <Link href="/other" variant="body2"> {"OTHER"} </Link>
      <Link href="/admin" variant="body2"> {"ADMIN"} </Link>

    </div>
  );
};

export default Dashboard;
