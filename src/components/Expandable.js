import React from "react";

function Expandable({ children, className, height }) {
  const props = {
    className,
    style: {
      height,
      minHeight: height,
      transition: "height 500ms, min-height 500ms",
      ...children.style,
    },
  };

  return React.cloneElement(children, props);
}

export default Expandable;
