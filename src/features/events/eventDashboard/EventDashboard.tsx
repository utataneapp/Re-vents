import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";

export default function EventDashboard() {
  const [events, setEvents] = useState(sampleData);

  // const handleCreateEvent = (event: Event) => {
  //   setEvents((pre) => [...pre, event]);
  // };

  // const handleUpdateEvent = (updateEvent: Event) => {
  //   setEvents(
  //     events.map((evt) => (evt.id === updateEvent.id ? updateEvent : evt))
  //   );
  //   selectEvent(null);
  //   setFormOpen(false);
  // };

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter((evt) => evt.id !== eventId));
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} deleteEvent={handleDeleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event Filters</h2>
      </Grid.Column>
    </Grid>
  );
}
