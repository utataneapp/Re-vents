import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

type Props = { setFormOpen: React.Dispatch<React.SetStateAction<boolean>> };

export default function NavBar({ setFormOpen }: Props) {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>

        <Menu.Item>
          <Button
            onClick={() => setFormOpen(true)}
            positive
            inverted
            content="Create Event"
          />
        </Menu.Item>
        <Menu.Item name="Events" />
        <Menu.Item position="right">
          <Button basic inverted content="login"></Button>
          <Button
            basic
            inverted
            content="Register"
            style={{ marginLeft: "0.5em" }}
          ></Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
}
