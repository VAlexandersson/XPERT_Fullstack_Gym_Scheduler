import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./components/ProTip";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" Component={LoginPage}></Route>
                <Route path="/sign-up" Component={SignUpPage}></Route>
            </Routes>
        </Router>
    );
}