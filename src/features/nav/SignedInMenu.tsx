import React, { SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import { Button, Dropdown, Image, Menu } from "semantic-ui-react";

type Props = {
  signOut: () => void;
};

export default function SignedInMenu({ signOut }: Props) {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/assets/user.png" />
      <Dropdown pointing="top left" text="Bob">
        <Dropdown.Menu>
          <Dropdown.Item
            as={NavLink}
            to="/createEvent"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
