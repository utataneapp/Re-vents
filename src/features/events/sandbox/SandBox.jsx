import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../../app/api/re-dux/modalSlice";

export default function Sandbox() {
  const { events } = useSelector((state) => state.events);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Testing 123</h1>
      <Button color="teal" content="increment" />
      <Button
        content={"Open Modal"}
        color={"teal"}
        onClick={() =>
          console.log(dispatch(openModal({ modalTypes: "TestModal" })))
        }
      ></Button>
      <Button
        content="Login"
        color="teal"
        onClick={() => dispatch(openModal({ modalTypes: "LoginForm" }))}
      ></Button>
    </>
  );
}
