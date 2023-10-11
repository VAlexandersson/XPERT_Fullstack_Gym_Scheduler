import { Routes, Route } from 'react-router-dom';
import LoginPage from "../containers/LoginPage";
import SignUpPage from "../containers/SignUpPage";
import Dashboard from "../containers/Dashboard";

import * as React from "react";

const PageRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignUpPage/>} />
        </Routes>
    );
};

export default PageRoutes;