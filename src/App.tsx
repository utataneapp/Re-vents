import React from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "./features/events/eventDashboard/EventDashboard";
import { Event } from "./type/type";
import NavBar from "./features/nav/NavBar";
import HomePage from "./features/home/HomePage";
import { Route, Router, Switch } from "react-router-dom";
import EventForm from "./features/events/eventForm/EventForm";
import EventDetailedPage from "./features/events/eventsDetails/EventDetailedPage";

function App() {
  return (
    <>
      <Route exact path={"/"} component={HomePage}></Route>
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className="main">
              <Route exact path={"/events"} component={EventDashboard} />
              <Route path={"/events/:id"} component={EventDetailedPage} />
              <Route
                path={["/createEvent", "manage/:id"]}
                component={EventForm}
              />
            </Container>
          </>
        )}
      ></Route>
    </>
  );
}

export default App;
