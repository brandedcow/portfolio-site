import { Container, Button, Icon } from "semantic-ui-react";

function AppFooter({ socials }) {
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Container>
      {socials.map(({ name, url }) => (
        <Button
          key={name}
          icon
          floated="right"
          onClick={() => handleLinkClick(url)}
        >
          <Icon name={name} />
        </Button>
      ))}
    </Container>
  );
}

export default AppFooter;
