import React, { Component } from "react";

import BackgroundContainer from "./BackgroundContainer";
import "./ProjectCard.css";

export default class ProjectCard extends Component {
  render() {
    const { name, description, url, background, theme, style } = this.props;

    const textColorStyle = {
      color: theme === "dark" ? "white" : "black",
    };

    return (
      <BackgroundContainer
        containerStyle={{
          height: "100%",
          ...style,
        }}
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "2rem",
        }}
        background={background}
      >
        <h1 className="cardHeader" style={textColorStyle}>
          {name}
        </h1>
        <div className="cardDescription" style={textColorStyle}>
          {description}
        </div>

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: "1.5rem" }}
        >
          Visit Site &#62;
        </a>
      </BackgroundContainer>
    );
  }
}
