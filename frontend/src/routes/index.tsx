import { Routes, Route } from 'react-router-dom';
import LoginPage from "../containers/LoginPage";
import SignUpPage from "../containers/SignUpPage";
import Dashboard from "../containers/Dashboard";
import ProtectedRoute from "./protected-route";
import * as React from "react";

const PageRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="/" element={
                <ProtectedRoute isAuthenticated={true}>
                    <Dashboard/>
                </ProtectedRoute>
            } />


        </Routes>
    );
};

export default PageRoutes;