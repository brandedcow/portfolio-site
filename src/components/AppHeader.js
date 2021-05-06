import { Link } from "react-router-dom";
import { Container, Header, Menu } from "semantic-ui-react";
import "./AppHeader.css";

function AppHeader({ routes }) {
  return (
    <Container>
      <Header size="huge">
        <div>
          <Header.Content>
            <Link to="/">Chris Kang</Link>
          </Header.Content>
          <Header.Subheader>Web Developer</Header.Subheader>
        </div>

        <Menu>
          {routes
            .filter((route) => route.path !== "/")
            .map(({ name, path }) => (
              <Menu.Item key={name}>
                <Link to={path}>{name}</Link>
              </Menu.Item>
            ))}
        </Menu>
      </Header>
    </Container>
  );
}

export default AppHeader;
