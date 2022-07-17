import React from "react";
import { Image, List } from "semantic-ui-react";
import { Attendee } from "../../../type/type";

export default function EventListAttendee({ attendee }: Attendee) {
  return (
    <List.Item>
      <Image size="mini" circular src="/assets/user.png" />
    </List.Item>
  );
}
