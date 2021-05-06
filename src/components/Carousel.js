import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import "./Carousel.css";

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      nextTab: null,
      totalTabs: props.children.length,
      isShiftingLeft: false,
      isShiftingRight: false,
    };
  }

  getPrevTab = () => {
    const { activeTab, totalTabs } = this.state;
    let prevTab = activeTab - 1;
    return prevTab < 0 ? totalTabs - 1 : prevTab;
  };

  getNextTab = () => {
    const { activeTab, totalTabs } = this.state;
    let nextTab = activeTab + 1;
    return nextTab > totalTabs - 1 ? 0 : nextTab;
  };

  handleLeftClick = () => {
    this.setState({ nextTab: this.getNextTab(), isShiftingLeft: true });
  };

  handleRightClick = () => {
    this.setState({ nextTab: this.getPrevTab(), isShiftingRight: true });
  };

  handleDotClick = (newTabIdx) => {
    const { activeTab } = this.state;
    this.setState({
      nextTab: newTabIdx,
      isShiftingLeft: newTabIdx > activeTab,
      isShiftingRight: newTabIdx < activeTab,
    });
  };

  resetAnimation = () => {
    this.setState((state) => ({
      isShiftingLeft: false,
      isShiftingRight: false,
      activeTab: state.nextTab,
      nextTab: null,
    }));
  };

  render() {
    const { children } = this.props;
    const {
      activeTab,
      nextTab,
      isShiftingLeft,
      isShiftingRight,
      totalTabs,
    } = this.state;

    const isAnimating = isShiftingLeft || isShiftingRight;
    const animationClass =
      isAnimating && isShiftingLeft ? "shiftLeft" : "shiftRight";

    const nextTabStyle = {
      left: isAnimating && isShiftingLeft ? "100%" : "-100%",
    };

    const childTheme = children[activeTab].props.theme;
    const carouselArrowColorStyle = {
      color: childTheme === "dark" ? "white" : "black",
    };

    return (
      <div className="carousel">
        <div className="carouselOverlay">
          <button
            className="leftArrow carouselButton"
            onClick={this.handleLeftClick}
            style={carouselArrowColorStyle}
          >
            &#8918;
          </button>
          <div className="dotsContainer">
            {Array(totalTabs)
              .fill(null)
              .map((_, idx) => (
                <div
                  index={idx}
                  key={`carousel-dot-${idx}`}
                  className="dot"
                  style={{
                    background: idx === activeTab ? "#333" : "none",
                  }}
                  onClick={() => this.handleDotClick(idx)}
                ></div>
              ))}
          </div>
          <button
            className="rightArrow carouselButton"
            onClick={this.handleRightClick}
            style={carouselArrowColorStyle}
          >
            &#8919;
          </button>
        </div>
        <div className="carouselContentContainer">
          <CSSTransition
            in={isAnimating}
            timeout={1000}
            classNames={animationClass}
            onEntered={this.resetAnimation}
          >
            <div className="carouselContent">
              <div className="carouselMainTab">{children[activeTab]}</div>

              <div className="carouselNextTab" style={nextTabStyle}>
                {children[nextTab]}
              </div>
            </div>
          </CSSTransition>
        </div>
      </div>
    );
  }
}
