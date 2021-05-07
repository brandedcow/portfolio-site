import { Link } from "react-router-dom";
import { Button, Container, Header, Icon, Menu } from "semantic-ui-react";
import "./AppHeader.css";

function AppHeader({ routes, socials }) {
  const containerStyles = {
    width: "90%",
    margin: "auto",
  };

  const headerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const titleNavbarStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div style={containerStyles}>
      <Header size="large" style={headerStyles}>
        <div style={titleNavbarStyles}>
          <div>
            <Header.Content>
              <Link to="/">Chris Kang</Link>
            </Header.Content>
            <Header.Subheader>Web Developer</Header.Subheader>
          </div>

          <div>
            {socials.map(({ name, url }) => (
              <Button
                key={name}
                icon
                floated="right"
                onClick={() => window.open(url, "_blank")}
              >
                <Icon name={name} />
              </Button>
            ))}
          </div>
        </div>

        <Menu fluid widths={2}>
          {routes
            .filter((route) => route.path !== "/")
            .map(({ name, path }) => (
              <Menu.Item width={2} key={name}>
                <Link to={path}>{name}</Link>
              </Menu.Item>
            ))}
        </Menu>
      </Header>
    </div>
  );
}

export default AppHeader;
