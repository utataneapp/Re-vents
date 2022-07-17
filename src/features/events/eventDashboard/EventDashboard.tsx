import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventForm from "../eventForm/EventForm";
import EventList from "./EventList";
import { Event } from "../../../type/type";
import { sampleData } from "../../../app/api/sampleData";

type Props = {
  formOpen: boolean;
  setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectEvent: (event: Event | null) => void;
  selectedEvent: Event | null;
};

export default function EventDashboard({
  formOpen,
  setFormOpen,
  selectEvent,
  selectedEvent,
}: Props) {
  const [events, setEvents] = useState(sampleData);

  const handleCreateEvent = (event: Event) => {
    setEvents((pre) => [...pre, event]);
  };

  const handleUpdateEvent = (updateEvent: Event) => {
    setEvents(
      events.map((evt) => (evt.id === updateEvent.id ? updateEvent : evt))
    );
    selectEvent(null);
    setFormOpen(false);
  };

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter((evt) => evt.id !== eventId));
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}
          selectEvent={selectEvent}
          deleteEvent={handleDeleteEvent}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            setEvents={setEvents}
            createEvent={handleCreateEvent}
            selectedEvent={selectedEvent}
            updateEvent={handleUpdateEvent}
            key={selectedEvent ? selectedEvent.id : null}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
