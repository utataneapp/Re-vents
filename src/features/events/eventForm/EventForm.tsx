import { ReactComponentElement, useState } from "react";
import { Event } from "../../../type/type";
import { Button, Header, Segment } from "semantic-ui-react";
import * as Histroy from "history";
import cuid from "cuid";
import { NavLink, RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/api/re-dux/store";
import { createEvent, updateEvent } from "../../../app/api/re-dux/eventsSlice";
import { Formik, Form, Field, validateYupSchema, ErrorMessage } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import MyDateInput from "../../../app/common/form/MyDateInput";

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
    date: new Date(""),
  };

  const [values, setValues] = useState(initialValues);

  const validationSchema = Yup.object({
    title: Yup.string().required("You must provide a title"),
    category: Yup.string().required("You must provide a category"),
    description: Yup.string().required(),
    city: Yup.string().required(),
    venue: Yup.string().required(),
    date: Yup.date().required(),
  });

  return (
    <Segment clearing>
      <Header sub color="teal" content={"Event Details"}></Header>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
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
        }}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form className="ui form">
            <MyTextInput name="title" placeholder="Event title" />
            <MySelectInput name="category" placeholder="Category" />
            <MyTextArea name="description" placeholder="Description" rows={3} />
            <Header sub color="teal" content="Event Location Detailes"></Header>
            <MyTextInput name="city" placeholder="City" />
            <MyTextInput name="venue" placeholder="Venue" />
            <MyDateInput
              name="date"
              placeholderText="Event date"
              timeFormat="HH:mm"
              showTimeSelect
              timeCaption="time"
              dateFormat="MMMM d,yyyy h:mm a"
            />
            <Button
              loading={isSubmitting}
              disabled={isSubmitting || !dirty || !isValid}
              type="submit"
              floated="right"
              positive
              content="Submit"
            ></Button>
            <Button
              as={NavLink}
              disabled={isSubmitting}
              to="/events"
              type="submit"
              floated="right"
              content="Cancel"
            ></Button>
          </Form>
        )}
      </Formik>
    </Segment>
  );
}
