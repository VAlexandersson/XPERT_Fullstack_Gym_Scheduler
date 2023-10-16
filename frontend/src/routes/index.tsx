import { Routes, Route } from 'react-router-dom';
import LoginPage from "../containers/LoginPage";
import SignUpPage from "../containers/SignUpPage";
import NavigationBar from "../containers/navigationBar";
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
            <Route path="/loggedin/profile" element={<NavigationBar/>} />
        </Routes>
    );
};

export default PageRoutes;