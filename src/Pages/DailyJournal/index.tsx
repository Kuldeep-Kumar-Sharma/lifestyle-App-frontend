import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import JournalEntryCard from "./JournalEntry";
import { JournalEntry } from "@model/JournalEntry";
import { v4 as uuidv4 } from "uuid";

function DailyJournal() {
  const [journalText, setJournalText] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const now = new Date();
  const dateStr = now.toLocaleDateString();
  const timeStr = now.toLocaleTimeString();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!journalText.trim()) {
      setError("Journal entry cannot be empty.");
      setSuccess("");
      return;
    }
    setError("");
    setSuccess("Journal entry saved!");
    setEntries([
      {
        id: uuidv4(),
        date: dateStr,
        time: timeStr,
        text: journalText,
      },
      ...entries,
    ]);
    setJournalText("");
  };

  return (
    <Container className="mt-4">
      <h1>Daily Journal</h1>
      <p>Record your thoughts and experiences for today.</p>
      <p>
        Today's date: <strong>{dateStr}</strong>
      </p>
      <p>
        Current time: <strong>{timeStr}</strong>
      </p>
      <p>
        Use this journal to reflect on your day, jot down thoughts, or record
        significant events. Entries are saved automatically and can be viewed
        later in the "Past Days" tab.
      </p>
      <p>
        <strong>Note:</strong> Entries are stored in memory and will not persist
        across page reloads. For persistent storage, consider integrating with a
        backend service or local storage.
      </p>
      <p>
        <strong>Tip:</strong> You can use this journal to track your daily
        activities, emotions, or any significant events. Reflecting on your day
      </p>
      <Tabs
        defaultActiveKey="today"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="today" title="Today">
          <Form onSubmit={handleSubmit}>
            <Button type="submit" variant="primary">
              Save Entry
            </Button>
            <Form.Group className="mb-3" controlId="journalDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="text" value={dateStr} disabled />
            </Form.Group>
            <Form.Group className="mb-3" controlId="journalTime">
              <Form.Label>Time</Form.Label>
              <Form.Control type="text" value={timeStr} disabled />
            </Form.Group>
            <Form.Group className="mb-3" controlId="journalText">
              <Form.Label>Journal Entry</Form.Label>
              <Form.Control
                as="textarea"
                rows={8}
                value={journalText}
                onChange={(e) => setJournalText(e.target.value)}
                placeholder="Write your journal entry here..."
              />
            </Form.Group>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
          </Form>
        </Tab>
        <Tab eventKey="pastDays" title="Past Days">
          {entries.length === 0 && <div>No journal entries yet.</div>}
          {entries.map((entry) => (
            <JournalEntryCard key={entry.id} entry={entry} />
          ))}
        </Tab>
      </Tabs>
    </Container>
  );
}

export default DailyJournal;