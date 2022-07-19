import React from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "./features/events/eventDashboard/EventDashboard";
import { Event } from "./type/type";
import NavBar from "./features/nav/NavBar";
import HomePage from "./features/home/HomePage";
import { Route, Router, Switch, useLocation } from "react-router-dom";
import EventForm from "./features/events/eventForm/EventForm";
import EventDetailedPage from "./features/events/eventsDetails/EventDetailedPage";
import Sandbox from "./features/events/sandbox/SandBox";

function App() {
  const { key } = useLocation();
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
              <Route path={"/sandbox"} component={Sandbox} />
              <Route path={"/events/:id"} component={EventDetailedPage} />
              <Route
                path={["/createEvent", "/manage/:id"]}
                component={EventForm}
                key={key}
              />
            </Container>
          </>
        )}
      ></Route>
    </>
  );
}

export default App;
