import React from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

function AppHeader({ routes, mobile, socials }) {
  const props = { routes, socials };
  return React.createElement(mobile ? MobileHeader : DesktopHeader, props);
}

export default AppHeader;
