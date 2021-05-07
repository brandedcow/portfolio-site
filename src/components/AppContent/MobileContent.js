import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Expandable from "../Expandable";

import "./AppContent.css";

function AppContent({ className, routes }) {
  const [contentHeight, setContentHeight] = useState(0);

  const location = useLocation();

  const handleRenderRoute = (height, component, data) => {
    setContentHeight(height);

    return component == null
      ? null
      : React.createElement(component, {
          data,
          style: {
            position: "absolute",
            top: 0,
            left: 0,
          },
        });
  };

  return (
    <div className={className}>
      <Expandable className="appContentContainerMobile" height={contentHeight}>
        <div>
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Switch location={location}>
                {routes.map(({ path, component, mobileRouteHeight, data }) => (
                  <Route
                    exact
                    key={path}
                    path={path}
                    render={() =>
                      handleRenderRoute(mobileRouteHeight, component, data)
                    }
                  />
                ))}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </Expandable>
    </div>
  );
}

export default AppContent;
