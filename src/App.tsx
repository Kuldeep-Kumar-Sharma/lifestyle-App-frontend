import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";

function App() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Life Style App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#logevents">Log Events</Nav.Link>
          <Nav.Link href="#logemotions">Log Emotions</Nav.Link>
          <Nav.Link href="#dailyJournal">Daily Journal</Nav.Link>
          <Nav.Link href="#planning">Planning</Nav.Link>
          <Nav.Link href="#longtermGoal">Long Term Goals</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default App;
