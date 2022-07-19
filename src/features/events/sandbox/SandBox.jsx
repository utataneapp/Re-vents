import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { increment } from "../../../app/api/re-dux/events/slice";

export default function Sandbox() {
  const { events } = useSelector((state) => state.events);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Testing 123</h1>
      <Button
        color="teal"
        onClick={() => console.log(events)}
        content="increment"
      />
    </>
  );
}
