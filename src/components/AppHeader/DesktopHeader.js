import { Link } from "react-router-dom";
import { Container, Header, Menu } from "semantic-ui-react";
import "./AppHeader.css";

function AppHeader({ routes, mobile = false }) {
  const headerStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContet: "space-between",
  };

  return (
    <Container>
      <Header size="huge" style={headerStyles}>
        <div>
          <Header.Content>
            <Link to="/">Chris Kang</Link>
          </Header.Content>
          <Header.Subheader>Web Developer</Header.Subheader>
        </div>

        <Menu compact>
          {routes
            .filter((route) => route.path !== "/")
            .map(({ name, path }) => (
              <Menu.Item width={2} key={name}>
                <Link to={path}>{name}</Link>
              </Menu.Item>
            ))}
        </Menu>
      </Header>
    </Container>
  );
}

export default AppHeader;
