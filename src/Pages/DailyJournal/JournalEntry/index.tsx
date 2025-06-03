import Card from "react-bootstrap/Card";
import { JournalEntry } from "@model/JournalEntry";

interface Props {
  entry: JournalEntry;
}

const JournalEntryCard: React.FC<Props> = ({ entry }) => (
  <Card className="mb-3">
    <Card.Body>
      <Card.Title>
        {entry.date} at {entry.time}
      </Card.Title>
      <Card.Text>{entry.text}</Card.Text>
    </Card.Body>
  </Card>
);

export default JournalEntryCard;
