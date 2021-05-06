import { Container } from "semantic-ui-react";

function ExpandableContainer({ children, className, height }) {
  return (
    <Container
      className={className}
      style={{
        minHeight: height,
        height,
        transition: "height 1s, min-height 500ms",
      }}
    >
      {children}
    </Container>
  );
}

export default ExpandableContainer;
