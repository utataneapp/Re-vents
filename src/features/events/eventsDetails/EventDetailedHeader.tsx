import React from "react";
import { NavLink } from "react-router-dom";
import { Event } from "../../../type/type";
import { Button, Header, Image, Item, Segment } from "semantic-ui-react";

type Props = {
  event: Event | undefined;
};
export default function EventDetailedHeader({ event }: Props) {
  const eventImageTextStyle = {
    position: "absolute",
    bottom: "5%",
    left: "5%",
    width: "100%",
    height: "auto",
    color: "white",
  };

  const eventImageStyle = {
    filter: "brightness(30%)",
  };

  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image
          src={`/assets/categoryImages/${event?.category}.jpg`}
          fluid
          style={eventImageStyle}
        />

        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={event?.title}
                  style={{ color: "white" }}
                />
                <p>{event?.date}</p>
                <p>
                  Hosted by <strong>{event?.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button>Cancel My Place</Button>
        <Button color="teal">JOIN THIS EVENT</Button>

        <Button
          as={NavLink}
          to={`/manage/${event!.id}`}
          color="orange"
          floated="right"
        >
          Manage Event
        </Button>
      </Segment>
    </Segment.Group>
  );
}
