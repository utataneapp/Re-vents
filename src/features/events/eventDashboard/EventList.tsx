import React from "react";
import EventListItem from "./EventListItem";

type Props = {
  events: {
    id: string;
    title: string;
    date: string;
    category: string;
    description: string;
    city: string;
    venue: string;
    hostedBy: string;
    hostPhotoURL: string;
    attendees: { id: string; name: string; photoURL: string }[];
  }[];
};

export default function EventList({ events }: Props) {
  return (
    <>
      {events.map((event) => (
        <EventListItem event={event} key={event.id}></EventListItem>
      ))}
    </>
  );
}
