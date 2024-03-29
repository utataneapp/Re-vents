import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { Menu, Container, Button, MenuItem } from "semantic-ui-react";
import { RootState } from "../../app/api/re-dux/store";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

export default function NavBar() {
  const { authentificated } = useSelector((state: RootState) => state.auth);

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} exact to="/events" content="Events" />
        <Menu.Item as={NavLink} exact to="/sandbox" content="Sandbox" />
        {authentificated && (
          <Menu.Item as={NavLink} exact to="/createEvent">
            <Button positive inverted content="Create Event" />
          </Menu.Item>
        )}
        {authentificated ? <SignedInMenu /> : <SignedOutMenu />}
      </Container>
    </Menu>
  );
}
