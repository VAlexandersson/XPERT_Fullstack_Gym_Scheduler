import { Routes, Route } from 'react-router-dom';
import LoginPage from "../containers/LoginPage";
import SignUpPage from "../containers/SignUpPage";
import BrowsePage from "../containers/BrowsePage";
import TestPage from "../containers/test"
import * as React from "react";

const PageRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="/browse" element={<BrowsePage/>} />
            <Route path="/test" element={<TestPage/>} />
        </Routes>
    );
};

export default PageRoutes;