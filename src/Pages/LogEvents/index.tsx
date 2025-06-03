import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Event from "./Event"; // Importing the Event component
import "./index.css";

function LogEvents() {
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    eventDescription: "",
  });
  const [errors, setErrors] = useState({
    eventName: "",
    eventDate: "",
    eventDescription: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear errors on input change
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { eventName: "", eventDate: "", eventDescription: "" };

    if (!formData.eventName.trim()) {
      newErrors.eventName = "Event name is required.";
      isValid = false;
    }

    if (!formData.eventDate.trim()) {
      newErrors.eventDate = "Event date is required.";
      isValid = false;
    }

    if (!formData.eventDescription.trim()) {
      newErrors.eventDescription = "Event description is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage("Event logged successfully!");
      setFormData({ eventName: "", eventDate: "", eventDescription: "" }); // Reset form
    }
  };

  const events = [
    {
      name: "Event 1",
      date: "2023-10-01",
      time: "10:00 AM",
      description: "Description for Event 1",
      location: "Location 1",
    },
    {
      name: "Event 2",
      date: "2023-10-02",
      time: "11:00 AM",
      description: "Description for Event 2",
      location: "Location 2",
    },
    {
      name: "Event 3",
      date: "2023-10-03",
      time: "12:00 PM",
      description: "Description for Event 3",
      location: "Location 3",
    },];
  
  return (
    <Container className="mt-5">
      <h1>Log Event</h1>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="eventName">
          <Form.Label>Event Name</Form.Label>
          <Form.Control
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            isInvalid={!!errors.eventName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.eventName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="eventDate">
          <Form.Label>Event Date</Form.Label>
          <Form.Control
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            isInvalid={!!errors.eventDate}
          />
          <Form.Control.Feedback type="invalid">
            {errors.eventDate}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="eventDescription">
          <Form.Label>Event Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="eventDescription"
            value={formData.eventDescription}
            onChange={handleChange}
            isInvalid={!!errors.eventDescription}
          />
          <Form.Control.Feedback type="invalid">
            {errors.eventDescription}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Log Event
        </Button>
      </Form>
      {events.map((event, index) => (
        <Container key={index} className="mt-4">
          <Event event={event} />
        </Container>))}
    </Container>);
}

export default LogEvents;
