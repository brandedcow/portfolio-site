import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import Carousel from "./Carousel";

import "./ProjectList.css";

export default class ProjectList extends Component {
  render() {
    const { data, style } = this.props;

    return (
      <div className="projectList" style={{ ...style }}>
        <Carousel>
          {data.map(({ name, description, url, background, theme }) => (
            <ProjectCard
              key={name}
              name={name}
              description={description}
              url={url}
              background={background}
              theme={theme}
            />
          ))}
        </Carousel>
      </div>
    );
  }
}
