import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
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
    </Container>
  );
}

export default LogEvents;
