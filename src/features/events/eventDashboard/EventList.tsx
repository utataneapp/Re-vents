import { SetStateAction } from "react";
import { Event } from "../../../type/type";
import EventListItem from "./EventListItem";

type Props = {
  events: Event[];
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
