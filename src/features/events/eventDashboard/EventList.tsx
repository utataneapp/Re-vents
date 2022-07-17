import React, { SetStateAction } from "react";
import { Event } from "../../../type/type";
import EventListItem from "./EventListItem";

type Props = {
  events: Event[];
  selectEvent: (event: Event) => void;
  deleteEvent: (id: string) => void;
};

export default function EventList({ events, selectEvent, deleteEvent }: Props) {
  return (
    <>
      {events.map((event) => (
        <EventListItem
          event={event}
          key={event.id}
          selectEvent={selectEvent}
          deleteEvent={deleteEvent}
        ></EventListItem>
      ))}
    </>
  );
}
