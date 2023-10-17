import { Routes, Route } from 'react-router-dom';
import LoginPage from "../containers/LoginPage";
import SignUpPage from "../containers/SignUpPage";
import NavigationBar from "../containers/navigationBar";
import BrowsePage from "../containers/BrowsePage";
import TestPage from "../containers/test"
import ProfilePage from "../containers/ProfilePage";
import Dashboard from "../containers/Dashboard";
import ProtectedRoute from "./protected-route";
import * as React from "react";

const PageRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="/" element={ <Dashboard/>} />


            <Route path="/browse" element={<BrowsePage/>} />

        </Routes>
    );
};

export default PageRoutes;