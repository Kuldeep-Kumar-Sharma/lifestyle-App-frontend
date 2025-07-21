import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import EventCard from "./EventCard";
import { Event } from "@model/Event";
import { v4 as uuidv4 } from "uuid";

function LogEvents() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    location: "",
  });
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.description.trim() ||
      !formData.date.trim() ||
      !formData.time.trim() ||
      !formData.location.trim()
    ) {
      setError("All fields are required.");
      setSuccess("");
      return;
    }
    setEvents([
      {
        id: uuidv4(),
        ...formData,
      },
      ...events,
    ]);
    setFormData({
      name: "",
      description: "",
      date: "",
      time: "",
      location: "",
    });
    setError("");
    setSuccess("Event logged successfully!");
  };

  return (
    <Container className="mt-4">
      <h1>Log Event</h1>
      <Tabs defaultActiveKey="addEvent" id="event-tabs" className="mb-3">
        <Tab eventKey="addEvent" title="Add Event">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="eventName">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter event name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="eventDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter event description"
                rows={3}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="eventDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="eventTime">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="eventLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter event location"
              />
            </Form.Group>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Button type="submit" variant="primary">
              Save Event
            </Button>
          </Form>
        </Tab>
        <Tab eventKey="pastEvents" title="Past Events">
          {events.length === 0 && <div>No events logged yet.</div>}
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </Tab>
      </Tabs>
    </Container>
  );
}

export default LogEvents;
