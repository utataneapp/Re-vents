import { SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Dropdown, Image, Menu } from "semantic-ui-react";
import { signOutUser } from "../../app/api/re-dux/authSlice";
import { RootState } from "../../app/api/re-dux/store";

export default function SignedInMenu() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser } = useSelector((state: RootState) => state.auth);
  return (
    <Menu.Item position="right">
      <Image
        avatar
        spaced="right"
        src={currentUser?.photoUrl || "/assets/user.png"}
      />
      <Dropdown pointing="top left" text={currentUser?.email}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={NavLink}
            to="/createEvent"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item
            onClick={() => {
              dispatch(signOutUser());
              history.push("/");
            }}
            text="Sign Out"
            icon="power"
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
