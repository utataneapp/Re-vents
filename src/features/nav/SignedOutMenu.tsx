import React, { SetStateAction } from "react";
import { Button, Menu } from "semantic-ui-react";

type Props = {
  setAuthentificated: React.Dispatch<SetStateAction<boolean>>;
};

export default function SignedOutMenu({ setAuthentificated }: Props) {
  return (
    <Menu.Item position="right">
      <Button
        onClick={() => setAuthentificated(true)}
        basic
        inverted
        content="LogIn"
      />
      <Button
        basic
        inverted
        content="Register"
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
}
