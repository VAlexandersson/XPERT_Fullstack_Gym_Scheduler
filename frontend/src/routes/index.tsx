import { Routes, Route } from 'react-router-dom';
import LoginPage from "../containers/LoginPage";
import * as React from "react";

const PageRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/login" element={<LoginPage/>} />
        </Routes>
    );
};

export default PageRoutes;