import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import AppFooter from "./components/AppFooter";
import routesData from "./constants/routesData";
import socialsData from "./constants/socialsData";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="appContainer">
        <AppHeader routes={routesData} />

        <AppContent className="appContent" routes={routesData} />

        <AppFooter socials={socialsData} />
      </div>
    </Router>
  );
}

export default App;
