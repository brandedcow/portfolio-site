import React, { useState } from "react";
import { Container } from "semantic-ui-react";

import SlideIn from "./SlideIn";

import "./SlideInContainer.css";

function SlideInContainer({ children, className, timeout = 500, style }) {
  const [inProp, setInProp] = useState(false);

  // delay until transition happens
  setTimeout(() => setInProp(true), 200);

  return (
    <SlideIn in={inProp} duration={timeout} enterFrom="left">
      <Container className={className} style={{ flex: 1 }}>
        {children}
      </Container>
    </SlideIn>
  );
}

export default SlideInContainer;
