import React from "react";
import { Transition } from "react-transition-group";

const transitionType = {
  left: {
    defaultStyle: {
      transform: "translateX(100vw)",
    },
    transitionStyles: {
      entering: { transform: "translateX(0)" },
      entered: { transform: "translateX(0)" },
      exiting: { transform: "translateX(100vw)" },
      exited: { transform: "translateX(100vw)" },
    },
  },
  right: {
    defaultStyle: {
      transform: "translateX(-100vw)",
    },
    transitionStyles: {
      entering: { transform: "translateX(0)" },
      entered: { transform: "translateX(0)" },
      exiting: { transform: "translateX(-100vw)" },
      exited: { transform: "translateX(-100vw)" },
    },
  },
  top: {
    defaultStyle: {
      transform: "translateY(-100vh)",
    },
    transitionStyles: {
      entering: { transform: "translateY(0)" },
      entered: { transform: "translateY(0)" },
      exiting: { transform: "translateY(-100vh)" },
      exited: { transform: "translateY(-100vh)" },
    },
  },
  bottom: {
    defaultStyle: {
      transform: "translateY(100vh)",
    },
    transitionStyles: {
      entering: { transform: "translateY(0)" },
      entered: { transform: "translateY(0)" },
      exiting: { transform: "translateY(100vh)" },
      exited: { transform: "translateY(100vh)" },
    },
  },
  topLeft: {
    defaultStyle: {
      transform: "translate(100vw, -100vh)",
    },
    transitionStyles: {
      entering: { transform: "translate(0,0) " },
      entered: { transform: "translate(0,0)" },
      exiting: { transform: "translate(100vw, -100vh)" },
      exited: { transform: "translate(100vw, -100vh)" },
    },
  },
};

function SlideIn({ in: inProp, children, duration, enterFrom }) {
  let { defaultStyle, transitionStyles } = transitionType[enterFrom];

  return (
    <Transition in={inProp} timeout={duration}>
      {(state) =>
        React.cloneElement(children, {
          style: {
            transition: `transform ${duration}ms`,
            ...defaultStyle,
            ...transitionStyles[state],
            ...children.style,
          },
        })
      }
    </Transition>
  );
}

export default SlideIn;
