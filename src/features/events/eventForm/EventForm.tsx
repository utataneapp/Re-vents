import React from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";

type Props = {
  setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function EventForm({ setFormOpen }: Props) {
  return (
    <Segment clearing>
      <Header content="Create new event"></Header>
      <Form>
        <Form.Field>
          <input type="text" placeholder="Event title" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Category" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Description" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="City" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Venue" />
        </Form.Field>
        <Form.Field>
          <input type="date" placeholder="Date" />
        </Form.Field>
        <Button
          type="submit"
          floated="right"
          positive
          content="submit"
        ></Button>
        <Button
          onClick={() => setFormOpen(false)}
          type="submit"
          floated="right"
          content="cancel"
        ></Button>
      </Form>
    </Segment>
  );
}
