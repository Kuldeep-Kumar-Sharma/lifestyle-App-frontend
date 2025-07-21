import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./index.css";

function Home() {
  // Dummy data for illustration
  const stats = {
    events: 12,
    journals: 8,
    goalsProgress: 65,
  };

  const recentActivity = [
    { type: "Event", text: "Yoga Class", date: "Today, 7am" },
    { type: "Journal", text: "Feeling motivated", date: "Yesterday" },
    { type: "Event", text: "Team Meeting", date: "Yesterday, 3pm" },
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Welcome back!</h2>
      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Events Logged</Card.Title>
              <Card.Text>{stats.events}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Journals Written</Card.Title>
              <Card.Text>{stats.journals}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Goals Progress</Card.Title>
              <Card.Text>{stats.goalsProgress}%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Card>
        <Card.Header>Recent Activity</Card.Header>
        <ListGroup variant="flush">
          {recentActivity.map((item, idx) => (
            <ListGroup.Item key={idx}>
              <strong>{item.type}:</strong> {item.text}{" "}
              <span className="text-muted">({item.date})</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </Container>
  );
}

export default Home;
