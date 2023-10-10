import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import PageRouter from "./routes";
import ProTip from "./components/ProTip";
import LoginPage from "./containers/LoginPage";

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

        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Material UI Vite.js example in TypeScript
                </Typography>
            <ProTip />
        <Copyright />
      </Box>
    </Container>
      <PageRouter />
     </Router>
  );
}