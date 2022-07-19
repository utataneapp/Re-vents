import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

export default function NavBar() {
  const history = useHistory();
  const [authentificated, setAuthentificated] = useState(false);

  const handleSignOut = () => {
    setAuthentificated(false);
    history.push("/");
  };

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
            <Button
              as={NavLink}
              to={"/createEvent"}
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
        )}
        {authentificated ? (
          <SignedInMenu signOut={handleSignOut} />
        ) : (
          <SignedOutMenu setAuthentificated={setAuthentificated} />
        )}
      </Container>
    </Menu>
  );
}
