import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "./features/events/eventDashboard/EventDashboard";
import { Event } from "./type/type";
import NavBar from "./features/nav/NavBar";

function App() {
  const [formOpen, setFormOpen] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleSelectEvent = (event: Event | null) => {
    setSelectedEvent(event);
    setFormOpen(true);
  };

  const handleCreateOpen = () => {
    setSelectedEvent(null);
    setFormOpen(true);
  };

  return (
    <>
      <NavBar setFormOpen={handleCreateOpen} />
      <Container className="main">
        <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectEvent={handleSelectEvent}
          selectedEvent={selectedEvent}
        />
      </Container>
    </>
  );
}

export default App;
