import React, { ReactNode } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children?: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  if (!isAuthenticated) {
    // Remember the location the user wanted to access, and redirect after login
    navigate('/login', { state: { from: location } });
    return null;
  }

  return children || <Outlet />;
};

export default ProtectedRoute;
