import Card from "react-bootstrap/Card";
import { Event } from "@model/Event";

interface Props {
  event: Event;
}

const EventCard: React.FC<Props> = ({ event }) => (
  <Card className="mb-3">
    <Card.Body>
      <Card.Title>{event.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {event.date} at {event.time}
      </Card.Subtitle>
      <Card.Text>{event.description}</Card.Text>
      <Card.Text>
        <strong>Location:</strong> {event.location}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default EventCard;
