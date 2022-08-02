import { SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { Button, Menu } from "semantic-ui-react";
import { openModal } from "../../app/api/re-dux/modalSlice";

export default function SignedOutMenu() {
  const dispatch = useDispatch();
  return (
    <Menu.Item position="right">
      <Button
        onClick={() =>
          dispatch(openModal({ modalTypes: "LoginForm", modalProps: {} }))
        }
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
