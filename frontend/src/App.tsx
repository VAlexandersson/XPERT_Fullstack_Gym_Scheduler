import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PageRouter from "./routes";
import NavigationBar from "./containers/navigationBar"

export default function App() {
  return (
    <Router>
      <PageRouter />
    </Router>
  );
}