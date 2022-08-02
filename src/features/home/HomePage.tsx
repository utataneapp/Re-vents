import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Segment,
} from "semantic-ui-react";

export default function HomePage({ history }: { history: any }) {
  return (
    <Segment inverted textAlign="center" className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            style={{ marginBottom: 12 }}
          />
          Re-vents
        </Header>
        <Button size="huge" inverted onClick={() => history.push("/events")}>
          Get Started
          <Icon name="arrow right" inverted />
        </Button>
      </Container>
    </Segment>
  );
}
