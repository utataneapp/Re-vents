import React from "react";
import { Image, List } from "semantic-ui-react";

type Props = {
  attendee: {
    id: string;
    name: string;
    photoURL: string;
  };
};

export default function EventListAttendee({ attendee }: Props) {
  return (
    <List.Item>
      <Image size="mini" circular src="/assets/user.png" />
    </List.Item>
  );
}
