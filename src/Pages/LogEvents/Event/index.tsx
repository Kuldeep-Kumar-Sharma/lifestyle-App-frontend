import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Event as EventModel } from "@model/Event"; // Importing the Event model

interface EventProps {
  event: EventModel; // Using the Event model as a prop type
}

const Event: React.FC<EventProps> = ({ event }) => {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{event.date} at {event.time}</Card.Subtitle>
          <Card.Text>{event.description}</Card.Text>
          <Card.Text>
            <strong>Location:</strong> {event.location}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Event;