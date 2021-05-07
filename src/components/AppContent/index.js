import React from "react";
import DesktopContent from "./DesktopContent";
import MobileContent from "./MobileContent";

function AppContent({ routes, className, mobile }) {
  const props = { routes, className };
  return React.createElement(mobile ? MobileContent : DesktopContent, props);
}

export default AppContent;
