import React from "react";
import { NavLink } from "react-router-dom";
import { List, Icon, Item, Segment, Button } from "semantic-ui-react";
import { Event } from "../../../type/type";
import EventListAttendee from "./EventListAttendee";

type Props = {
  event: Event;
  deleteEvent: (id: string) => void;
};

export default function EventListItem({ event, deleteEvent }: Props) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              size="tiny"
              circular
              src={event.hostPhotoURL}
            ></Item.Image>
            <Item.Content>
              <Item.Header content={event.title}></Item.Header>
              <Item.Description>Hosted by {event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" />
          {event.date}
          <Icon name="marker" />
          {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee
              key={attendee.id}
              attendee={attendee}
            ></EventListAttendee>
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>{event.description}</div>
        <Button
          onClick={() => deleteEvent(event.id)}
          color="red"
          floated="right"
          content="Delete"
        />
        <Button
          as={NavLink}
          to={"/events/:id"}
          color="teal"
          floated="right"
          content="View"
        />
      </Segment>
    </Segment.Group>
  );
}
