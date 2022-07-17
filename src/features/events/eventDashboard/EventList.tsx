import React, { SetStateAction } from "react";
import { Event } from "../../../type/type";
import EventListItem from "./EventListItem";

type Props = {
  events: Event[];
  deleteEvent: (id: string) => void;
};

export default function EventList({ events, deleteEvent }: Props) {
  return (
    <>
      {events.map((event) => (
        <EventListItem
          event={event}
          key={event.id}
          deleteEvent={deleteEvent}
        ></EventListItem>
      ))}
    </>
  );
}
