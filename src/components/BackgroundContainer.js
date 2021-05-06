import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import "./BackgroundContainer.css";

export default class BackgroundContainer extends Component {
  render() {
    const { background, children, containerStyle, style } = this.props;

    return (
      <Container style={{ position: "relative", ...containerStyle }}>
        <div
          className="background"
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
          }}
        ></div>
        <div className="containerContent" style={{ ...style }}>
          {children}
        </div>
      </Container>
    );
  }
}
