import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import PageRouter from "./routes";

export default function App() {
  return (
      <Router>
      <PageRouter />
     </Router>
  );
}