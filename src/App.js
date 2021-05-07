import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import DesktopLayout from "./layouts/DesktopLayout";
import MobileLayout from "./layouts/MobileLayout";

import routesData from "./constants/routesData";
import socialsData from "./constants/socialsData";

import "./App.css";

function App() {
  const isDesktopOrTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isMobileSize = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 767px)",
  });

  const props = {
    routes: routesData,
    socials: socialsData,
  };

  return (
    <Router>
      <div className="appContainer">
        {isDesktopOrTabletDevice && (
          <>
            {isMobileSize ? (
              <MobileLayout {...props} />
            ) : (
              <DesktopLayout {...props} />
            )}
          </>
        )}
        {isMobileDevice && <MobileLayout {...props} />}
      </div>
    </Router>
  );
}

export default App;
