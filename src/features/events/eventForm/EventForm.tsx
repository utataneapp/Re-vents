import React, { ReactComponentElement, useState } from "react";
import { Event } from "../../../type/type";
import {
  Button,
  Form,
  Header,
  HtmlInputrops,
  Segment,
} from "semantic-ui-react";
import * as Histroy from "history";
import cuid from "cuid";
import { NavLink, RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/api/re-dux/events/store";
import { createEvent, updateEvent } from "../../../app/api/re-dux/events/slice";

export default function EventForm(props: RouteComponentProps<{ id: string }>) {
  const { match, history } = props;
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state: RootState) =>
    state.events.events.find((e) => e.id === match.params.id)
  );

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
      ? dispatch(updateEvent({ ...selectedEvent, ...values }))
      : dispatch(
          createEvent({
            ...values,
            id: cuid(),
            hostedBy: "Bob",
            hostPhotoURL: "",
            attendees: [],
          })
        );
    history.push("/events");
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
          as={NavLink}
          to="/events"
          type="submit"
          floated="right"
          content="cancel"
        ></Button>
      </Form>
    </Segment>
  );
}
