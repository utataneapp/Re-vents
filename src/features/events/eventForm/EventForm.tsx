import React, { useState } from "react";
import { Event } from "../../../type/type";
import {
  Button,
  Form,
  Header,
  HtmlInputrops,
  Segment,
} from "semantic-ui-react";
import cuid from "cuid";

type Props = {
  setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
  createEvent: (event: Event) => void;
  updateEvent: (updateEvent: Event) => void;
  selectedEvent: Event | null;
};

export default function EventForm({
  setFormOpen,
  setEvents,
  createEvent,
  updateEvent,
  selectedEvent,
}: Props) {
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleFormSubmit = () => {
    selectedEvent
      ? updateEvent({ ...selectedEvent, ...values })
      : createEvent({
          ...values,
          id: cuid(),
          hostedBy: "Bob",
          hostPhotoURL: "",
          attendees: [],
        });
    setFormOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  return (
    <Segment clearing>
      <Header
        content={selectedEvent ? "Edit the event" : "Create new event"}
      ></Header>
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type="text"
            placeholder="Event title"
            value={values.title}
            name="title"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Category"
            value={values.category}
            name="category"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Description"
            value={values.description}
            name="description"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="City"
            value={values.city}
            name="city"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Venue"
            value={values.venue}
            name="venue"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="date"
            placeholder="Date"
            value={values.date}
            name="date"
            onChange={(e) => handleInputChange(e)}
          />
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
