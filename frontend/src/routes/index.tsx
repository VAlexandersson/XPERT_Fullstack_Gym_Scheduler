import { Routes, Route } from 'react-router-dom';
import LoginPage from "../containers/LoginPage";
import SignUpPage from "../containers/SignUpPage";
import ProfilePage from "../containers/ProfilePage";
import * as React from "react";

const PageRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/profile" element={<ProfilePage />} />
        </Routes>
    );
};

export default PageRoutes;